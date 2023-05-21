import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
// import NoticesCategoriesNav from '../../shared/components/NoticesSearch/NoticesSearch';
// import NoticesFilters from '../../shared/components/NoticesSearch/NoticesSearch';
// import NoticesCategoriesList from '../../shared/components/NoticesSearch/NoticesSearch';
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
      { <NoticesSearch />
      /*<NoticesCategoriesNav />
       <AddPetBtn />
      <NoticesFilters />
      <NoticesCategoriesList /> */}
    </div>
  );
};

export default NoticesPage;
