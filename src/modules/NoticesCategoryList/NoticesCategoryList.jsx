import React from "react";
import NoticeCategoryItem from "modules/NoticeCategoryItem/NoticeCategoryItem";
import styles from "./notices-category-list.module.css"
import { noticies } from "./notices";

const NoticesCategoryList = () => {
  return (

<div className={styles.section}>
      <ul className={styles.petsListWrapper}>


        {noticies.map(
            ({
             _id,
              avatarURL,
              title,
              location,
              date,
              category,
              sex,
            }) => (
              <NoticeCategoryItem
                key={_id}
                avatarURL={avatarURL}
                title={title}
                place={location}
                date={date}
                location={location}
                category={category}
                sex ={sex}
              />
            )
          )}

      </ul>
    </div>
  );
};


export default NoticesCategoryList
