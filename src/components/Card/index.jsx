import removeIcon from "../../assets/images/removeIcon.png";
import style from "./style.module.css";

const Card = ({ description, type, value, removeFromListTransactions, id }) => {
  const newValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return (
    <li className={style.card}>
      <div className={style.bar}></div>
      <div className={style.info}>
        <div className={style.info__leftSide}>
          <h2 className={style.info__title}>{description}</h2>
          <span className={style.info__type}>{type}</span>
        </div>
        <div className={style.info__rightSide}>
          <span className={style.info__price}>{newValue}</span>
          <button
            onClick={() => removeFromListTransactions(id)}
            className={style.info__remove}
          >
            <img src={removeIcon} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
