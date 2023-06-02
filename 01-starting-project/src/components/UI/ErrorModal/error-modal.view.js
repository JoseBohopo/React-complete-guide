import ReactDom from "react-dom";
import Button from "../Button";
import Card from "../Card";
import styles from "./error-modal.styles.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onErrorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

export const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onErrorHandler={props.onErrorHandler}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
