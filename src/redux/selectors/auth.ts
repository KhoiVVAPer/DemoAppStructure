import { RootState } from '../configureStore';

export const getAuthState = (state: RootState) => state.auth;
export const getIsLoggedState = (state: RootState) => state.auth.isLogged;
export const getUserInfoState = (state: RootState) => state.auth.userInfo;
export const getErrorState = (state: RootState) => state.auth.error;
