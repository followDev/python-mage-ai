import {
  BLACK,
  BLUE,
  DARK_GRAY_LINES,
  GRAY_LINES,
  GRAY,
  LIGHT,
  NAVY_LINES,
  PURPLE,
  RED,
  SILVER,
  WHITE,
} from '../colors/main';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  background: {
    page: WHITE,
    muted: SILVER,
    header: SILVER,
    row: LIGHT,
  },
  content: {
    active: BLACK,
    default: WHITE,
    disabled: GRAY,
    muted: GRAY,
  },
  loader: {
    color: RED,
  },
  monotone: {
    black: BLACK,
    gray: GRAY,
    white: WHITE,
  },
  progress: {
    positive: PURPLE,
    negative: RED,
  },
  shadow: {
    base: '12px 40px 120px rgba(106, 117, 139, 0.4)',
    hover: '8px 24px 24px 0 rgba(0, 0, 0, 0.12)',
    popup: '10px 20px 40px rgba(0, 0, 0, 0.2);',
  },
  interactive: {
    dangerBorder: RED,
    defaultBorder: GRAY_LINES,
    disabledBorder: GRAY,
    focusBorder: NAVY_LINES,
    hoverBorder: DARK_GRAY_LINES,
    linkPrimary: PURPLE,
    linkSecondary: BLUE,
  },
};

