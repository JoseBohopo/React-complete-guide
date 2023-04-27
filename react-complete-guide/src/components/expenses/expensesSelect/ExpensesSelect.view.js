import React from "react";

const selectOptionsArray = [
  { value: "", label: "--Please choose a year--" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
];

export function ExpensesSelect(props) {
  const { onYearPicker } = props;

  const iteratedOptions = selectOptionsArray.map((option) => {
    const { value, label } = option;
    return <option value={value}>{label}</option>;
  });
  return (
    <div className="filterContainer">
      <p className="filterParagraph">Filter by year</p>
      <select onChange={onYearPicker}>{iteratedOptions}</select>
    </div>
  );
}
