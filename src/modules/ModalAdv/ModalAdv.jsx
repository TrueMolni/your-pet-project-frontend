import { useSelector, useDispatch } from 'react-redux';
import { selectNoticeById } from 'redux/notices/notices-selectors';
import operations from 'redux/notices/notices-operations';

import Modal from 'shared/components/Modal/Modal';

import styles from './modalAdv.module.css';
import sprite from '../../images/icons/sprite.svg';

const ModalAdv = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();
  const noticeDetails = useSelector(selectNoticeById);
  console.log(noticeDetails);

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      {noticeDetails && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalMainContent}>
              <div className={styles.modalTopSide}>
                <div className={styles.modalImageContainer}>
                  <img
                    src={noticeDetails.avatarURL}
                    alt={noticeDetails.breed}
                    className={styles.modalImage}
                  />
                  <span className={styles.modalPetPrice}>
                    {noticeDetails.category}
                  </span>
                </div>
                <div className={styles.modalMainInfo}>
                  <h2 className={styles.modalTitle}>{noticeDetails.title}</h2>
                  <ul className={styles.modalPetInfoList}>
                    <li>
                      Name:
                      <span className={styles.modalListInfo}>
                        {noticeDetails.name}
                      </span>
                    </li>
                    <li>
                      Birthday:
                      <span className={styles.modalListInfo}>
                        {noticeDetails.date}
                      </span>
                    </li>
                    <li>
                      Breed:
                      <span className={styles.modalListInfo}>
                        {noticeDetails.breed}
                      </span>
                    </li>
                    <li>
                      Place:
                      <span className={styles.modalListInfo}>
                        {noticeDetails.location}
                      </span>
                    </li>
                    <li>
                      The sex:
                      <span className={styles.modalListInfo}>
                        {noticeDetails.sex}
                      </span>
                    </li>
                    <li>
                      Email:
                      <span
                        className={`${styles.modalListInfo} ${styles.modalListInfoEmail}`}
                      >
                        user@mail.com
                      </span>
                    </li>
                    <li>
                      Phone:
                      <span
                        className={`${styles.modalListInfo} ${styles.modalListInfoPhone}`}
                      >
                        +380971234567
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.modalBotSide}>
                <div className={styles.modalCommentSection}>
                  <p className={styles.modalPetComments}>
                    Comments:{' '}
                    <span className={styles.modalPetComent}>
                      {noticeDetails.comments}
                    </span>
                  </p>
                </div>

                <div className={styles.modalButtons}>
                  <button
                    type="button"
                    className={styles.modalAddFavs}
                    onClick={() => dispatch(operations.updateFavorite(id))}
                  >
                    <span>Add to</span>
                    <svg
                      width="24"
                      height="24"
                      className={styles.modalHeartSvg}
                    >
                      <use xlinkHref={`${sprite}#heart`}></use>
                    </svg>
                  </button>
                  <button type="button" className={styles.modalContact}>
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ModalAdv;