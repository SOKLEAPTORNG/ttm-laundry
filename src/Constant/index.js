import normalize from 'react-native-normalize';

export class Font {
  static SMALL = normalize(8);
  static DEFAULT = normalize(16);
  static NORMAL = normalize(24);
  static LARGE = normalize(32);
  static XLARGE = normalize(40);
  static XXLARGE = normalize(48);
  static XXXLARGE = normalize(56);
  static EXTRA_LARGE = normalize(64);
}

export class Dimension {
  static width = width => normalize(width, 'width');
  static height = height => normalize(height, 'height');
}

export class Screen {
  static HOME = 'HOME';
  static HOME_STACK = 'HOME_STACK';
  static HOME_TAB = 'HOME_TAB';
  static PROFILE_STACK = 'PROFILE_STACK';
  static PROFILE_TAB = 'PROFILE_TAB';
  static MENU = 'MENU';
  static ORDERREQUEST_STACK = 'ORDERREQUEST_STACK';
  static ORDERREQUEST_TAB = 'ORDERREQUEST_TAB';
  static MY_ORDER_STACK = 'MY_ORDER_STACK';
  static MY_ORDER_TAB = 'MY_ORDER_TAB';

  // B2B
  static B2BORDERREQUEST_STACK = 'B2BORDERREQUEST_STACK';
  static B2BORDERREQUEST_TAB = 'B2BORDERREQUEST_TAB';
  static B2BMY_ORDER_STACK = 'B2BMY_ORDER_STACK';
  static B2BMY_ORDER_TAB = 'B2BMY_ORDER_TAB';
}

export class Color {
  static LIGHT = '#FFF';
  static GREY = 'rgba(255, 255, 255, 0.1)';
  static DARK = '#000';
  static TRANSPARENT = 'transparent';
  static PRIMARY = '#282634';
  static MODAL_BACKGROUND = 'rgba(0, 0, 0, 0.5)';
  static LOADING_BACKGROUND = 'rgba(0, 0, 0, 0.8)';
  static APPBACKGROUND = '#fff';
  static SUCCESS = '#2D6A3D';
  static PLACEHOLDER = '#F1F1F1';
  static GOLD = '#E6AE0E';
  static GRAY = '#D2D2CB';
  static DARKGRAY = '#808080';
  static DANGER = '#FF6161';
  static SWIPETEXT = '#797979';
}

export class LoadingType {
  static LOADING_ACTIVE = 'LOADING_ACTIVE';
  static LOADING_INACTIVE = 'LOADING_INACTIVE';
}

export class UserType {
  static SET_USER = 'SET_USER';
  static USER_LOGOUT = 'USER_LOGOUT';
}

export const GOOGLE_WEB_CLIENT =
  '647928878961-l54ehtmmad4gr7r3o7vfrb1a4kcjhis0.apps.googleusercontent.com';
