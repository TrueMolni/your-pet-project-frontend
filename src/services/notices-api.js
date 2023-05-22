import instance from './auth-api';

//для отримання оголошень по категоріям

export const getNoticesByCategory = async category => {
  const { data } = await instance.get(`api/notices/category/${category}`);

  return data;
};

//для отримання одного оголошення

// export const getNoticeById = async _id => {
//   const { data } = await instance.get(`api/notices/${_id}`);
//   console.log(data);
//   return data;
// };

//для додавання оголошення до обраних

export const updateFavorite = async id => {
  const { data } = await instance.patch(`api/notices/favorite/${id}`);
  return data;
};

//для отримання оголошень авторизованого користувача доданих ним же в обрані
// export const getAllNoticesByAuthUserAddedToFavorites = async id => {
//   const { data } = await instance.get(`api/notices/user/${id}/favorite`);
//   return data;
// };

//для видалення оголошення авторизованого користувача доданих цим же до обраних

// export const delNoticeByAuthUserAddedToFavorites = async id => {
//   const { data } = await instance.delete(`/notices/user/${id}/favourite`);
//   return data;
// };

export const deleteUserNotice = async id => {
  const { data } = await instance.delete(`/notices/${id}`);
  return data;
};

//для додавання оголошень відповідно до обраної категорії

// export const addNoticeByCategory = async notice => {
//   const { data } = await instance.post('/notices', notice);
//   return data;
// };

// //для отримання оголошень авторизованого кристувача створених цим же користувачем
// export const getNoticesAuthUserByIdUser = async () => {
//   const { data } = await instance.get(`/notices`);
//   return data;
// };
