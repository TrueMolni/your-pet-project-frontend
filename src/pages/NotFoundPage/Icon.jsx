import sprite from '../../images/icons/sprite.svg';
import style from '../NotFoundPage/notFound.module.css';

const Icon = () => {
  return (
    <svg width={24} height={24} className={style.icon} fill="none">
      <use href={sprite + '#paw-white'}></use>
    </svg>
  );
};

export default Icon;
