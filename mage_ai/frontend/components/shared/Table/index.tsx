import NextLink from 'next/link';
import { useCallback, useMemo } from 'react';

import FlexContainer from '@oracle/components/FlexContainer';
import Link from '@oracle/elements/Link';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import Tooltip from '@oracle/components/Tooltip';
import {
  TableDataStyle,
  TableHeadStyle,
  TableRowStyle,
  TableStyle,
} from './index.style';

export type ColumnType = {
  label?: () => any | string;
  tooltipMessage?: string
  uuid: string;
};

type TableProps = {
  alignTop?: boolean;
  borderCollapseSeparate?: boolean;
  buildLinkProps?: (rowIndex: number) => {
    as: string;
    href: string;
  };
  buildRowProps?: (rowIndex: number) => {
    renderCell: (cell: any, colIndex: number) => any;
    renderRow: (cells: any) => any;
  };
  columnBorders?: boolean;
  columnFlex: number[];
  columnMaxWidth?: (colIndex: number) => string;
  columns?: ColumnType[];
  compact?: boolean;
  highlightRowOnHover?: boolean;
  isSelectedRow?: (rowIndex: number) => boolean;
  noBorder?: boolean;
  noHeader?: boolean;
  onClickRow?: (index: number) => void;
  rows: any[][];
  rowVerticalPadding?: number;
  stickyFirstColumn?: boolean;
  stickyHeader?: boolean;
  uuid?: string;
  wrapColumns?: boolean;
};

function Table({
  alignTop,
  borderCollapseSeparate,
  buildLinkProps,
  buildRowProps,
  columnBorders,
  columnFlex,
  columnMaxWidth,
  columns = [],
  compact,
  highlightRowOnHover,
  isSelectedRow,
  noBorder,
  noHeader,
  onClickRow,
  rows,
  rowVerticalPadding,
  stickyFirstColumn,
  stickyHeader,
  uuid,
  wrapColumns,
}: TableProps) {
  const totalFlex = useMemo(() => columnFlex.reduce((acc, val) => acc + (val || 0), 0), [
    columnFlex,
  ]);
  const calculateCellWidth = useCallback((idx: number) => {
    if (columnFlex[idx]) {
      const width = Math.round(100 * (columnFlex[idx] / totalFlex));
      return `${width}%`;
    }

    return null;
  }, [columnFlex, totalFlex]);

  const rowEls = useMemo(() => rows?.map((cells, rowIndex) => {
    const linkProps = buildLinkProps?.(rowIndex);
    const rowProps = buildRowProps?.(rowIndex) || {
      renderCell: null,
      renderRow: null,
    };
    const {
      renderCell,
      renderRow,
    } = rowProps;

    const cellEls = [];
    cells.forEach((cell, colIndex) => {
      let cellEl;
      if (renderCell) {
        cellEl = renderCell(cell, colIndex);
      }

      if (!cellEl) {
        cellEl = (
          <TableDataStyle
            alignTop={alignTop}
            columnBorders={columnBorders}
            compact={compact}
            key={`${uuid}-row-${rowIndex}-cell-${colIndex}`}
            last={colIndex === cells.length - 1}
            maxWidth={columnMaxWidth?.(colIndex)}
            noBorder={noBorder}
            rowVerticalPadding={rowVerticalPadding}
            selected={isSelectedRow?.(rowIndex)}
            stickyFirstColumn={stickyFirstColumn && colIndex === 0}
            width={calculateCellWidth(colIndex)}
            wrapColumns={wrapColumns}
          >
            {cell}
          </TableDataStyle>
        );
      }

      cellEls.push(cellEl);
    });
    let rowEl;
    if (renderRow) {
      rowEl = renderRow(cellEls);
    } else {
      rowEl = (
        <TableRowStyle
          highlightOnHover={highlightRowOnHover}
          key={`${uuid}-row-${rowIndex}`}
          noHover={!(linkProps || onClickRow)}
          // @ts-ignore
          onClick={onClickRow ? () => onClickRow(rowIndex) : null}
        >
          {cellEls}
        </TableRowStyle>
      );
    }

    if (linkProps) {
      return (
        <NextLink
          {...linkProps}
          key={`${uuid}-row-link-${rowIndex}`}
          passHref
        >
          <Link
            fullWidth
            noHoverUnderline
            noOutline
            // @ts-ignore
            style={{
              display: 'table-row-group',
            }}
            verticalAlignContent
          >
            {rowEl}
          </Link>
        </NextLink>
      );
    }

    return rowEl;
  }), [
    alignTop,
    buildLinkProps,
    calculateCellWidth,
    columnBorders,
    columnMaxWidth,
    compact,
    buildRowProps,
    highlightRowOnHover,
    isSelectedRow,
    noBorder,
    onClickRow,
    rowVerticalPadding,
    rows,
    stickyFirstColumn,
    uuid,
    wrapColumns,
  ]);

  return (
    <TableStyle
      borderCollapseSeparate={borderCollapseSeparate}
      columnBorders={columnBorders}
    >
      {columns?.length >= 1 && !noHeader && (
        <TableRowStyle noHover>
          {columns.map((col, idx) => (
            <TableHeadStyle
              columnBorders={columnBorders}
              compact={compact}
              key={`${uuid}-col-${col.uuid}-${idx}`}
              last={idx === columns.length - 1}
              noBorder={noBorder}
              sticky={stickyHeader}
            >
              <FlexContainer alignItems="center">
                <Text bold leftAligned monospace muted>
                  {col.label ? col.label() : col.uuid}
                </Text>
                {col.tooltipMessage && (
                  <Spacing ml="4px">
                    <Tooltip
                      appearBefore
                      label={(
                        <Text leftAligned>
                          {col.tooltipMessage}
                        </Text>
                      )}
                      lightBackground
                      primary
                    />
                  </Spacing>
                )}
              </FlexContainer>
            </TableHeadStyle>
          ))}
        </TableRowStyle>
      )}

      {rowEls}
    </TableStyle>
  );
}

export default Table;
