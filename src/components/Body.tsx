import React from "react";
import "./Body.css";

export interface BodyProps {
  data: Array<any> | undefined;
  identifiers: Array<string>;
  pageSize: Number | undefined;
  align: "left" | "right" | "center" | undefined;
}

export default function Body(props: BodyProps) {
  const { data, identifiers, pageSize, align } = props;
  return (
    <tbody>
      {data?.map((row, key) => (
        <tr key={key}>
          <td className="body-cell" style={{ textAlign: align }}>
            {key + 1}
          </td>
          {identifiers.map((identifier, identifierKey) => (
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
