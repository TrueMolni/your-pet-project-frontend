import Button from '../../../shared/components/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import css from './btnAddPet.module.css';

const BtnAddPet = ({ onPostHandler }) => {
  return (
    <Button
      // onClick={onPostHandler}
      customStyle={css.addPetBtn}
      buttonName={'Add Pet'}
      buttonIcon={
        <AddIcon width={24} height={24} className={css.iconPlus}></AddIcon>
      }
      type="button"
    ></Button>
  );
};

export default BtnAddPet;
