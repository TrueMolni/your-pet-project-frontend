const ButtonNav = ({
  customStyle,
  buttonName,
  buttonIcon,
  type = 'button',
  onClick,
}) => {
  return (
    <>
      <button className={customStyle} type={type} onClick={onClick}>
        {buttonName}
        {buttonIcon}
      </button>
    </>
  );
};

export default ButtonNav;
