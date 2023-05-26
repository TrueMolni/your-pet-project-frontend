import instance from './auth-api';

const query = {
  page: 1,
  perPage: 12,
};

export const getAllNews = async () => {
  const { data } = await instance.get(`api/news`, {
    params: {
      ...query,
    },
  });
  return data;
};

export const getNewsByTitle = async search => {
  const { data } = await instance.get(`api/news/title`, {
    params: {
      ...query,
      title: search,
    },
  });
  return data;
};
