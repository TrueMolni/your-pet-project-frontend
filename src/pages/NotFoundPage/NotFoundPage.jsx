import styles from './notFound.module.css';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';
import ButtonNav from 'shared/components/Button/ButtonNav';
import NavContainer from 'modules/Navigation/NavContainer';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/main');
  };
  return (
    <>
      <header>
        <NavContainer />
      </header>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.textbox}>
            <span className={styles.text1}>Ooops!&nbsp;</span>
            <span className={styles.text2}>This page not found :(</span>
          </div>
          <div className={styles.boxImages}>
            <p className={styles.numberLeft}>4</p>
            <div className={styles.image}></div>
            <p className={styles.numberRight}>4</p>
          </div>
          <div className="boxButton">
            <ButtonNav
              customStyle={styles.button}
              buttonName={'To main page'}
              buttonIcon={<Icon />}
              type="button"
              onClick={goToMainPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
