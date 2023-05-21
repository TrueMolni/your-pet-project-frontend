export const getUser = ({ auth }) => auth.user.name;
export const getUserEmail = ({ auth }) => auth.user.email;
export const isUserLogin = ({ auth }) => auth.isLogin;
export const isToken = ({ auth }) => auth.token;
export const isLoading = ({ auth }) => auth.isLoading;
export const isModalOpen = ({ auth }) => auth.isModalOpen;
export const getAuth = ({ auth }) => {
  const { isLogin, token, isLoading } = auth;
  return { isLogin, token , isLoading};
};
