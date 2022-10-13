import { ThemeContext } from 'styled-components';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import BlocksSeparatedGradient from '@oracle/icons/custom/BlocksSeparatedGradient';
import BlockRunsTable from '@components/PipelineDetail/BlockRuns/Table';
import BlockRunType from '@interfaces/BlockRunType';
import ButtonTabs, { TabType } from '@oracle/components/Tabs/ButtonTabs';
import PageSectionHeader from '@components/shared/Sticky/PageSectionHeader';
import Paginate from '@components/shared/Paginate';
import PipelineDetailPage from '@components/PipelineDetailPage';
import PipelineRunGradient from '@oracle/icons/custom/PipelineRunGradient';
import PipelineRunType, { RunStatus } from '@interfaces/PipelineRunType';
import PipelineRunsTable from '@components/PipelineDetail/Runs/Table';
import Spacing from '@oracle/elements/Spacing';
import api from '@api';
import buildTableSidekick, {
  TABS as TABS_SIDEKICK,
} from '@components/PipelineRun/shared/buildTableSidekick';
import {
  BlocksSeparated,
  PipelineRun,
} from '@oracle/icons';
import usePrevious from '@utils/usePrevious';
import { PageNameEnum } from '@components/PipelineDetailPage/constants';
import { goToWithQuery } from '@utils/routing';
import { ignoreKeys, isEqual } from '@utils/hash';
import { indexBy } from '@utils/array';
import { queryFromUrl, queryString } from '@utils/url';

const TAB_URL_PARAM = 'tab';

const TAB_PIPELINE_RUNS = {
  Icon: PipelineRun,
  IconSelected: PipelineRunGradient,
  label: () => 'Pipeline runs',
  uuid: 'pipeline_runs',
};
const TAB_BLOCK_RUNS = {
  Icon: BlocksSeparated,
  IconSelected: BlocksSeparatedGradient,
  label: () => 'Block runs',
  uuid: 'block_runs',
};
const TABS = [
  TAB_PIPELINE_RUNS,
  TAB_BLOCK_RUNS,
];

const LIMIT = 30;

type PipelineRunsProp = {
  pipeline: {
    uuid: string;
  };
};

