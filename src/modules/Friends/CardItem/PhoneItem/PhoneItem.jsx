import Li from '../LiItem/LiItem';
import Paragraph from '../Paragraph/Paragraph';
import styles from './phone-item.module.css';

const PhoneItem = ({ text, phone }) => {
  return (
    <Li className={styles.infoPhone}>
      <a href={`tel:${phone}`}>
        <div className={phone ? `${styles.wrapper}` : ''}>
          <Paragraph className={styles.textPhone}>{text}</Paragraph>
          {phone ? (
            <Paragraph className={styles.addressLink}>{phone}</Paragraph>
          ) : (
            <Paragraph>website only</Paragraph>
          )}
        </div>
      </a>
    </Li>
  );
};

export default PhoneItem;
