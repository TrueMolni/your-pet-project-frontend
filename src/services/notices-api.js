import instance from './auth-api';

const query = {
  page: 1,
  perPage: 10,
};

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

export const addNoticeByCategory = async data => {
  const result = await instance.post('api/notices/notice', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return result;
};

export const getUserNotices = async () => {
  const { data } = await instance.get(`api/notices/own`);
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

export const getNoticesByTitle = async search => {
  const { data } = await instance.get(`api/notices/search`, {
    params: {
      ...query,
      title: search,
    },
  });
  return data;
};

export const getAllNotices = async () => {
  const { data } = await instance.get(`api/notices/`, {
    params: {
      ...query,
    },
  });
  return data;
};


export const addPet = async pet => {
  const { data } = await instance.post('api/pet', pet);
  return data;
};


