import React from "react";
import "./Body.css";
import { PagninationType } from "./SimpleTable";

export interface BodyProps {
  data: Array<any> | undefined;
  identifiers: Array<string>;
  pageSize: number;
  align: "left" | "right" | "center" | undefined;
  pagination: PagninationType;
}

export default function Body(props: BodyProps) {
  const { data, identifiers, pageSize, align, pagination } = props;
  return (
    <tbody>
      {data
        ?.slice((pagination.page - 1) * pageSize, pagination.page * pageSize)
        ?.map((row, key) => (
          <tr key={key}>
            <td className="body-cell" style={{ textAlign: align }}>
              {key + 1}
            </td>
            {identifiers.slice(0, pageSize).map((identifier, identifierKey) => (
              <React.Fragment key={identifierKey}>
                <td className="body-cell" style={{ textAlign: align }}>
                  {row[identifier]}
                </td>
              </React.Fragment>
            ))}
          </tr>
        ))}
    </tbody>
  );
}
