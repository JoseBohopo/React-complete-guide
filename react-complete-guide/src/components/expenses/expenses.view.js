import "./expenses.styles.css";
import Card from "./card/index";
import ExpensesList from "./expensesList/index";
import ExpensesSelect from "./expensesSelect/index";
import ExpensesChart from "./expensesChart";

export function Expenses({ expenses, onYearPicker }) {
  return (
    <Card className="expenses">
      <ExpensesSelect onYearPicker={onYearPicker} />
      <ExpensesChart expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
}
