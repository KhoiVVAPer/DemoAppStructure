import React, { useState, useEffect, FC } from 'react';
import LoginView from './Login.view';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorState, getIsLoggedState } from '@redux/selectors/auth';
import { Alert } from 'react-native';
import { loginRequest } from '@redux/slices/auth';

const Login: FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isLogged = useSelector(getIsLoggedState);
  const error = useSelector(getErrorState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      setUsername('');
      setPassword('');
      Alert.alert('login success');
    }
  }, [isLogged]);

  const onSubmitLogin = () => {
    dispatch(loginRequest({ username, password }));
  };

  return (
    <LoginView
      username={username}
      password={password}
      setUserName={setUsername}
      setPassword={setPassword}
      onSubmitLogin={onSubmitLogin}
      error={error}
    />
  );
};

export default Login;
