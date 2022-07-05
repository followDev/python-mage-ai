import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeContext } from 'styled-components';
import { useMutation } from 'react-query';

import AddNewBlocks from '@components/PipelineDetail/AddNewBlocks';
import BlockType, {
  BLOCK_TYPE_ABBREVIATION_MAPPING,
  BLOCK_TYPE_NAME_MAPPING,
  BlockTypeEnum,
} from '@interfaces/BlockType';
import Button from '@oracle/elements/Button';
import Circle from '@oracle/elements/Circle';
import CodeEditor, {
  CodeEditorSharedProps,
  OnDidChangeCursorPositionParameterType,
} from '@components/CodeEditor';
import CodeOutput from './CodeOutput';
import CommandButtons, { CommandButtonsSharedProps } from './CommandButtons';
import Flex from '@oracle/components/Flex';
import FlexContainer from '@oracle/components/FlexContainer';
import KernelOutputType, {
  DataTypeEnum,
  ExecutionStateEnum,
} from '@interfaces/KernelOutputType';
import LabelWithValueClicker from '@oracle/components/LabelWithValueClicker';
import Link from '@oracle/elements/Link';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import Tooltip from '@oracle/components/Tooltip';
import api from '@api';
import usePrevious from '@utils/usePrevious';
import {
  BlockDivider,
  BlockDividerInner,
} from './index.style';
import {
  ContainerStyle,
  CodeContainerStyle,
  getColorsForBlockType,
} from './index.style';
import { FileFill, Stack } from '@oracle/icons';
import {
  KEY_CODE_ENTER,
  KEY_CODE_META,
  KEY_CODE_SHIFT,
} from '@utils/hooks/keyboardShortcuts/constants';
import { PADDING_UNITS, UNIT } from '@oracle/styles/units/spacing';
import { SINGLE_LINE_HEIGHT } from '@components/CodeEditor/index.style';
import { onError, onSuccess } from '@api/utils/response';
import { onlyKeysPresent } from '@utils/hooks/keyboardShortcuts/utils';
import { pluralize } from '@utils/string';
import { useKeyboardContext } from '@context/Keyboard';
import { usePipelineContext } from '@context/Pipeline';

type CodeBlockProps = {
  addNewBlock: (block: BlockType) => void;
  block: BlockType;
  defaultValue?: string;
  executionState: ExecutionStateEnum;
  mainContainerRef?: any;
  noDivider?: boolean;
  messages: KernelOutputType[];
  onChange?: (value: string) => void;
  runBlock: (payload: {
    block: BlockType;
    code: string;
  }) => void;
  setAnyInputFocused: (value: boolean) => void;
} & CodeEditorSharedProps & CommandButtonsSharedProps;

