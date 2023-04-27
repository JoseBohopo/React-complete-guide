import React from "react";
import "./expenses-list.styles.css";
import ExpenseItem from "../expenseItem";

export function ExpensesList(props) {
  const { expenses } = props;
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  const MappedExpense = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={new Date(expense.date)}
      />
    );
  });

  return <ul className="expenses-list">{MappedExpense}</ul>;
}
