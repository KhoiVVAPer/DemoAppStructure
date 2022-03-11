import React, { FC } from 'react';
import { StatusBar, View } from 'react-native';
import { RNText, RNTextInput, RNButton } from 'components';
import styles from './Login.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from 'localization';

type LoginProps = {
  username: string;
  password: string;
  error: string;
  onSubmitLogin: (userName: string, password: string) => void;
  setUserName: (username: string) => void;
  setPassword: (password: string) => void;
};

const LoginView: FC<LoginProps> = ({
  username,
  password,
  error,
  onSubmitLogin,
  setUserName,
  setPassword,
}): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View testID={'login-container'} style={styles.contentWrapper}>
        <RNText
          testID={'login-title'}
          text={i18n.t('login.title')}
          style={styles.title}
        />
        <RNTextInput
          testID={'login-username-input'}
          value={username}
          onChangeText={setUserName}
          placeholder={i18n.t('login.enterUsernamePlaceHolder')}
          style={styles.input}
        />
        <RNTextInput
          testID={'login-password-input'}
          value={password}
          onChangeText={setPassword}
          placeholder={i18n.t('login.enterPasswordPlaceHolder')}
          style={styles.input}
        />
        {error ? (
          <RNText
            testID={'login-error'}
            text={error}
            style={styles.errorText}
          />
        ) : null}
        <RNButton
          testID={'login-button-login'}
          text={i18n.t('login.login')}
          onPress={() => onSubmitLogin(username, password)}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginView;
