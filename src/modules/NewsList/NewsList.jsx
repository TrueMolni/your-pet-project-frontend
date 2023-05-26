import { memo } from 'react';
import css from './news-list.module.css';

const NewsList = ({ items }) => {
  const elements = items.map(({ _id, title, text, imgUrl, date }) => (
    <li className={css.item} key={_id} id={_id}>
      <img className={css.img} src={imgUrl} alt="news post" />
      <div className={css.textPart}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.text}>{text}</p>
      </div>
      <div className={css.footerCard}>
        <p className={(css.text, { color: '#888888' })}>{date.slice(0, 10)}</p>
        <button type="button" className={css.button}>
          Read more
        </button>
      </div>
    </li>
  ));

  return <ul className={css.list}>{elements}</ul>;
};

export default memo(NewsList);
