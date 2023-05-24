// import { useState } from 'react';
// import Button from '../../../shared/components/Button/Button';
// import AddIcon from '@mui/icons-material/Add';
// import css from './addPetButton.module.css';

// const AddPetButton = ({ onPostHandler }) => {
//   const [isShow, setIsShow] = useState(false);

//   const openMenu = event => {
//     if (!event) return;
//     setIsShow(true);
//   };

//   return (
//     <Button
//       onClick={openMenu}
//       customStyle={css.addPetBtn}
//       buttonName={'Add Pet'}
//       buttonIcon={
//         <AddIcon width={24} height={24} className={css.iconPlus}></AddIcon>
//       }
//       type="button"
//     ></Button>
//   );
// };

// export default AddPetButton;

// import { Link } from 'react-router-dom';

// // import css from './add-pet-btn.module.css';
// import sprite from '../../../images/icons/sprite.svg';

// const AddPetBtn = () => {
//   return (
//     <Link className={css.Btn} to="/add-pet">
//       Add Pet
//       <svg width="24px" height="24px" className={css.icon}>
//         <use href={sprite + '#plus'}></use>
//       </svg>
//     </Link>
//   );
// };

// export default AddPetBtn;
