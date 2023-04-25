import React from "react";
import "./SearchSection.css";
import InputBox from "./InputBox";

interface SearchSectionProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function SearchSection(props: SearchSectionProps) {
  const { onChange, value } = props;
  return (
    <div className="search-container">
      <InputBox onChange={onChange} value={value} />
    </div>
  );
}
