import React from "react";
import "./Header.css";

interface columnObject {
  name: String;
}

export interface HeaderProps {
  columns: Array<columnObject>;
  align: any;
}

const Header = (props: HeaderProps) => {
  const { columns, align } = props;
  return (
    <thead className="header-container">
      <tr className="header-row">
        {columns.map((column, key) => (
          <th className="header-column" key={key} style={{ textAlign: align }}>
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
