import { useState, useEffect } from 'react';
import styles from './friends.module.css';
import MainTitle from './MainTitle/MainTitle';
import CardItem from './CardItem/CardItem';
import friendsList from './friends';

// const getAllFriends = async () => {
//   const { data } = await friendsList();

//   return data;
// };
const getAllFriends = async () => {
  const  data  = friendsList.reduce((acc, obj) => [...acc, Object.values(obj).map(y => y)], []);
  return data;
}


const Friends = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      const res = await getAllFriends();

      setItems(res);
    };
    fetchFriends();
  }, []);


  return (
    <>

        <div className={styles.section}>
          
          <MainTitle/>

          <CardItem items={items} />
        </div>

    </>
  );
};

export default Friends;
