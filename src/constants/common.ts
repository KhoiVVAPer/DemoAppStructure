import { Dimensions, Platform } from 'react-native';

export const SCREEN_DEVICE_WIDTH = Dimensions.get('screen').width;
export const SCREEN_DEVICE_HEIGHT = Dimensions.get('screen').height;
export const IS_IOS = Platform.OS === 'ios';
export const LIMIT_RECORD_ITEM_LIST_LOAD = 20;
