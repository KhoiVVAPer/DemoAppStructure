import Login from './Login/Login.container';
import { StackNavigationOptions } from '@react-navigation/stack';

const commonOptions: StackNavigationOptions = {
  gestureEnabled: false,
  headerShown: false,
};

// ======== LOGIN STACK
export type LoginStackParamList = {
  Login: undefined;
};

export const loginStackScreens = {
  Login: { component: Login, commonOptions },
};

// ========= ...
