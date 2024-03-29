import { useContext, useRef } from "react";
import CartContext from "../../context/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };
  const price = `$${props.price.toFixed(2)} `;
  return (
    <li className={classes.meal}>
      <div>
        <div>
          <h3>{props.name}</h3>{" "}
        </div>
        <div className={classes.description}>{props.description} </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
