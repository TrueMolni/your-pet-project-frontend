import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewsList from 'modules/NewsList/NewsList';
import CustomSearch from 'shared/components/NoticesSearch/CustomSearch';
import { getAllNews, getNewsByTitle } from 'redux/news/newsOperations';
import { isLoading, getError, getNews } from 'redux/news/newsSelectors';
import Loader from '../../shared/components/Loader/Loader';
import Weather from '../../shared/components/Weather/Weather';
import css from './news-page.module.css';

const NewsPage = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(getError);
  const items = useSelector(getNews);

  const onSearch = value => {
    setTitle(value);
  };

  useEffect(() => {
    const news = () => {
      if (!!title) return dispatch(getNewsByTitle(title));
      dispatch(getAllNews());
      setTitle('');
    };
    news();
  }, [dispatch, title]);

  return (
    <div className={css.newsPageWrapper}>
      <CustomSearch title={'News'} onSearch={onSearch} />
      <Weather />
      {loading && !error && <Loader />}
      <NewsList items={items} />
    </div>
  );
};

export default NewsPage;
