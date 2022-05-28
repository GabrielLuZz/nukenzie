import Button from "../Button";
import style from "./style.module.css";

const Menu = ({ handleFilteredTransactions, selected }) => {
  return (
    <nav className={style.menu}>
      <h2 className={style.menu__title}>Resumo financeiro</h2>

      <ul className={style.menu__list}>
        <li className={style.menu__item}>
          <Button
            handleClick={() => {
              handleFilteredTransactions("todos");
            }}
            pink={selected === "todos"}
          >
            Todos
          </Button>
        </li>
        <li className={style.menu__item}>
          <Button
            handleClick={() => {
              handleFilteredTransactions("entrada");
            }}
            pink={selected === "entrada"}
          >
            Entradas
          </Button>
        </li>
        <li className={style.menu__item}>
          <Button
            handleClick={() => {
              handleFilteredTransactions("despesa");
            }}
            pink={selected === "despesa"}
          >
            Despesas
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
