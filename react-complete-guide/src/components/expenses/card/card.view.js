import "./card.styles.css";
export function Card({ children, className }) {
  const CLASSES = "card " + className;
  return <div className={CLASSES}>{children}</div>;
}
