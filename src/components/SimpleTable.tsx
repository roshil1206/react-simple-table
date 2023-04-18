import React from "react";
import "./SimpleTable.css";
import Header from "./Header";

export interface SimpleTableProps {
  label: String;
}

const SimpleTable = (props: SimpleTableProps) => {
  return (
    <table className="simpleTable-c">
      <Header
        columns={[{ name: "Name" }, { name: "Name" }, { name: "Name" }]}
        align="center"
      />
    </table>
  );
};

export default SimpleTable;
