import React from "react";
import "./SimpleTable.css";
import Header, { columnObject } from "./Header";
import Body from "./Body";
import SearchSection from "./SearchSection";
import Pagination from "./Pagination";

export interface SimpleTableProps {
  label: String;
  align: "left" | "right" | "center" | undefined;
  columns: Array<columnObject>;
  // data: Array<Object> | undefined;
  data: Array<Object>;
  pageSize: number | undefined;
}

export interface PagninationType {
  page: number;
  nextBtn: boolean;
  preBtn: boolean;
}

const preDefinedPageSize = 10;

const SimpleTable: React.FC<SimpleTableProps> = ({
  align,
  columns,
  data,
  pageSize,
}) => {
  const [search, setSearch] = React.useState("");
  const [pagination, setPagination] = React.useState({
    nextBtn:
      Math.ceil(data?.length / (pageSize || preDefinedPageSize)) === 1
        ? false
        : true,
    preBtn: false,
    page: 1,
  });

  const handlePageChange = (pageNo: number) => {
    if (pageNo === Math.ceil(data.length / (pageSize || preDefinedPageSize))) {
      setPagination({ preBtn: true, nextBtn: false, page: pageNo });
    } else if (
      pageNo === 1 &&
      Math.ceil(data.length / (pageSize || preDefinedPageSize)) === 1
    ) {
      setPagination({ preBtn: false, nextBtn: false, page: pageNo });
    } else if (pageNo === 1) {
      setPagination({
        preBtn: false,
        nextBtn: true,
        page: pageNo,
      });
    } else {
      setPagination({ preBtn: true, nextBtn: true, page: pageNo });
    }
  };

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
          pageSize={pageSize || preDefinedPageSize}
          align={align}
          pagination={pagination}
        />
      </table>
      <Pagination
        lastPage={Math.ceil(data.length / (pageSize || preDefinedPageSize))}
        pagination={pagination}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default SimpleTable;
