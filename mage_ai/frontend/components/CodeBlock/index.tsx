import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ThemeContext } from 'styled-components';
import { useMutation } from 'react-query';

import AddNewBlocks from '@components/PipelineDetail/AddNewBlocks';
import BlockType, {
  BLOCK_TYPE_NAME_MAPPING,
  BLOCK_TYPE_CONVERTIBLE,
  BlockTypeEnum,
  SetEditingBlockType,
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
import FlyoutMenuWrapper from '@oracle/components/FlyoutMenu/FlyoutMenuWrapper';
import KernelOutputType, {
  DataTypeEnum,
  ExecutionStateEnum,
} from '@interfaces/KernelOutputType';
import LabelWithValueClicker from '@oracle/components/LabelWithValueClicker';
import Link from '@oracle/elements/Link';
import PipelineType from '@interfaces/PipelineType';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import Tooltip from '@oracle/components/Tooltip';
import api from '@api';
import usePrevious from '@utils/usePrevious';
import {
  ArrowDown,
  ChevronDown,
  ChevronUp,
  FileFill,
  Stack,
} from '@oracle/icons';
import {
  BlockDivider,
  BlockDividerInner,
  CodeHelperStyle,
} from './index.style';
import {
  ContainerStyle,
  CodeContainerStyle,
  getColorsForBlockType,
} from './index.style';
import {
  KEY_CODE_CONTROL,
  KEY_CODE_ENTER,
  KEY_CODE_META,
  KEY_CODE_SHIFT,
} from '@utils/hooks/keyboardShortcuts/constants';
import { PADDING_UNITS, UNIT } from '@oracle/styles/units/spacing';
import { SINGLE_LINE_HEIGHT } from '@components/CodeEditor/index.style';
import { executeCode } from '@components/CodeEditor/keyboard_shortcuts/shortcuts';
import { get, set } from '@storage/localStorage';
import { indexBy } from '@utils/array';
import { onError, onSuccess } from '@api/utils/response';
import { onlyKeysPresent } from '@utils/hooks/keyboardShortcuts/utils';
import { pluralize } from '@utils/string';
import { useKeyboardContext } from '@context/Keyboard';

type CodeBlockProps = {
  addNewBlock: (block: BlockType) => Promise<any>;
  block: BlockType;
  blockRefs: any;
  blocks: BlockType[];
  defaultValue?: string;
  executionState: ExecutionStateEnum;
  fetchFileTree: () => void;
  fetchPipeline: () => void;
  mainContainerRef?: any;
  mainContainerWidth: number;
  messages: KernelOutputType[];
  noDivider?: boolean;
  onChange?: (value: string) => void;
  pipeline: PipelineType;
  runBlock: (payload: {
    block: BlockType;
    code: string;
    runDownstream?: boolean;
    runUpstream: boolean;
  }) => void;
  runningBlocks: BlockType[];
  setAnyInputFocused: (value: boolean) => void;
  widgets: BlockType[];
} & CodeEditorSharedProps & CommandButtonsSharedProps & SetEditingBlockType;

function CodeBlockProps({
  addNewBlock,
  addWidget,
  block,
  blockRefs,
  blocks,
  defaultValue = '',
  deleteBlock,
  executionState,
  fetchFileTree,
  fetchPipeline,
  height,
  interruptKernel,
  mainContainerRef,
  mainContainerWidth,
  messages = [],
  noDivider,
  onChange,
  pipeline,
  runBlock,
  runningBlocks,
  selected,
  setAnyInputFocused,
  setEditingBlock,
  setSelected,
  setTextareaFocused,
  textareaFocused,
  widgets,
}: CodeBlockProps, ref) {
  const themeContext = useContext(ThemeContext);
  const [addNewBlocksVisible, setAddNewBlocksVisible] = useState(false);
  const [blockMenuVisible, setBlockMenuVisible] = useState(false);
  const [codeCollapsed, setCodeCollapsed] = useState(false);
  const [content, setContent] = useState(defaultValue);
  const [errorMessages, setErrorMessages] = useState(null);
  const [isEditingBlock, setIsEditingBlock] = useState(false);
  const [newBlockUuid, setNewBlockUuid] = useState(block.uuid);
  const [outputCollapsed, setOutputCollapsed] = useState(false);
  const [runCount, setRunCount] = useState<number>(0);
  const [runEndTime, setRunEndTime] = useState<number>(null);
  const [runStartTime, setRunStartTime] = useState<number>(null);

  const codeCollapsedUUID = useMemo(() => (
    `${pipeline?.uuid}/${block.uuid}/codeCollapsed`
  ), [pipeline?.uuid, block.uuid]);

  const outputCollapsedUUID = useMemo(() => (
    `${pipeline?.uuid}/${block.uuid}/outputCollapsed`
  ), [pipeline?.uuid, block.uuid]);

  useEffect(() => {
    setCodeCollapsed(get(codeCollapsedUUID, false));
    setOutputCollapsed(get(outputCollapsedUUID, false));
  }, []);

  const blockMenuRef = useRef(null);
  const blocksMapping = useMemo(() => indexBy(blocks, ({ uuid }) => uuid), [blocks]);

  const hasDownstreamWidgets = useMemo(() => !!widgets.find(({
    upstream_blocks: upstreamBlocks,
  }: BlockType) => upstreamBlocks.includes(block.uuid)), [
    block,
    widgets,
  ]);

  const runBlockAndTrack = useCallback(
    (payload?: {
      block: BlockType;
      code?: string;
      runDownstream?: boolean;
      runUpstream?: boolean;
    }) => {
      const {
        block: blockPayload,
        code,
        runDownstream,
        runUpstream,
      } = payload || {};
      runBlock({
        block: blockPayload,
        code: code || content,
        runDownstream: runDownstream || hasDownstreamWidgets,
        runUpstream: runUpstream || false,
      });
      setRunCount(1 + Number(runCount));
      setRunEndTime(null);
    }, [
      content,
      hasDownstreamWidgets,
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

  const isInProgress = !!runningBlocks.find(({ uuid }) => uuid === block.uuid)
    || messages?.length >= 1 && executionState !== ExecutionStateEnum.IDLE;

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
    return messages.filter((kernelOutput: KernelOutputType) => kernelOutput?.type);
  }, [
    errorMessages,
    messages,
  ]);
  const hasError = !!messagesWithType.find(({ error }) => error);

  const color = getColorsForBlockType(block.type, { theme: themeContext }).accent;
  const numberOfParentBlocks = block?.upstream_blocks?.length || 0;
  const borderColorShareProps = useMemo(() => ({
    blockType: block.type,
    hasError,
    selected,
  }), [
    block.type,
    hasError,
    selected,
  ]);
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
          callback: ({ block: { content } }) => {
            setIsEditingBlock(false);
            fetchPipeline();
            fetchFileTree();
            setContent(content);
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
        });
      } else if (selected) {
        if (onlyKeysPresent([KEY_CODE_META, KEY_CODE_ENTER], keyMapping)
          || onlyKeysPresent([KEY_CODE_CONTROL, KEY_CODE_ENTER], keyMapping)
        ) {
          runBlockAndTrack({ block });
        } else if (onlyKeysPresent([KEY_CODE_SHIFT, KEY_CODE_ENTER], keyMapping)) {
          event.preventDefault();
          addNewBlock({
            type: block.type,
          }).then(() => {
            runBlockAndTrack({ block });
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

  const buildBlockMenu = (b: BlockType) => {
    const blockMenuItems = {
      [BlockTypeEnum.SCRATCHPAD]: [
        {
          items: BLOCK_TYPE_CONVERTIBLE.map(blockType => ({
            label: () => BLOCK_TYPE_NAME_MAPPING[blockType],
            // @ts-ignore
            onClick: () => updateBlock({
              block: {
                ...b,
                type: blockType,
              },
            }),
            uuid: `block_menu/scratchpad/convert_to/${blockType}`,
          })),
          label: () => 'Convert to',
          uuid: 'block_menu/scratchpad/convert_to',
        },
      ],
    };

    return blockMenuItems[b.type];
  };


  const codeEditorEl = useMemo(() => (
    <CodeEditor
      autoHeight
      height={height}
      onChange={(val: string) => {
        setContent(val);
        onChange?.(val);
      }}
      onDidChangeCursorPosition={onDidChangeCursorPosition}
      placeholder="Start typing here..."
      selected={selected}
      setSelected={setSelected}
      setTextareaFocused={setTextareaFocused}
      shortcuts={[
        (monaco, editor) => executeCode(monaco, () => {
          runBlockAndTrack({
            block,
            code: editor.getValue(),
          });
        }),
      ]}
      textareaFocused={textareaFocused}
      value={content}
      width="100%"
    />
  ), [
    content,
    height,
    selected,
    textareaFocused,
  ]);

  const codeOutputEl = useMemo(() => hasOutput && (
    <CodeOutput
      {...borderColorShareProps}
      block={block}
      collapsed={outputCollapsed}
      isInProgress={isInProgress}
      mainContainerWidth={mainContainerWidth}
      messages={messagesWithType}
      runCount={runCount}
      runEndTime={runEndTime}
      runStartTime={runStartTime}
      selected={selected}
      setCollapsed={(val: boolean) => {
        setOutputCollapsed(() => {
          set(outputCollapsedUUID, val);
          return val;
        });
      }}
    />
  ), [
    block,
    borderColorShareProps,
    hasOutput,
    isInProgress,
    mainContainerWidth,
    messagesWithType,
    outputCollapsed,
    runCount,
    runEndTime,
    runStartTime,
    selected,
  ]);

  const closeBlockMenu = useCallback(() => setBlockMenuVisible(false), []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <FlexContainer
        alignItems="center"
        justifyContent="space-between"
        style={{
          marginBottom: UNIT / 2,
        }}
      >
        <Flex alignItems="center" flex={1}>
          <FlexContainer alignItems="center">
            <Circle
              color={color}
              size={UNIT * 1.5}
              square
            />

            <Spacing mr={1} />

            <FlyoutMenuWrapper
              compact
              items={buildBlockMenu(block)}
              onClickCallback={closeBlockMenu}
              onClickOutside={closeBlockMenu}
              open={blockMenuVisible}
              parentRef={blockMenuRef}
              uuid="CodeBlock/block_menu"
            >
              <Text
                color={color}
                monospace
              >
                {BlockTypeEnum.DATA_EXPORTER === block.type && (
                  <>
                    DATA EXPORTER
                  </>
                )}
                {BlockTypeEnum.DATA_LOADER === block.type && (
                  <>
                    DATA LOADER&nbsp;
                  </>
                )}
                {BlockTypeEnum.SCRATCHPAD === block.type && (
                  <>
                    SCRATCHPAD&nbsp;
                  </>
                )}
                {BlockTypeEnum.TRANSFORMER === block.type && (
                  <>
                    TRANSFORMER&nbsp;
                  </>
                )}
              </Text>
            </FlyoutMenuWrapper>

            {BlockTypeEnum.SCRATCHPAD === block.type && (
              <Button
                basic
                iconOnly
                noPadding
                onClick={() => setBlockMenuVisible(true)}
                transparent
              >
                <ArrowDown muted />
              </Button>
            )}

            <Spacing mr={1} />
          </FlexContainer>

          <Spacing mr={PADDING_UNITS} />

          <FileFill size={UNIT * 1.5} />

          <Spacing mr={1} />

          <FlexContainer alignItems="center">
            <LabelWithValueClicker
              bold={false}
              inputValue={newBlockUuid}
              monospace
              muted
              notRequired
              onBlur={() => setTimeout(() => setIsEditingBlock(false), 300)}
              onChange={(e) => {
                setNewBlockUuid(e.target.value);
                e.preventDefault();
              }}
              onClick={() => {
                setAnyInputFocused(true);
                setIsEditingBlock(true);
              }}
              onFocus={() => {
                setAnyInputFocused(true);
                setIsEditingBlock(true);
              }}
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

        {BlockTypeEnum.SCRATCHPAD !== block.type && (
          <FlexContainer alignItems="center">
            <Tooltip
              appearBefore
              block
              label={`
                ${pluralize('parent block', numberOfParentBlocks)}. ${numberOfParentBlocks === 0 ? 'Click to select 1 or more blocks to depend on.' : 'Edit parent blocks.'}
              `}
              size={null}
              widthFitContent
            >
              <Button
                noBackground
                noBorder
                noPadding
                onClick={() => {
                  setSelected(true);
                  setEditingBlock({
                    upstreamBlocks: {
                      block,
                      values: block.upstream_blocks?.map(uuid => ({ uuid })),
                    },
                  });
                }}
                >
                <FlexContainer alignItems="center">
                  <Text
                    monospace={numberOfParentBlocks >= 1}
                    underline={numberOfParentBlocks === 0}
                    >
                    {numberOfParentBlocks === 0 && 'Click to set parent blocks'}
                    {numberOfParentBlocks >= 1 && pluralize('parent block', numberOfParentBlocks)}
                  </Text>

                  <Spacing mr={1} />

                  <Stack size={UNIT * 2} />
                </FlexContainer>
              </Button>
            </Tooltip>
          </FlexContainer>
        )}
        <Spacing mr={1} />

        <Spacing px={1}>
          <Button
            basic
            iconOnly
            noPadding
            onClick={() => {
              setCodeCollapsed((collapsedPrev) => {
                set(codeCollapsedUUID, !collapsedPrev);
                return !collapsedPrev;
              });

              if (!codeCollapsed) {
                setOutputCollapsed(() => {
                  set(outputCollapsedUUID, true);
                  return true;
                });
              }
            }}
            transparent
          >
            {codeCollapsed
              ? <ChevronDown muted size={UNIT * 2} />
              : <ChevronUp muted size={UNIT * 2} />
            }
          </Button>
        </Spacing>
      </FlexContainer>

      {(selected || isInProgress) && (
        <CommandButtons
          addWidget={addWidget}
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
          {block.upstream_blocks.length >= 1 && !codeCollapsed && (
            <CodeHelperStyle>
              <Text small>
                Positional arguments for decorated function:
              </Text>

              <Spacing mt={1}>
                <Text monospace muted small>
                  {BlockTypeEnum.DATA_EXPORTER === block.type && '@data_exporter'}
                  {BlockTypeEnum.DATA_LOADER === block.type && '@data_loader'}
                  {BlockTypeEnum.TRANSFORMER === block.type && '@transformer'}
                </Text>
                <Text monospace muted small>
                  def {BlockTypeEnum.DATA_EXPORTER === block.type && 'export_data'
                    || (BlockTypeEnum.DATA_LOADER === block.type && 'load_data')
                    || (BlockTypeEnum.TRANSFORMER === block.type && 'transform_df')}
                  ({block.upstream_blocks.map((_,i) => `df_${i + 1}`).join(', ')}):
                </Text>
                {block.upstream_blocks.map((blockUUID, i) => {
                  const b = blocksMapping[blockUUID];
                  const blockColor =
                    getColorsForBlockType(b?.type, { theme: themeContext }).accent;

                  return (
                    <div key={blockUUID}>
                      <Text inline monospace muted small>
                        &nbsp;&nbsp;&nbsp;&nbsp;df_{i + 1}
                      </Text> <Text inline monospace muted small>→</Text> <Link
                        color={blockColor}
                        onClick={() => {
                          const refBlock = blockRefs?.current?.[`${b?.type}s/${b?.uuid}.py`];
                          refBlock?.current?.scrollIntoView();
                        }}
                        preventDefault
                        small
                      >
                        <Text
                          color={blockColor}
                          inline
                          monospace
                          small
                        >
                          {blockUUID}
                        </Text>
                      </Link>
                    </div>
                  );
                })}
              </Spacing>
            </CodeHelperStyle>
          )}
          {!codeCollapsed
            ? codeEditorEl
            : (
              <Spacing px={1}>
                <Text monospace muted>
                  ({pluralize('line', content?.split(/\r\n|\r|\n/).length)} collapsed)
                </Text>
              </Spacing>
            )
          }
        </CodeContainerStyle>

        {codeOutputEl}
      </ContainerStyle>

      {!noDivider && (
        <BlockDivider
          onMouseEnter={() => setAddNewBlocksVisible(true)}
          onMouseLeave={() => setAddNewBlocksVisible(false)}
        >
          {addNewBlocksVisible && (
            <AddNewBlocks
              addNewBlock={(newBlock: BlockType) => {
                const upstreamBlocks = newBlock.upstream_blocks || [];

                if (BlockTypeEnum.CHART !== block.type
                  && BlockTypeEnum.SCRATCHPAD !== block.type
                  && BlockTypeEnum.CHART !== newBlock.type
                  && BlockTypeEnum.SCRATCHPAD !== newBlock.type
                ) {
                  upstreamBlocks.push(block.uuid);
                }

                return addNewBlock({
                  ...newBlock,
                  upstream_blocks: upstreamBlocks,
                })
              }}
              compact
            />
          )}
          <BlockDividerInner className="block-divider-inner" />
        </BlockDivider>
      )}
    </div>
  );
}

export default React.forwardRef(CodeBlockProps);
