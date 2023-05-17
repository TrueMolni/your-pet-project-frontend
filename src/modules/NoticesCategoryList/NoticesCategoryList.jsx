import React from "react";
import NoticeCategoryItem from "modules/NoticeCategoryItem/NoticeCategoryItem";
import styles from "./notices-category-list.module.css"

const NoticesCategoryList = ({petInformation }) => {

  return (
    <ul className={styles.petsListWrapper}>

         <li key={petInformation._id} className={styles.petsItemWrapper}>
        <NoticeCategoryItem />
      </li>

    </ul>
  );
};


export default NoticesCategoryList
