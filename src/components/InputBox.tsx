import React from "react";
import "./InputBox.css";

interface InputBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function InputBox(props: InputBoxProps) {
  const { onChange, value } = props;
  return (
    <input
      type="text"
      className="input-box"
      placeholder="Search"
      onChange={onChange}
      value={value}
    />
  );
}
