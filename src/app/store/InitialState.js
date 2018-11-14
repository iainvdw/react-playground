// @flow

export type UserType = {
  firstName: string,
  lastName: string,
  userName: string,
};

export type AuthStateType = {
  loading: boolean,
  error: string,
  user: UserType,
};

export type AppState = {
  auth: AuthStateType,
};

export default ({
  auth: {
    loading: false,
    error: null,
    user: null,
  },
}: AppState);
