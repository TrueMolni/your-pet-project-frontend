const BurgerMenuBtn = ({ btnStyle, btnIcon, handleClick }) => {
  return (
    <button type="button" className={btnStyle} onClick={handleClick}>
      <svg width={24} height={24}>
        <use href={btnIcon}></use>
      </svg>
    </button>
  );
};
export default BurgerMenuBtn;
