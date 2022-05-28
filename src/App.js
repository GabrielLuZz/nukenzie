import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [inWelcomePage, setInWelcomePage] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);

  const [selected, setSelected] = useState("todos");

  const handleInWelcomePage = () => {
    setInWelcomePage(!inWelcomePage);
  };

  const handleFilteredTransactions = (transactions) => {
    if (selected !== "todos") {
      return transactions.filter(({ type }) => type === selected);
    }

    return transactions;
  };

  const addToListTransactions = (transaction) => {
    if (transaction.description) {
      setListTransactions([...listTransactions, transaction]);
    }
  };

  const removeFromListTransactions = (id) => {
    setListTransactions((oldState) =>
      oldState.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      {inWelcomePage ? (
        <WelcomePage handleInWelcomePage={handleInWelcomePage} />
      ) : (
        <HomePage
          handleInWelcomePage={handleInWelcomePage}
          filteredTransactions={handleFilteredTransactions(listTransactions)}
          handleFilteredTransactions={setSelected}
          addToListTransactions={addToListTransactions}
          removeFromListTransactions={removeFromListTransactions}
          selected={selected}
        />
      )}
    </>
  );
}

export default App;
