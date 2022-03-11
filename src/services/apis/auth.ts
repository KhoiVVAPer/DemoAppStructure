import { IRequestAction } from 'src/interfaces/IRequestAction';

export async function loginApi(action: IRequestAction) {
  const { username, password } = action.payload;

  console.log('loginApi', username, password);

  // return APIUtils.get(USER_URL, { params: { username, password } });

  // Return Dummy data

  const dummyData: any = {
    id: `${Date.now()}`,
    username: username || '',
    password: password || '',
  };
  return new Promise((resolve) =>
    setTimeout(() => {
      if (
        username.toLowerCase() === 'khoi' &&
        password.toLowerCase() === '123'
      ) {
        resolve({
          data: dummyData,
          success: true,
        });
      } else if (
        username.toLowerCase() === '' &&
        password.toLowerCase() === ''
      ) {
        resolve({
          data: null,
          success: false,
          error: 'please input username and password',
        });
      } else if (username.toLowerCase() === '') {
        resolve({
          data: null,
          success: false,
          error: 'please input username',
        });
      } else if (password.toLowerCase() === '') {
        resolve({
          data: null,
          success: false,
          error: 'please input password',
        });
      } else {
        resolve({
          data: null,
          success: false,
          error: 'account not found',
        });
      }
    }, 500),
  );
}
