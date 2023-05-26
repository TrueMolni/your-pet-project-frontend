import Search from 'antd/es/input/Search';
import styled from './custom-search.module.css';
import { useDispatch } from 'react-redux';
import { ReactComponent as ClearBtnIcon } from './cross-small (1).svg';
import { ReactComponent as SearchBtnIcon } from './search (1).svg';
import { useState } from 'react';
import cn from 'classnames';
import operations from 'redux/notices/notices-operations';

const ClearIcon = <ClearBtnIcon />;
const SearchIcon = <SearchBtnIcon />;

const CustomSearch = ({ title, onChange, onSearch }) => {
  const dispatch = useDispatch();
  const [searchActive, setSearchActive] = useState(false);

  const handleChange = e => {
    if (onChange) {
      onChange(e);
    }
    if (e.target.value && e.target.value !== '') {
      return setSearchActive(true);
    }
    setSearchActive(false);
    dispatch(operations.getAllNotices());
  };

  const handleSearch = value => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={styled.wrapper}>
      {title && <h1 className={styled.title}>{title}</h1>}
      <Search
        className={cn(styled.search, { [styled.activeSearch]: searchActive })}
        placeholder="Search"
        enterButton={SearchIcon}
        allowClear={{ clearIcon: ClearIcon }}
        bordered={false}
        onChange={handleChange}
        onSearch={handleSearch}
        maxLength={20}
      />
    </div>
  );
};

export default CustomSearch;
