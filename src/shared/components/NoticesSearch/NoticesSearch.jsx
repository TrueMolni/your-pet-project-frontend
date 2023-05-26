import CustomSearch from './CustomSearch';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/notices-operations';

const NoticesSearch = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onSearch = value => {
    setTitle(value);
  };

  useEffect(() => {
    const notices = () => {
      if (!!title) return dispatch(operations.getNoticesByTitle(title));
      setTitle('');
    };
    notices();
  }, [dispatch, title]);
  return <CustomSearch title={'Find your favorite pet'} onSearch={onSearch} />;
};

export default NoticesSearch;
