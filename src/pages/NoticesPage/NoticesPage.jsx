import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import NoticesSearch from '../../modules/NoticesSearch/NoticesSearch';
// import NoticesCategoriesNav from '../../modules/NoticesCategoriesNav';
// import NoticesFilters from '../../modules/NoticesFilters/NoticesFilters';
// import NoticesCategoriesList from '../../modules/NoticesCategoriesList/NoticesCategoriesList';
import AddPetBtn from 'shared/components/AddPetBtn';

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
      <AddPetBtn />
      {/* <NoticesSearch />
      <NoticesCategoriesNav />
       <AddPetBtn />
      <NoticesFilters />
      <NoticesCategoriesList /> */}
    </div>
  );
};

export default NoticesPage;
