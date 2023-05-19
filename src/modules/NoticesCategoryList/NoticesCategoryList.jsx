import React from "react";
import NoticeCategoryItem from "modules/NoticeCategoryItem/NoticeCategoryItem";
import styles from "./notices-category-list.module.css"
import { noticies } from "./notices";



const NoticesCategoryList = ({ petInformation }) => {
  return (

<div className={styles.section}>
    <ul className={styles.petsListWrapper}>

        {noticies.map(
            ({
              _id,
              avatarURL,
              title,
              petName,
              breed,
              location,
              dateOfBirth,
              price,
              category,
              favorite,
              owner,
            }) => (
              <NoticeCategoryItem
                key={_id}
                image={avatarURL}
                title={title}
                petName={petName}
                breed={breed}
                place={location}
                dateOfBirth={dateOfBirth}
                price={price}
                category={category}
                favorite={favorite}
                owner={owner}

              />
            )
          )}

      </ul>
    </div>
  );
};


export default NoticesCategoryList
