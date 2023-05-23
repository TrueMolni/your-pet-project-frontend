import moment from 'moment/moment';
import sprite from '../images/icons/sprite.svg';
import { Notify } from 'notiflix';

const countFullYears = date => {
  const fullYears = moment(date, 'DD-MM-YYYY')
    .fromNow()
    .split(' ')
    .slice(0, 2)
    .join(' ');
  if (fullYears.includes('in')) {
    return 'no inform';
  }
  return fullYears;
};

const notification = () => {
  Notify.info('You should be logged in to add to favorites', {
    timeout: 2000,
    clickToClose: true,
    position: 'right-top',
  });
};
const selectIconGender = sex => {
  if (sex === 'male') {
    return `${sprite}#male`;
  }
  return `${sprite}#female`;
};

export { countFullYears, notification, selectIconGender };
