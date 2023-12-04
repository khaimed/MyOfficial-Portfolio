import "./MenuButton.css";

function MenuButton({ isOpen, onClick }) {
  const buttonClassName = `menu ${isOpen ? 'open' : ''}`;

  return (
    <>
      <button className={buttonClassName} onClick={onClick}>
        <span></span>
      </button>
    </>
  );
}

export default MenuButton;