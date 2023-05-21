import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'modules/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoryList from 'modules/NoticesCategoryList/NoticesCategoryList';
// import NoticesFilters from '../../shared/components/NoticesSearch/NoticesSearch';
// import NoticesCategoriesList from '../../shared/components/NoticesSearch/NoticesSearch';
// import AddPetBtn from 'shared/components/AddPetBtn';

const NoticesPage = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    if (!categoryName) {
      navigate('/notices/sell');
    }
  }, [categoryName, navigate]);

  return (
    <div>
      <NoticesCategoriesNav />
      <NoticesCategoryList />
      {/* <AddPetBtn /> */}
      {/* <NoticesSearch />
      <NoticesCategoriesNav />
       <AddPetBtn />
      <NoticesFilters />
      <NoticesCategoriesList /> */}
    </div>
  );
};

export default NoticesPage;
