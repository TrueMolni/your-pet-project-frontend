import { useEffect } from 'react';

import NewsList from 'shared/components/NewsList/NewsList';
import NoticesSearch from 'shared/components/NoticesSearch/NoticesSearch';
import { getAllNews } from 'redux/news/newsOperations';
import { isLoading, getError, getNews } from 'redux/news/newsSelectors';
import { useSelector, useDispatch } from 'react-redux';

const News = () => {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const filterNews = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await fetchNews();
  //       setItems(prevItems => [...prevItems, ...data]);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   filterNews();
  // }, [setLoading, setItems, setError, setLoading, getAllNews]);
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(getError);
  const items = useSelector(getNews);

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  return (
    <>
      <h2>News</h2>
      <NoticesSearch />
      {loading && !error && <b>Request in progress...</b>}
      <NewsList items={items} />
    </>
  );
};

export default News;
