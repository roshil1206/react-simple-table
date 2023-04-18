import React from "react";
import "./SimpleTable.css";
import Header, { columnObject } from "./Header";
import Body from "./Body";

export interface SimpleTableProps {
  label: String;
  align: String | undefined;
  columns: Array<columnObject>;
  data: Array<Object> | undefined;
}

const SimpleTable = (props: SimpleTableProps) => {
  const { align, columns, data } = props;
  return (
    <table className="simpleTable-c">
      <Header columns={columns} align={align} />
      <Body
        data={data}
        identifiers={columns.map((column) => column.identifier)}
      />
    </table>
  );
};

export default SimpleTable;
