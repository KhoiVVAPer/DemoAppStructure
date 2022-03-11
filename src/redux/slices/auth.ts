/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'src/interfaces/IUser';

interface SliceAuthState {
  token: string;
  isLogged: boolean;
  error: string;
  userInfo: IUser;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLogged: false,
    userInfo: {},
  } as SliceAuthState,
  reducers: {
    loginRequest: (
      state,
      action: PayloadAction<{ username: string; password: string }>,
    ) => {
      state.isLogged = false;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; data: IUser }>,
    ) => {
      state.isLogged = true;
      state.token = action.payload.token;
      state.userInfo = action.payload.data;
      state.error = '';
    },
    loginFailed: (
      state,
      action: PayloadAction<{ data: IUser; error: string }>,
    ) => {
      state.isLogged = false;
      state.userInfo = action.payload.data;
      state.error = action.payload.error;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
