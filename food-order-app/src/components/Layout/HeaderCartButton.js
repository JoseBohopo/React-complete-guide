import { useContext } from "react";
import CartContext from "../../context/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const { items } = useContext(CartContext);
  console.log(
    "🚀 ~ file: HeaderCartButton.js:9 ~ HeaderCartButton ~ items:",
    items
  );
  const totalItems = items.reduce((previousValue, currentValue) => {
    return +previousValue + +currentValue.amount;
  }, 0);
  return (
    <button onClick={props.onShowCartHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
