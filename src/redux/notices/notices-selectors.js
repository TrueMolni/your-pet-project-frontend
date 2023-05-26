export const selectNoticesByCategory = ({ notices }) =>
  notices.noticesByCategory;
export const selectNoticeById = ({ notices }) => notices.adDetails;
export const selectFavorites = ({ notices }) => notices.favorite;
export const selectUserNotices = ({ notices }) => notices.userNotices;
export const selectPet = ({ notices }) => notices.pet;
export const selectFavoriteAds = ({ notices }) => notices.favoriteAds;
export const selectAllNotices = ({ notices }) => notices.allNotices;
export const selectFoundNoticesTitle = ({ notices }) =>
  notices.foundNoticesTitle;
export const isLoading = ({ notices }) => notices.isLoading;
export const getError = ({ notices }) => notices.error;
export const selectDeleted = ({ notices }) => notices.deleted;
