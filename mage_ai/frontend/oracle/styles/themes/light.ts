import {
  BLACK,
  BLUE,
  BLUE_HIGHLIGHT,
  DARK_GRAY_LINES,
  GRAY_LINES,
  GRAY,
  LIGHT,
  PURPLE,
  RED,
  SILVER,
  WHITE,
  PURPLE_HIGHLIGHT,
  PURPLE_DISABLED,
} from '../colors/main';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  background: {
    dark: GRAY,
    header: SILVER,
    muted: SILVER,
    page: WHITE,
    row: LIGHT,
  },
  content: {
    active: BLACK,
    default: WHITE,
    disabled: GRAY,
    muted: GRAY,
  },
  feature: {
    active: PURPLE_HIGHLIGHT,
    disabled: PURPLE_DISABLED,
  },
  interactive: {
    dangerBorder: RED,
    defaultBorder: GRAY_LINES,
    disabledBorder: GRAY,
    focusBackground: GRAY,
    focusBorder: BLUE_HIGHLIGHT,
    hoverBackground: SILVER,
    hoverBorder: DARK_GRAY_LINES,
    linkPrimary: BLUE,
    linkSecondary: PURPLE,
  },
  loader: {
    color: RED,
  },
  monotone: {
    black: BLACK,
    gray: GRAY,
    purple: PURPLE,
    white: WHITE,
  },
  neutral: {
    n100: '#E7E8EA',
    n200: '#D8DADE',
    n300: '#CBCCD0',
    n400: '#BCBEC4',
    n500: '#AEB0B6',
  },
  progress: {
    negative: RED,
    positive: PURPLE,
  },
  shadow: {
    base: '12px 40px 120px rgba(106, 117, 139, 0.4)',
    menu: '4px 10px 20px rgba(6, 6, 6, 0.12)',
    popup: '10px 20px 40px rgba(0, 0, 0, 0.2)',
  },
};

