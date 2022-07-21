import { useContext, useMemo, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';

import BlockType, {
  BlockTypeEnum,
  CHART_TYPES,
} from '@interfaces/BlockType';
import Button from '@oracle/elements/Button';
import Circle from '@oracle/elements/Circle';
import ClickOutside from '@oracle/components/ClickOutside';
import FlexContainer from '@oracle/components/FlexContainer';
import FlyoutMenu from '@oracle/components/FlyoutMenu';
import KeyboardTextGroup from '@oracle/elements/KeyboardTextGroup';
import Spacing from '@oracle/elements/Spacing';
import Spinner from '@oracle/components/Spinner';
import Text from '@oracle/elements/Text';
import Tooltip from '@oracle/components/Tooltip';
import dark from '@oracle/styles/themes/dark';
import { DEFAULT_SETTINGS_BY_CHART_TYPE } from '@components/ChartBlock/constants';
import { ContainerStyle } from './index.style';
import { ExecutionStateEnum } from '@interfaces/KernelOutputType';
import {
  Close,
  Ellipsis,
  NavGraph,
  PlayButtonFilled,
  Trash,
} from '@oracle/icons';
import {
  KEY_SYMBOL_D,
  KEY_SYMBOL_ENTER,
  KEY_SYMBOL_I,
  KEY_SYMBOL_META,
} from '@utils/hooks/keyboardShortcuts/constants';
import { PADDING_UNITS, UNIT } from '@oracle/styles/units/spacing';
import { getColorsForBlockType } from '../index.style';
import { capitalizeRemoveUnderscoreLower } from '@utils/string';

export type CommandButtonsSharedProps = {
  addWidget: (widget: BlockType, opts?: {
    onCreateCallback?: (block: BlockType) => void;
  }) => Promise<any>;
  deleteBlock: (block: BlockType) => void;
  executionState: ExecutionStateEnum;
  interruptKernel: () => void;
};

type CommandButtonsProps = {
  block: BlockType;
  runBlock: (payload: {
    block: BlockType;
    code?: string;
    runUpstream?: boolean;
  }) => void;
} & CommandButtonsSharedProps;

function CommandButtons({
  addWidget,
  block,
  deleteBlock,
  executionState,
  interruptKernel,
  runBlock,
}: CommandButtonsProps) {
  const {
    all_upstream_blocks_executed: upstreamBlocksExecuted = true,
    type,
    uuid,
  } = block;
  const refAddChart = useRef(null);
  const refExecuteActions = useRef(null);
  const refMoreActions = useRef(null);

  const [showAddCharts, setShowAddCharts] = useState<boolean>(false);
  const [showExecuteActions, setShowExecuteActions] = useState<boolean>(false);
  const [showMoreActions, setShowMoreActions] = useState<boolean>(false);
  const themeContext = useContext(ThemeContext);
  const isInProgress = ExecutionStateEnum.IDLE !== executionState;
  const color = getColorsForBlockType(type, { theme: themeContext }).accent;

  const chartMenuItems = useMemo(() => CHART_TYPES.map((chartType: string) => {
    const widget = {
      configuration: {
        chart_type: chartType,
      },
      type: BlockTypeEnum.CHART,
      upstream_blocks: [block.uuid],
    };
    const defaultSettings = DEFAULT_SETTINGS_BY_CHART_TYPE[chartType];
    const configuration = defaultSettings?.configuration(widget) || {};
    const content = defaultSettings?.content(widget) || null;

    return {
      label: () => capitalizeRemoveUnderscoreLower(chartType),
      onClick: () => addWidget({
        ...widget,
        configuration: {
          ...widget.configuration,
          ...configuration,
        },
        content,
      }, {
        onCreateCallback: (widget: BlockType) => runBlock({
          block: widget,
          code: content,
        }),
      }),
      uuid: chartType,
    };
  }), [
    CHART_TYPES,
    runBlock,
  ]);

  return (
    <ContainerStyle>
      <FlexContainer
        alignItems="center"
        flexDirection="column"
      >
        {ExecutionStateEnum.QUEUED === executionState && (
          <Spinner
            color={(themeContext || dark).content.active}
            type="cylon"
          />
        )}
        {ExecutionStateEnum.BUSY === executionState && (
          <Spinner
            color={(themeContext || dark).content.active}
          />
        )}

        {!isInProgress && (
          <>
            <Tooltip
              appearAbove
              appearBefore
              default
              label={(
                <Text>
                  Run block
                  &nbsp;
                  &nbsp;
                  <KeyboardTextGroup
                    inline
                    keyTextGroups={[[KEY_SYMBOL_META, KEY_SYMBOL_ENTER]]}
                    monospace
                    uuidForKey={uuid}
                  />
                </Text>
              )}
              size={UNIT * 3}
              widthFitContent
            >
              <Button
                noBackground
                noBorder
                noPadding
                onClick={() => {
                  if (upstreamBlocksExecuted) {
                    runBlock({ block });
                  } else {
                    setShowExecuteActions(true);
                  }
                }}
              >
                <Circle
                  color={color}
                  size={UNIT * 3}
                >
                  <PlayButtonFilled
                    black
                    size={UNIT * 1.5}
                  />
                </Circle>
              </Button>
            </Tooltip>
            <ClickOutside
              disableEscape
              onClickOutside={() => setShowExecuteActions(false)}
              open={showExecuteActions}
            >
              <FlyoutMenu
                items={
                  [
                    {
                      label: () => 'Execute block',
                      onClick: () => runBlock({ block }),
                      uuid: 'execute_block',
                    },
                    {
                      label: () => `Execute with upstream blocks`,
                      onClick: () => runBlock({ block, runUpstream: true }),
                      uuid: 'execute_upstream',
                    },
                  ]
                }
                left={-UNIT * 25}
                onClickCallback={() => setShowExecuteActions(false)}
                open={showExecuteActions}
                parentRef={refExecuteActions}
                topOffset={-UNIT * 2}
                uuid="execute_actions"
                width={UNIT * 25}
              />
            </ClickOutside>
          </>
        )}

        {[
          BlockTypeEnum.DATA_LOADER,
          BlockTypeEnum.TRANSFORMER,
        ].includes(block.type) && (
          <>
            <Spacing
              mt={PADDING_UNITS}
              ref={refAddChart}
            >
              <Tooltip
                appearBefore
                default
                label="Add chart"
                size={UNIT * 2.25}
                widthFitContent
              >
                <Button
                  noBackground
                  noBorder
                  noPadding
                  onClick={() => setShowAddCharts(true)}
                >
                  <NavGraph size={UNIT * 2.25} />
                </Button>
              </Tooltip>
            </Spacing>

            <ClickOutside
              disableEscape
              onClickOutside={() => setShowAddCharts(false)}
              open={showAddCharts}
            >
              <FlyoutMenu
                items={chartMenuItems}
                left={-UNIT * 25}
                onClickCallback={() => setShowAddCharts(false)}
                open={showAddCharts}
                parentRef={refAddChart}
                topOffset={UNIT * 6}
                uuid="CommandButtons/add_charts"
                width={UNIT * 25}
              />
            </ClickOutside>
          </>
        )}

        <Spacing mt={PADDING_UNITS}>
          <Tooltip
            appearBefore
            default
            label={(
              <Text>
                Delete block and file
                &nbsp;
                &nbsp;
                <KeyboardTextGroup
                  inline
                  monospace
                  keyTextGroups={[[KEY_SYMBOL_D], [KEY_SYMBOL_D]]}
                  uuidForKey={uuid}
                />
              </Text>
            )}
            size={UNIT * 2.5}
            widthFitContent
          >
            <Button
              noBackground
              noBorder
              noPadding
              onClick={() => deleteBlock(block)}
            >
              <Trash size={UNIT * 2.5} />
            </Button>
          </Tooltip>
        </Spacing>

        {isInProgress && (
          <Spacing mt={PADDING_UNITS}>
            <Tooltip
              appearAbove
              appearBefore
              default
              label={(
                <Text>
                  Interrupt kernel
                  &nbsp;
                  &nbsp;
                  <KeyboardTextGroup
                    inline
                    monospace
                    keyTextGroups={[[KEY_SYMBOL_I], [KEY_SYMBOL_I]]}
                    uuidForKey={uuid}
                  />
                </Text>
              )}
              size={UNIT * 2.5}
              widthFitContent
            >
              <Button
                noBackground
                noBorder
                noPadding
                onClick={() => interruptKernel()}
              >
                <Circle
                  borderSize={1.5}
                  size={UNIT * 2.5}
                >
                  <Close size={UNIT * 1} />
                </Circle>
              </Button>
            </Tooltip>
          </Spacing>
        )}
        <div ref={refMoreActions}>
          <Spacing mt={PADDING_UNITS}>
            <Tooltip
              appearBefore
              default
              label={(
                <Text>
                  More actions
                </Text>
              )}
              size={UNIT * 2.5}
              widthFitContent
            >
              <Button
                noBackground
                noBorder
                noPadding
                onClick={() => setShowMoreActions(!showMoreActions)}
              >
                <Circle
                  borderSize={1.5}
                  size={UNIT * 2.5}
                >
                  <Ellipsis size={UNIT} />
                </Circle>
              </Button>
            </Tooltip>
          </Spacing>
        </div>
        <ClickOutside
          disableEscape
          onClickOutside={() => setShowMoreActions(false)}
          open={showMoreActions}
        >
          <FlyoutMenu
            items={
              [
                {
                  label: () => `Execute with upstream blocks`,
                  onClick: () => runBlock({ block, runUpstream: true }),
                  uuid: 'execute_upstream',
                },
              ]
            }
            left={-UNIT * 25}
            onClickCallback={() => setShowMoreActions(false)}
            open={showMoreActions}
            parentRef={refMoreActions}
            topOffset={UNIT * 6}
            uuid="FileHeaderMenu/file_items"
            width={UNIT * 25}
          />
        </ClickOutside>
      </FlexContainer>
    </ContainerStyle>
  );
}

export default CommandButtons;
