import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewsList from 'shared/components/NewsList/NewsList';
import CustomSearch from 'shared/components/NoticesSearch/CustomSearch';
import { getAllNews, getNewsByTitle } from 'redux/news/newsOperations';
import { isLoading, getError, getNews } from 'redux/news/newsSelectors';
import Loader from '../../shared/components/Loader/Loader';

const News = () => {
  const [title, setTitle] = useState('');

  const onSearch = ({ search }) => {
    setTitle(search);
  };

  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(getError);
  const items = useSelector(getNews);

  useEffect(() => {
    dispatch(getAllNews());
    // dispatch(getNewsByTitle(title));
  }, [dispatch, title]);

  return (
    <>
      <CustomSearch title={'News'} onChange={onSearch} />
      {loading && !error && <Loader />}
      <NewsList items={items} />
    </>
  );
};

export default News;