function CodeBlockProps({
  addNewBlock,
  block,
  defaultValue = '',
  deleteBlock,
  executionState,
  height,
  interruptKernel,
  mainContainerRef,
  messages = [],
  noDivider,
  onChange,
  runBlock,
  selected,
  setAnyInputFocused,
  setSelected,
  setTextareaFocused,
  textareaFocused,
}: CodeBlockProps) {
  const {
    fetchPipeline,
    pipeline,
  } = usePipelineContext();
  const themeContext = useContext(ThemeContext);
  const [addNewBlocksVisible, setAddNewBlocksVisible] = useState(false);
  const [content, setContent] = useState(defaultValue)
  const [errorMessages, setErrorMessages] = useState(null);
  const [isEditingBlock, setIsEditingBlock] = useState(false);
  const [newBlockUuid, setNewBlockUuid] = useState(block.uuid);
  const [runCount, setRunCount] = useState<Number>(0);
  const [runEndTime, setRunEndTime] = useState<Number>(0);
  const [runStartTime, setRunStartTime] = useState<Number>(0);

  const runBlockAndTrack = useCallback((code?: string) => {
    runBlock({
      block,
      code: code || content,
    });
    setRunCount(1 + Number(runCount));
    setRunEndTime(null);
  }, [
    block,
    content,
    runCount,
    runBlock,
    setRunCount,
    setRunEndTime,
  ]);

  const messagesPrevious = usePrevious(messages);
  useEffect(() => {
    if (!messagesPrevious?.length && messages?.length >= 1) {
      setRunStartTime(Number(new Date()));
    }
  }, [
    messages,
    messagesPrevious,
    setRunStartTime,
  ]);

  const isInProgress = messages?.length >= 1 && executionState !== ExecutionStateEnum.IDLE;

  const finalExecutionStatePrevious = usePrevious(executionState);
  useEffect(() => {
    if (executionState === ExecutionStateEnum.IDLE
      && executionState !== finalExecutionStatePrevious
    ) {
      setRunEndTime(Number(new Date()));
    }
  }, [
    executionState,
    finalExecutionStatePrevious,
    setRunEndTime,
  ]);

  const onDidChangeCursorPosition = useCallback(({
    editorRect: {
      height,
      top,
    },
    position: {
      lineNumber,
    },
  }: OnDidChangeCursorPositionParameterType) => {
    if (mainContainerRef?.current) {
      const {
        height: mainContainerHeight,
      } = mainContainerRef.current.getBoundingClientRect();

      const heightAtLineNumber = lineNumber * SINGLE_LINE_HEIGHT;

      if (top + heightAtLineNumber > mainContainerHeight) {
        const newY = mainContainerRef.current.scrollTop
          + ((heightAtLineNumber - mainContainerHeight) + top);

        mainContainerRef.current.scrollTo(0, newY);
      } else if (heightAtLineNumber + top < SINGLE_LINE_HEIGHT) {
        const newY = mainContainerRef.current.scrollTop
          + ((heightAtLineNumber + top) - SINGLE_LINE_HEIGHT);
        mainContainerRef.current.scrollTo(0, newY);
      }
    }
  }, [
    mainContainerRef,
  ]);

  const messagesWithType = useMemo(() => {
    if (errorMessages?.length >= 0) {
      return errorMessages.map((errorMessage: string) => ({
        data: errorMessage,
        execution_state: ExecutionStateEnum.IDLE,
        type: DataTypeEnum.TEXT_PLAIN,
      }));
    }
    return messages.filter(({ type }: KernelOutputType) => type);
  }, [
    errorMessages,
    messages,
  ]);
  const hasError = !!messagesWithType.find(({ error }) => error);

  const color = getColorsForBlockType(block.type, { theme: themeContext }).accent;
  const numberOfParentBlocks = block?.upstream_blocks?.length || 0;
  const borderColorShareProps = {
    blockType: block.type,
    hasError,
    selected,
  };
  const hasOutput = messagesWithType.length >= 1;
  const onClickSelectBlock = useCallback(() => {
    if (!selected) {
      setAnyInputFocused(false);
      setSelected(true);
    }
  }, [
    setAnyInputFocused,
    setSelected,
  ]);

  const [updateBlock] = useMutation(
    api.blocks.pipelines.useUpdate(pipeline?.uuid, block.uuid),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: () => {
            setIsEditingBlock(false);
            fetchPipeline();
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
      onError: (response: any) => {
        const {
          messages,
        } = onError(response);
        setErrorMessages(messages);
      },
    },
  );

  const uuidKeyboard = `CodeBlock/${block.uuid}`;
  const {
    registerOnKeyDown,
    unregisterOnKeyDown,
  } = useKeyboardContext();

  useEffect(() => () => {
    unregisterOnKeyDown(uuidKeyboard);
  }, [unregisterOnKeyDown, uuidKeyboard]);

  registerOnKeyDown(
    uuidKeyboard,
    (event, keyMapping, keyHistory) => {
      if (isEditingBlock
        && String(keyHistory[0]) === String(KEY_CODE_ENTER)
        && String(keyHistory[1]) !== String(KEY_CODE_META)
      ) {
        // @ts-ignore
        updateBlock({
          block: {
            ...block,
            name: newBlockUuid,
          },
        })
      } else if (selected) {
        if (onlyKeysPresent([KEY_CODE_META, KEY_CODE_ENTER], keyMapping)) {
          runBlockAndTrack();
        } else if (onlyKeysPresent([KEY_CODE_SHIFT, KEY_CODE_ENTER], keyMapping)) {
          runBlockAndTrack();
          addNewBlock({
            type: block.type,
          });
        }
      }
    },
    [
      addNewBlock,
      block,
      isEditingBlock,
      newBlockUuid,
      runBlockAndTrack,
      selected,
      updateBlock,
    ],
  );

  return (
    <div style={{ position: 'relative' }}>
      <FlexContainer
        alignItems="center"
        justifyContent="space-between"
        style={{
          marginBottom: UNIT / 4,
        }}
      >
        <Flex alignItems="center" flex={1}>
          <Tooltip
            block
            label={BLOCK_TYPE_NAME_MAPPING[block.type]}
            size={null}
            widthFitContent
          >
            <FlexContainer alignItems="center">
              <Circle
                color={color}
                size={UNIT * 1.5}
                square
              />

              <Spacing mr={1} />

              <Text
                color={color}
                monospace
              >
                {BLOCK_TYPE_ABBREVIATION_MAPPING[block.type]}
              </Text>
            </FlexContainer>
          </Tooltip>

          <Spacing mr={PADDING_UNITS} />

          <FileFill size={UNIT * 1.5} />

          <Spacing mr={1} />

          <FlexContainer alignItems="center">
            <LabelWithValueClicker
              bold={false}
              inputValue={newBlockUuid}
              muted
              monospace
              notRequired
              onBlur={() => setTimeout(() => setIsEditingBlock(false), 300)}
              onChange={(e) => {
                setNewBlockUuid(e.target.value);
              }}
              onClick={() => setIsEditingBlock(true)}
              onFocus={() => setIsEditingBlock(true)}
              stacked
              value={!isEditingBlock && block.uuid}
            />

            {isEditingBlock && (
              <>
                <Spacing ml={1} />
                <Link
                  // @ts-ignore
                  onClick={() => updateBlock({
                    block: {
                      ...block,
                      name: newBlockUuid,
                    },
                  })}
                  preventDefault
                  sameColorAsText
                  small
                >
                  Update name
                </Link>
              </>
            )}
          </FlexContainer>
        </Flex>

        <div>
          <Tooltip
            appearBefore
            block
            label={`
              ${pluralize('parent block', numberOfParentBlocks)}${numberOfParentBlocks === 0 && '. Click to select 1 or more blocks to depend on.'}
            `}
            size={null}
            widthFitContent
          >
            <Button
              noBackground
              noBorder
              noPadding
              // onClick={() => toggleBefore()}
            >
              <FlexContainer alignItems="center">
                <Text monospace>
                  {numberOfParentBlocks}
                </Text>

                <Spacing mr={1} />

                <Stack size={UNIT * 2} />
              </FlexContainer>
            </Button>
          </Tooltip>
        </div>
      </FlexContainer>

      {(selected || isInProgress) && (
        <CommandButtons
          block={block}
          deleteBlock={deleteBlock}
          executionState={executionState}
          interruptKernel={interruptKernel}
          runBlock={runBlockAndTrack}
        />
      )}

      <ContainerStyle onClick={() => onClickSelectBlock()}>
        <CodeContainerStyle
          {...borderColorShareProps}
          className={selected && textareaFocused ? 'selected' : null}
          hasOutput={hasOutput}
        >
          <CodeEditor
            // autoSave
            autoHeight
            height={height}
            onChange={(val: string) => {
              setContent(val);
              onChange?.(val);
            }}
            onDidChangeCursorPosition={onDidChangeCursorPosition}
            placeholder="Start typing here..."
            runBlock={runBlockAndTrack}
            selected={selected}
            setSelected={setSelected}
            setTextareaFocused={setTextareaFocused}
            textareaFocused={textareaFocused}
            value={content}
            width="100%"
          />
        </CodeContainerStyle>

        {hasOutput && (
          <CodeOutput
            {...borderColorShareProps}
            isInProgress={isInProgress}
            messages={messagesWithType}
            runCount={runCount}
            runEndTime={runEndTime}
            runStartTime={runStartTime}
          />
        )}
      </ContainerStyle>

      {!noDivider && (
        <BlockDivider
          onMouseEnter={() => setAddNewBlocksVisible(true)}
          onMouseLeave={() => setAddNewBlocksVisible(false)}
        >
          {addNewBlocksVisible && (
            <AddNewBlocks
              addNewBlock={addNewBlock}
              compact
            />
          )}
          <BlockDividerInner className="block-divider-inner" />
        </BlockDivider>
      )}
    </div>
  );
}

export default CodeBlockProps;
