import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (!items.length) {
      return;
    }

    setBtnIsHighlighted(true);
    const btnTimeOut = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => {
      clearTimeout(btnTimeOut);
    };
  }, [items]);
  const totalItems = items.reduce((previousValue, currentValue) => {
    return +previousValue + +currentValue.amount;
  }, 0);
  return (
    <button onClick={props.onShowCartHandler} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
