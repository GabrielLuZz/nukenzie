import Button from "../Button";
import style from "./style.module.css";
import logoWelcome from "../../assets/images/logoWelcome.svg";

const WelcomePage = ({ handleInWelcomePage }) => {
  return (
    <main className={style.main}>
      <section className={style.leftSide}>
        <h1 className={style.leftSide__title}>
          <span className={style.leftSide__nu}>Nu</span> Kenzie
        </h1>
        <p className={style.leftSide__description}>
          Centralize o controle das suas finanças
        </p>
        <span className={style.leftSide__slogan}>de forma rápida e segura</span>
        <div className={style.areaButton}>
          <Button handleClick={handleInWelcomePage} big pink>
            Iniciar
          </Button>
        </div>
      </section>
      <section className={style.rightSide}>
        <img className={style.rightSide__logo} src={logoWelcome} alt="" />
      </section>
    </main>
  );
};

export default WelcomePage;
