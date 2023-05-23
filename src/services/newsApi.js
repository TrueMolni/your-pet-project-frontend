import instance from './auth-api';

export const getAllNews = async () => {
  const { data } = await instance.get(`api/news`);
  return data;
};

// export const getNewsById = async id => {
//   const { data } = await instance.get(`api/news/${id}`);
//   return data;
// };
