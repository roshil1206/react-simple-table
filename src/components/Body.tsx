import React from "react";
import "./Body.css";

export interface BodyProps {
  data: Array<any> | undefined;
  identifiers: Array<string>;
}

export default function Body(props: BodyProps) {
  const { data, identifiers } = props;
  return (
    <tbody>
      {data?.map((row, key) => (
        <tr key={key}>
          <td className="body-cell">{key + 1}</td>
          {identifiers.map((identifier, identifierKey) => (
            <React.Fragment key={identifierKey}>
              <td className="body-cell">{row[identifier]}</td>
            </React.Fragment>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
