export const selectNoticesByCategory = ({ notices }) =>
  notices.noticesByCategory;
export const selectUserNotices = ({ notices }) => notices.userNotices;
export const selectFavorites = ({ notices }) => notices.favorite;
export const isLoading = ({ notices }) => notices.isLoading;
