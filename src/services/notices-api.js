import instance from './auth-api';

export const getNoticesByCategory = async category => {
  const { data } = await instance.get(`api/notices/category/${category}`);
  return data;
};

export const getNoticeById = async id => {
  const { data } = await instance.get(`api/notices/${id}`);
  return data;
};

export const updateFavorite = async _id => {
  const { data } = await instance.patch(`api/notices/favorite/${_id}`);
  return data;
};

export const getNoticeByFavorite = async id => {
  const { data } = await instance.get(`api/notices/favorites`);
  return data;
};

export const addNoticeByCategory = async notice => {
  const { data } = await instance.post('/notices', notice);
  return data;
};

export const addPet = async pet => {
  const { data } = await instance.post('api/pet', pet);
  return data;
};

export const getUserNotices = async () => {
  const { data } = await instance.get(`/notices/own`);
  return data;
};

export const deleteUserNotice = async id => {
  const { data } = await instance.delete(`api/notices/${id}`);

  return data;
};

export const getUserPet = async () => {
  const { data } = await instance.get('api/pet');
  return data;
};
