import "../ui/Card.css";
export default function Card({ children, className }) {
  const CLASSES = "card " + className;
  return <div className={CLASSES}>{children}</div>;
}
