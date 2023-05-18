import moment from 'moment/moment';
import sprite from '../images/icons/sprite.svg';

const countFullYears = date => {
  const fullYears = moment(date, 'DD-MM-YYYY')
    .fromNow()
    .split(' ')
    .slice(0, 2)
    .join(' ');
  return fullYears;
};

const selectIconGender = sex => {
  if (sex === 'male') {
    return `${sprite}#male`;
  }
  return `${sprite}#female`;
};

export { countFullYears, selectIconGender };
