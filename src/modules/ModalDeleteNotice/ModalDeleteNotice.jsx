import Modal from 'shared/components/Modal/Modal';
import styles from './modal-delete-notice.module.css';
import { deleteUserNotice } from 'redux/notices/notices-operations';

const ModalDeleteNotice = ({ isOpen, onClose, title, key }) => {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <div className={styles.modalWrapper}>
        <h2 className={styles.titleModal}>Delete adverstiment?</h2>
        <p className={styles.textModal}>
          Are you sure you want to delete{' '}
          <span className={styles.boldText}>“{title}”? </span>
          You can`t undo this action.
        </p>
        <div className={styles.btnWrapper}>
          <button className={styles.btnCancel} onClick={() => onClose()}>
            Cancel
          </button>
          <button
            className={styles.btnYes}
            onClick={() => deleteUserNotice(key)}
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteNotice;
