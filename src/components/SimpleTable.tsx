import React from "react";
import "./SimpleTable.css";
import Header, { columnObject } from "./Header";
import Body from "./Body";
import SearchSection from "./SearchSection";

export interface SimpleTableProps {
  label: String;
  align: "left" | "right" | "center" | undefined;
  columns: Array<columnObject>;
  data: Array<Object> | undefined;
  pageSize: Number | undefined;
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  align,
  columns,
  data,
  pageSize,
}) => {
  const [search, setSearch] = React.useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="simpleTableContainer">
      <SearchSection onChange={handleChangeSearch} value={search} />
      <table className="simpleTable-c">
        <Header columns={columns} align={align} />
        <Body
          data={data}
          identifiers={columns.map((column) => column.identifier)}
          pageSize={pageSize}
          align={align}
        />
      </table>
    </div>
  );
};

export default SimpleTable;
