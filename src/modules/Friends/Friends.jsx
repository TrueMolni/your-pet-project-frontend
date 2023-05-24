import { useState, useEffect } from 'react';
import styles from './friends.module.css';
import MainTitle from './MainTitle/MainTitle';
import CardItem from './CardItem/CardItem';
import {friendsList} from './friendsList';

const getAllFriends = async () => {
  const { data } = await friendsList();

  return data;
};


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
