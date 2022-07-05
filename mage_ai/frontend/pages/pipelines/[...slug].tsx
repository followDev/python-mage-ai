import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useMutation } from 'react-query';

import BlockContext from '@context/Block';
import BlockType from '@interfaces/BlockType';
import FileHeaderMenu from '@components/PipelineDetail/FileHeaderMenu';
import Head from '@oracle/elements/Head';
import KernelContext from '@context/Kernel';
import KernelOutputType from '@interfaces/KernelOutputType';
import PipelineContext from '@context/Pipeline';
import PipelineDetail from '@components/PipelineDetail';
import PipelineType from '@interfaces/PipelineType';
import Sidekick from '@components/Sidekick';
import TripleLayout from '@components/TripleLayout';
import api from '@api';
import usePrevious from '@utils/usePrevious';
import { SIDEKICK_VIEWS } from '@components/Sidekick/constants';
import { onSuccess } from '@api/utils/response';
import { pushAtIndex, removeAtIndex } from '@utils/array';
import { randomNameGenerator } from '@utils/string';

type PipelineDetailPageProps = {
  pipeline: PipelineType;
};

function buildContentByBlockUUID(pipeline: PipelineType) {
  return pipeline.blocks.reduce((acc, block: BlockType) => ({
    ...acc,
    [block.uuid]: block.content,
  }), {});
}

