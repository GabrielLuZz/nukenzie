import { useState } from "react";
import Button from "../Button";
import style from "./style.module.css";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  addToListTransactions,
  handleFilteredTransactions,
  selected,
}) => {
  const [type, setType] = useState("entrada");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const handleType = (event) => setType(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleValue = (event) => setValue(event.target.value);

  const handleDataForm = (event) => {
    event.preventDefault();
    const data = {
      type,
      description,
      value: parseFloat(value),
      id: uuidv4(),
    };

    addToListTransactions(data);

    setDescription("");
    setValue(0);
  };

  return (
    <form action="" className={style.form}>
      <label className={style.form__label}>
        <span className={style.form__nameField}>Descrição</span>
        <input
          type="text"
          name=""
          value={description}
          placeholder="Digite aqui sua descrição"
          onChange={handleDescription}
        ></input>
        <span className={style.form__exampleField}>Ex: Compra de roupas</span>
      </label>

      <div className={style.form__horizontal}>
        <label className={style.form__label}>
          <span className={style.form__nameField}>Valor</span>
          <div className={style.form__value}>
            <input type="number" name="" value={value} onChange={handleValue} />
            <span>R$</span>
          </div>
        </label>
        <label className={style.form__label}>
          <span className={style.form__nameField}>Tipo de valor</span>
          <select onChange={handleType} name="">
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </label>
      </div>

      <Button handleClick={handleDataForm} big pink>
        Inserir valor
      </Button>
    </form>
  );
};

export default Form;
