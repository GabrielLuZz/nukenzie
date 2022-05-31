import Form from "../Form";
import Header from "../Header";
import List from "../List";
import Menu from "../Menu";
import TotalMoney from "../TotalMoney";
import style from "./style.module.css";

const HomePage = ({
  filteredTransactions,
  handleFilteredTransactions,
  handleInWelcomePage,
  addToListTransactions,
  removeFromListTransactions,
  selected,
}) => {
  return (
    <>
      <Header handleInWelcomePage={handleInWelcomePage} />
      <main className={style.main}>
        <div className="container">
          <section className={style.leftSide}>
            <Form
              addToListTransactions={addToListTransactions}
              handleFilteredTransactions={handleFilteredTransactions}
              selected={selected}
            />
            {filteredTransactions.length > 0 && (
              <TotalMoney filteredTransactions={filteredTransactions} />
            )}
          </section>
          <section className={style.rightSide}>
            <Menu
              handleFilteredTransactions={handleFilteredTransactions}
              selected={selected}
            />
            <List
              filteredTransactions={filteredTransactions}
              removeFromListTransactions={removeFromListTransactions}
              selected
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