function PipelineDetailPage({
  pipeline: pipelineProp,
}: PipelineDetailPageProps) {
  const contentByBlockUUID = useRef({});
  const mainContainerRef = useRef(null);
  const pipelineUUID = pipelineProp.uuid;
  const pipelineUUIDPrev = usePrevious(pipelineUUID);

  const setContentByBlockUUID = (data: {
    [uuid: string]: string;
  }) => {
    contentByBlockUUID.current = {
      ...contentByBlockUUID.current,
      ...data,
    };
  };

  useEffect(() => {
    if (pipelineUUID !== pipelineUUIDPrev) {
      contentByBlockUUID.current = {};
    }
  }, [pipelineUUID, pipelineUUIDPrev]);

  // Pipeline
  const [pipelineLastSaved, setPipelineLastSaved] = useState<Date>(null);
  const [pipelineContentTouched, setPipelineContentTouched] = useState<boolean>(false);

  // Blocks
  const [blocks, setBlocks] = useState<BlockType[]>([]);
  const [runningBlocks, setRunningBlocks] = useState<BlockType[]>([]);
  const [selectedBlock, setSelectedBlock] = useState(null);

  // Kernels
  const [messages, setMessages] = useState<{
    [uuid: string]: KernelOutputType[];
  }>({});

  const {
    data,
    isLoading,
    mutate: fetchPipeline,
  } = api.pipelines.detail(pipelineUUID, {
    include_content: true,
  });
  const pipeline = data?.pipeline;
  const {
    data: dataKernels,
    mutate: fetchKernels,
  } = api.kernels.list({}, {
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });
  const kernels = dataKernels?.kernels;
  const kernel = kernels?.[0];

  const [updatePipeline, { isLoading: isPipelineUpdating }] = useMutation(
    api.pipelines.useUpdate(pipelineUUID, { update_content: true }),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: () => setPipelineContentTouched(false),
          onErrorCallback: ({
            error: {
              errors,
              message,
            },
          }) => {
            console.log(errors, message);
          },
        },
      ),
    },
  );
  const savePipelineContent = useCallback(() => {
    setPipelineLastSaved(new Date());

    // @ts-ignore
    return updatePipeline({
      pipeline: {
        ...pipeline,
        blocks: blocks.map((block: BlockType) => ({
          ...block,
          content: contentByBlockUUID.current[block.uuid] || block.content,
        })),
      },
    });
  }, [
    blocks,
    contentByBlockUUID.current,
    pipeline,
    setPipelineLastSaved,
    updatePipeline,
  ]);

  const [deleteBlock] = useMutation(
    ({ uuid }: BlockType) => api.blocks.pipelines.useDelete(pipelineUUID, uuid)(),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: ({
            block: {
              uuid,
            },
          }) => {
            setBlocks((blocksPrevious) => removeAtIndex(
              blocksPrevious,
              blocksPrevious.findIndex(({ uuid: uuid2 }: BlockType) => uuid === uuid2),
            ));
          },
          onErrorCallback: ({
            error: {
              errors,
              message,
            },
          }) => {
            console.log(errors, message);
          },
        },
      ),
    },
  );

  const [restartKernel] = useMutation(
    api.restart.kernels.useCreate(kernel?.id),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: () => fetchKernels(),
          onErrorCallback: ({
            error: {
              errors,
              message,
            },
          }) => {
            console.log(errors, message);
          },
        },
      ),
    },
  );
  const [interruptKernel] = useMutation(
    api.interrupt.kernels.useCreate(kernel?.id),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: (response) => {

          },
          onErrorCallback: ({
            error: {
              errors,
              message,
            },
          }) => {
            console.log(errors, message);
          },
        },
      ),
    },
  );

  const restartKernelWithConfirm = useCallback(() => {
    const warning = 'Do you want to restart the kernel? All variables will be cleared.';
    if (typeof window !== 'undefined' && window.confirm(warning)) {
      restartKernel();
    }
  }, [restartKernel]);

  const [createBlock] = useMutation(api.blocks.pipelines.useCreate(pipelineUUID));
  const addNewBlockAtIndex = useCallback((
    block: BlockType,
    idx: number,
    onCreateCallback?: (block: BlockType) => void,
  ) => {
    const name = randomNameGenerator();
    // @ts-ignore
    createBlock({
      block: {
        name,
        ...block,
      },
    }).then((response: {
      data: {
        block: BlockType;
      };
    }) => {
      onSuccess(
        response, {
          callback: () => {
            const {
              data: {
                block,
              },
            } = response;
            setBlocks((previousBlocks) => pushAtIndex(block, idx, previousBlocks));
            onCreateCallback?.(block);
          },
          onErrorCallback: ({
            error: {
              errors,
              message,
            },
          }) => {
            console.log(errors, message);
          },
        },
      );
    });
  }, [
    createBlock,
    setBlocks,
  ]);

  useEffect(() => {
    if (typeof pipeline?.blocks !== 'undefined') {
      setBlocks(pipeline.blocks);
      contentByBlockUUID.current = buildContentByBlockUUID(pipeline);
    }
  }, [
    pipeline?.blocks,
    setBlocks,
  ]);

  return (
    <>
      <Head title={pipeline?.name} />

      <PipelineContext.Provider
        value={{
          fetchPipeline,
          pipeline,
          savePipelineContent,
          updatePipeline,
        }}
      >
        <KernelContext.Provider
          value={{
            fetchKernels,
            interruptKernel,
            kernel,
            restartKernel: restartKernelWithConfirm,
            setMessages,
          }}
        >
          <BlockContext.Provider
            value={{
              addNewBlockAtIndex,
              setBlocks,
              setRunningBlocks,
              setSelectedBlock,
            }}
          >
            <TripleLayout
              after={<Sidekick views={SIDEKICK_VIEWS} />}
              before={<div style={{ height: 9999 }} />}
              beforeHeader={<FileHeaderMenu />}
              mainContainerRef={mainContainerRef}
            >
              {pipeline && (
                <PipelineDetail
                  blocks={blocks}
                  deleteBlock={deleteBlock}
                  isPipelineUpdating={isPipelineUpdating}
                  mainContainerRef={mainContainerRef}
                  messages={messages}
                  pipelineContentTouched={pipelineContentTouched}
                  pipelineLastSaved={pipelineLastSaved}
                  runningBlocks={runningBlocks}
                  selectedBlock={selectedBlock}
                  setContentByBlockUUID={setContentByBlockUUID}
                  setPipelineContentTouched={setPipelineContentTouched}
                />
              )}
            </TripleLayout>
          </BlockContext.Provider>
        </KernelContext.Provider>
      </PipelineContext.Provider>
    </>
  );
}

PipelineDetailPage.getInitialProps = async (ctx: any) => {
  const { slug: slugArray }: { slug: string[] } = ctx.query;
  let pipelineUUID;

  if (Array.isArray(slugArray)) {
    pipelineUUID = slugArray[0];
  }

  return {
    pipeline: {
      uuid: pipelineUUID,
    },
  };
};

export default PipelineDetailPage;
