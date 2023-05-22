import PetsItem from '../PetsItem/PetsItem.jsx';
import emptyPets from '../../../images/notfound/notfound@1x.jpg';
import css from './petsList.module.css';

const Petslist = ({ pets }) => {
  const card = pets?.map(pet => {
    return (
      <li className={css.item} key={pet._id}>
        <PetsItem pet={pet} />
      </li>
    );
  });

  return (
    <>
      {pets?.length === 0 && (
        <div className={css.imgContainer}>
          <img
            className={css.imgEmpty}
            src={emptyPets}
            alt="No pets were added"
          />
        </div>
      )}
      <ul className={css.list}>{card}</ul>
    </>
  );
};

export default Petslist;
