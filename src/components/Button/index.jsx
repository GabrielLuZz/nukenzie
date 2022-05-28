import style from "./style.module.css";

const Button = ({ children, big, pink, handleClick }) => {
  return (
    <button
      className={style.button}
      style={{
        padding: big ? "13px 20px" : "10px 15px",
        backgroundColor: pink ? "#FD377E" : "#E9ECEF",
        border: `2px solid ${pink ? "#FD377E" : "#E9ECEF"}`,
        fontFamily: big ? "Inter" : "Nunito",
        fontWeight: big ? 500 : 600,
        fontSize: big ? "16px" : "14px",
        color: pink ? "#FFF" : "#5B6166",
        width: big ? "100%" : "auto",
      }}
      onClick={handleClick && handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
