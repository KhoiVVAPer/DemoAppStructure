import { put } from 'typed-redux-saga';
import { loginFailed, loginSuccess } from '@redux/slices/auth';
import { IRequestAction } from 'interfaces/IRequestAction';
import { loginApi } from 'services/apis/auth';
import { callApi } from '@utils/helpers/callApi';

export function* handlerLogin(action: IRequestAction) {
  try {
    const response = yield* callApi(loginApi, action);
    if (response && response.success) {
      yield put(loginSuccess(response));
    } else {
      yield put(loginFailed(response));
    }
  } catch (error) {
    console.log('error', error);
  }
}
