import {
  BLACK,
  BLUE,
  BLUE_DARK,
  BLUE_HIGHLIGHT,
  BLUE_HIGHLIGHT_LIGHT,
  DARK_GRAY_LINES,
  GRAY_LINES,
  GRAY,
  LIGHT,
  LIME,
  LIME_XLIGHT,
  LIME_TEXT,
  NAVY,
  PURPLE,
  PURPLE_DARK,
  PURPLE_DISABLED,
  PURPLE_HIGHLIGHT,
  PURPLE_LIGHT,
  RED,
  RED_LIGHT,
  RED_XLIGHT,
  SILVER,
  WHITE,
  YELLOW,
} from '../colors/main';
import {
  DARK_CONTENT_ACTIVE,
  DARK_CONTENT_DEFAULT,
  DARK_CONTENT_DISABLED,
  DARK_CONTENT_INVERTED,
  DARK_CONTENT_MUTED,
  LIGHT_CONTENT_ACTIVE,
  LIGHT_CONTENT_DEFAULT,
  LIGHT_CONTENT_DISABLED,
  LIGHT_CONTENT_INVERTED,
  LIGHT_CONTENT_MUTED,
} from '../colors/content';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  accent: {
    alert: '#F6540B',
    blue: BLUE_DARK,
    cyan: '#65E3FF',
    cyanTransparent: 'rgba(101, 227, 255, 0.12)',
    info: '#00ABFF',
    infoTransparent: 'rgba(0, 171, 255, 0.5)',
    negative: '#FF1E59',
    negativeTransparent: 'rgba(255, 30, 89, 0.3)',
    positive: '#00A81A',
    primaryTransparent: 'rgb(155, 108, 167, 0.5)',
    purple: PURPLE_DARK,
    warning: '#DD9900',
    warningTransparent: 'rgba(221, 153, 0, 0.5)',
  },
  background: {
    codeArea: '#1E1F24',
    codeTextarea: '#000000',
    danger: RED_XLIGHT,
    dark: GRAY,
    header: SILVER,
    menu: NAVY,
    muted: SILVER,
    navigation: '#EDEDED',
    page: WHITE,
    row: LIGHT,
    scrollbarThumb: 'rgba(0, 0, 0, 0.5)',
    scrollbarThumbHover: 'rgba(255, 255, 255, 0.3)',
    scrollbarTrack: 'rgba(39, 42, 47, 0.3)', // defaultBackground
    sidePanel: '#232429',
    success: LIME_XLIGHT,
    table: '#292A2F',
  },
  borders: {
    light: '#2F3034',
    medium: '#1C1C1C',
    dark: '#000000',
  },
  brand: {
    earth100: '#C6EEDB',
    earth200: '#9DDFBF',
    earth300: '#6BBF96',
    earth400: '#37A46F',
    earth400Transparent: 'rgba(55, 164, 111, 0.4)',
    earth500: '#00954C',
    energy100: '#FFF4BA',
    energy200: '#FFED92',
    energy300: '#FFE662',
    energy400: '#FFDA19',
    energy400Transparent: 'rgba(255, 218, 25, 0.04)',
    energy500: '#F6C000',
    fire100: '#FFD7E0',
    fire200: '#FFA3B9',
    fire300: '#FF547D',
    fire400: '#FF144D',
    fire400Transparent: 'rgba(255, 20, 77, 0.4)',
    fire500: '#EB0032',
    stone100: '#F3E6D7',
    stone200: '#E3D4C2',
    stone400: '#BFA78B',
    stone500: '#AF8859',
    water100: '#BDCEFF',
    water200: '#81A1FF',
    water300: '#517DFF',
    water400: '#2A60FE',
    water400Transparent: 'rgba(42, 96, 254, 0.4)',
    water500: '#0F4CFF',
    wind100: '#EEEAFF',
    wind200: '#CCC1F4',
    wind300: '#A698DD',
    wind400: '#6B50D7',
    wind400SuperTransparent: 'rgba(107, 80, 215, 0.12)',
    wind400Transparent: 'rgba(107, 80, 215, 0.4)',
    wind500: '#4E32BC',
  },
  chart: {
    backgroundPrimary: PURPLE_LIGHT,
    backgroundSecondary: RED_LIGHT,
    backgroundTertiary: BLUE_HIGHLIGHT_LIGHT,
    button1: BLUE_DARK,
    button2: YELLOW,
    button3: LIME,
    lines: '#9B6CA7',
    primary: PURPLE,
    secondary: RED,
    tertiary: BLUE_HIGHLIGHT,
  },
  content: {
    active: DARK_CONTENT_ACTIVE,
    default: DARK_CONTENT_DEFAULT,
    disabled: DARK_CONTENT_DISABLED,
    inverted: DARK_CONTENT_INVERTED,
    muted: DARK_CONTENT_MUTED,
  },
  elevation: {
    visualizationAccent: '#996CFF',
    visualizationAccentAlt: '#C1ACF7',
  },
  feature: {
    active: PURPLE_HIGHLIGHT,
    disabled: PURPLE_DISABLED,
  },
  icons: {
    neutral: '#787878',
  },
  interactive: {
    activeBorder: BLACK,
    dangerBorder: RED,
    defaultBackground: '#36383F',
    defaultBorder: GRAY_LINES,
    disabledBorder: GRAY,
    focusBackground: GRAY,
    focusBorder: BLUE_HIGHLIGHT,
    hoverBackground: SILVER,
    hoverBorder: DARK_GRAY_LINES,
    linkPrimary: BLUE,
    linkSecondary: PURPLE,
    linkSecondaryDisabled: PURPLE_LIGHT,
  },
  loader: {
    color: '#EB0032',
    colorInverted: '#EB0032',
  },
  monotone: {
    black: BLACK,
    blackTransparent: 'rgba(0, 0, 0, 0.6)',
    gray: GRAY,
    grey100: '#F2F2F2',
    grey200: '#D5D7DC',
    grey300: '#B4B8C0',
    grey400: '#70747C',
    grey500: '#28292C',
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
  status: {
    negative: RED,
    positive: LIME_TEXT,
  },
  text: {
    fileBrowser: '#787A85',
  },
};
