import { call } from 'typed-redux-saga';
import NetInfo from '@react-native-community/netinfo';
import { IRequestAction } from 'interfaces/IRequestAction';

export function* callApi(api: any, params: IRequestAction): any {
  const res = yield NetInfo.fetch();
  if (res.isConnected) {
    return yield* call(api, params);
  } else {
    throw { data: { code: 'NETWORK_REQUEST_FAILED' } };
  }
}
