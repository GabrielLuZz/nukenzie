import Button from "../Button";
import style from "./style.module.css";

const Header = ({ handleInWelcomePage }) => {
  return (
    <header className={style.header}>
      <div className={style["container--header"]}>
        <h1 className={style.header__title}>
          <span className={style.header__slogan}>Nu</span> Kenzie
        </h1>

        <Button handleClick={handleInWelcomePage}>Inicio</Button>
      </div>
    </header>
  );
};

export default Header;
