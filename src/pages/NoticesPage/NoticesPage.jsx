import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../../modules/NoticesCategoriesNav/NoticesCategoriesNav';
// import NoticesFilters from '../../modules/NoticesFilters/NoticesFilters';
import NoticesCategoriesList from '../../modules/NoticesCategoryList/NoticesCategoryList';
// import AddPetBtn from 'shared/components/AddPetBtn';
import ModalAdv from 'modules/ModalAdv/ModalAdv';
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
      <NoticesSearch />
      <NoticesCategoriesNav />
      {/* <AddPetBtn /> */}
      <NoticesCategoriesList />
      <ModalAdv/>
      {/* <NoticesFilters /> */}
    </div>
  );
};

export default NoticesPage;
