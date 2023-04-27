import "./expense-date.styles.css";

export function ExpenseDate({ date }) {
  const MONTH = date.toLocaleString("en-US", { month: "long" });
  const YEAR = date.getFullYear();
  const DAY = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{MONTH}</div>
      <div className="expense-date__year">{YEAR}</div>
      <div className="expense-date__day">{DAY}</div>
    </div>
  );
}
