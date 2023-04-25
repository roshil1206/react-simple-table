import React from "react";
import "./Header.css";

export interface columnObject {
  name: String;
  identifier: string;
}

export interface HeaderProps {
  columns: Array<columnObject>;
  align: "left" | "right" | "center" | undefined;
}

const Header = (props: HeaderProps) => {
  const { columns, align } = props;
  return (
    <thead className="header-container">
      <tr className="header-row">
        <th className="header-column" style={{ textAlign: align }}>
          No.
        </th>
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
