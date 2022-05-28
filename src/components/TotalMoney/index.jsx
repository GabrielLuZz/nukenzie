import style from "./style.module.css";

const TotalMoney = ({ filteredTransactions }) => {
  const sum = filteredTransactions.reduce((acc, listTransaction) => {
    if (listTransaction.type.toLowerCase() === "entrada") {
      return acc + listTransaction.value;
    } else if (listTransaction.type.toLowerCase() === "despesa") {
      return acc - listTransaction.value;
    } else {
      return acc;
    }
  }, 0);

  const newSum = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(sum);

  return (
    <section className={style.section}>
      <div className={style.section__horizontal}>
        <h2 className={style.section__title}>Valor total:</h2>
        <span className={style.section__price}>{newSum}</span>
      </div>
      <span className={style.section__example}>O valor se refere ao saldo</span>
    </section>
  );
};

export default TotalMoney;
