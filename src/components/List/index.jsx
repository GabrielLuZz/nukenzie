import noCard from "../../assets/images/noCard.svg";
import Card from "../Card";
import style from "./style.module.css";

const List = ({ filteredTransactions, removeFromListTransactions }) => {
  return (
    <ul className={style.list}>
      {filteredTransactions.length > 0 ? (
        <>
          {filteredTransactions.map(
            ({ description, type, value, id }, index) => (
              <Card
                key={index}
                description={description}
                type={type}
                value={value}
                id={id}
                removeFromListTransactions={removeFromListTransactions}
              />
            )
          )}
        </>
      ) : (
        <>
          <h2 className={style.without}>
            Você ainda não possui nenhum lançamento
          </h2>
          <img src={noCard} alt="" />
          <img src={noCard} alt="" />
          <img src={noCard} alt="" />
        </>
      )}
    </ul>
  );
};

export default List;
