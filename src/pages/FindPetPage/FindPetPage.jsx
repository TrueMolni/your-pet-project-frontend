import NoticesCategoryList from '../../modules/NoticesCategoryList/NoticesCategoryList';

import NoticesSearch from '../../shared/components/NoticesSearch/NoticesSearch';
const FindPetPage = () => {
  return (
    <div>
      <NoticesSearch />

      <NoticesCategoryList title={'Find Pet'} />
    </div>
  );
};
export default FindPetPage;
