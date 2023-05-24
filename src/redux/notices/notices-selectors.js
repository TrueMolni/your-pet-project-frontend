export const selectNoticesByCategory = ({ notices }) =>
  notices.noticesByCategory;
export const selectNoticeById = ({ notices }) => notices.noticeById;
export const selectFavorites = ({ notices }) => notices.favorite;
export const selectUserNotices = ({ notices }) => notices.userNotices;
