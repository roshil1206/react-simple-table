import React from "react";
import "./SearchSection.css";
import InputBox from "./InputBox";
import { columnObject } from "./Header";

interface SearchSectionProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  showSearchFilterDropDown: boolean | undefined;
  filterOption: string | undefined;
  selectFilterOption: (option: string) => void;
  searchColumns: Array<columnObject>;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  onChange,
  value,
  showSearchFilterDropDown,
  filterOption,
  selectFilterOption,
  searchColumns,
}) => {
  return (
    <div className="search-container">
      <div>
        {showSearchFilterDropDown && (
          <select
            value={filterOption}
            onChange={(e) => selectFilterOption(e.target.value)}
          >
            <option value="" selected disabled hidden>
              Choose Filter
            </option>
            {searchColumns.map((column, key) => (
              <option value={column.identifier} key={key}>
                {column.name}
              </option>
            ))}
          </select>
        )}
        <InputBox onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default SearchSection;
