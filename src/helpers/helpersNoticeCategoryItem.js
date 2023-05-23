import moment from 'moment/moment';
import sprite from '../images/icons/sprite.svg';
import { toast } from 'react-toastify';
import { GiCat } from 'react-icons/gi';

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

const notification = () =>
  toast.info('You should be logged in to add to favorites', {
    theme: 'colored',
    icon: <GiCat />,
  });
const selectIconGender = sex => {
  if (sex === 'male') {
    return `${sprite}#male`;
  }
  return `${sprite}#female`;
};

export { countFullYears, notification, selectIconGender };
