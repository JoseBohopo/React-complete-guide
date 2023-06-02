import imagesMeal from "../../assets/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onShowCartHandler={props.onShowCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imagesMeal} alt="a table full of food" />
      </div>
    </>
  );
};

export default Header;