function PipelineRuns({
  pipeline: pipelineProp,
}: PipelineRunsProp) {
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState<TabType>(TAB_PIPELINE_RUNS);
  const [selectedTabSidekick, setSelectedTabSidekick] = useState<TabType>(TABS_SIDEKICK[0]);
  const [query, setQuery] = useState<{
    offset?: number;
    pipeline_run_id?: number;
    pipeline_uuid?: string;
  }>(null);

  const pipelineUUID = pipelineProp.uuid;
  const { data: dataPipeline } = api.pipelines.detail(pipelineUUID);
  const pipeline = useMemo(() => ({
    ...dataPipeline?.pipeline,
    uuid: pipelineUUID,
  }), [
    dataPipeline,
    pipelineUUID,
  ]);
  const blocks = useMemo(() => pipeline.blocks || [], [pipeline]);
  const blocksByUUID = useMemo(() => indexBy(blocks, ({ uuid }) => uuid), [blocks]);

  const { data: dataBlockRuns } = api.block_runs.list(ignoreKeys(query, [TAB_URL_PARAM]), {}, {
    pauseFetch: !query,
  });
  const blockRuns = useMemo(() => dataBlockRuns?.block_runs || [], [dataBlockRuns]);

  const [selectedRun, setSelectedRun] = useState<PipelineRunType>();
  const [selectedBlockRun, setSelectedBlockRun] = useState<BlockRunType>();

  const q = queryFromUrl();
  const qPrev = usePrevious(q);
  useEffect(() => {
    const {
      pipeline_run_id: pipelineRunId,
    } = q;

    if (!isEqual(q, qPrev)) {
      let newQuery = { ...qPrev, ...q };

      if (pipelineRunId) {
        newQuery.pipeline_run_id = pipelineRunId;
      } else {
        newQuery.pipeline_uuid = pipelineUUID;
      }

      setQuery(newQuery);
    }
  }, [
    pipelineUUID,
    q,
    qPrev,
  ]);

  const {
    data: dataPipelineRuns,
    mutate: fetchPipelineRuns,
  } = api.pipeline_runs.list({
    pipeline_uuid: pipelineUUID,
    _limit: LIMIT,
    _offset: (q?.page ? q.page : 0) * LIMIT,
  });
  const pipelineRuns = useMemo(() => dataPipelineRuns?.pipeline_runs || [], [dataPipelineRuns]);
  const totalRuns = useMemo(() => dataPipelineRuns?.total_count || [], [dataPipelineRuns]);

  const selectedTabPrev = usePrevious(selectedTab);
  useEffect(() => {
    const uuid = q[TAB_URL_PARAM];
    if (uuid) {
      setSelectedTab(TABS.find(({ uuid: tabUUID }) => tabUUID === uuid))
    }
  }, [
    q,
    selectedTab,
    selectedTabPrev,
  ]);

  const tablePipelineRuns = useMemo(() => {
    const page = q?.page ? q.page : 0;

    return (
      <>
        <PipelineRunsTable
          fetchPipelineRuns={fetchPipelineRuns}
          onClickRow={(rowIndex: number) => setSelectedRun((prev) => {
            const run = pipelineRuns[rowIndex];

            return prev?.id !== run.id ? run : null;
          })}
          pipelineRuns={pipelineRuns}
          selectedRun={selectedRun}
        />
        <Spacing p={2}>
          <Paginate
            page={Number(page)}
            maxPages={9}
            onUpdate={(p) => {
              const newPage = Number(p);
              const updatedQuery = {
                ...q,
                page: newPage >= 0 ? newPage : 0,
              }
              router.push(
                '/pipelines/[pipeline]/runs',
                `/pipelines/${pipelineUUID}/runs?${queryString(updatedQuery)}`,
              );
            }}
            totalPages={Math.ceil(totalRuns / LIMIT)}
          />
        </Spacing>
      </>
    );
  }, [
    fetchPipelineRuns,
    pipeline,
    pipelineRuns,
    q,
    selectedRun,
    totalRuns,
  ]);

  const tableBlockRuns = useMemo(() => (
    <BlockRunsTable
      blockRuns={blockRuns}
      pipeline={pipeline}
    />
  ), [
    blockRuns,
    pipeline,
  ]);

  return (
    <PipelineDetailPage
      afterHidden={TAB_PIPELINE_RUNS.uuid === selectedTab?.uuid && !selectedRun}
      buildSidekick={TAB_PIPELINE_RUNS.uuid === selectedTab?.uuid
        ? props => buildTableSidekick({
          ...props,
          selectedRun,
          selectedTab: selectedTabSidekick,
          setSelectedTab: setSelectedTabSidekick,
        })
        : props => buildTableSidekick(props)
      }
      breadcrumbs={[
        {
          label: () => 'Runs',
        },
      ]}
      pageName={PageNameEnum.RUNS}
      pipeline={pipeline}
      title={({ name }) => `${name} runs`}
      uuid={`${PageNameEnum.RUNS}_${pipelineUUID}`}
    >
      <PageSectionHeader>
        <Spacing py={1}>
          <ButtonTabs
            onClickTab={({ uuid }) => goToWithQuery({ tab: uuid }, { replaceParams: true })}
            selectedTabUUID={selectedTab?.uuid}
            tabs={TABS}
          />
        </Spacing>
      </PageSectionHeader>

      {TAB_PIPELINE_RUNS.uuid === selectedTab?.uuid && tablePipelineRuns}
      {TAB_BLOCK_RUNS.uuid === selectedTab?.uuid && tableBlockRuns}
    </PipelineDetailPage>
  );
}

PipelineRuns.getInitialProps = async (ctx: any) => {
  const { pipeline: pipelineUUID }: { pipeline: string } = ctx.query;

  return {
    pipeline: {
      uuid: pipelineUUID,
    },
  };
};

export default PipelineRuns;
