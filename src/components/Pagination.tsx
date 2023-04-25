import React from "react";
import { PagninationType } from "./SimpleTable";

interface getPageType {
  pageno: number | string;
  clickable: boolean;
}

interface PaginationProps {
  handlePageChange: (e: number) => void;
  lastPage: number;
  pagination: PagninationType;
}

const Pagination: React.FC<PaginationProps> = ({
  handlePageChange,
  lastPage,
  pagination,
}) => {
  const getPages = (): Array<getPageType> => {
    if (pagination.page === 1) {
      if (lastPage > 5) {
        return [
          { pageno: 1, clickable: true },
          { pageno: 2, clickable: true },
          { pageno: 3, clickable: true },
          { pageno: "...", clickable: false },
          { pageno: lastPage, clickable: true },
        ];
      } else if (lastPage <= 5) {
        return Array.from({ length: lastPage }, (v: any, k: number) => ({
          pageno: k + 1,
          clickable: true,
        }));
      }
    } else if (pagination.page === 2) {
      if (lastPage > 5) {
        return [
          { pageno: 1, clickable: true },
          { pageno: 2, clickable: true },
          { pageno: 3, clickable: true },
          { pageno: "...", clickable: false },
          { pageno: lastPage, clickable: true },
        ];
      } else if (lastPage <= 5) {
        return Array.from({ length: lastPage }, (v: any, k: number) => ({
          pageno: k + 1,
          clickable: true,
        }));
      }
    } else if (pagination.page === 3) {
      if (lastPage > 5) {
        return [
          { pageno: 1, clickable: true },
          { pageno: 2, clickable: true },
          { pageno: 3, clickable: true },
          { pageno: "...", clickable: false },
          { pageno: lastPage, clickable: true },
        ];
      } else if (lastPage <= 5) {
        return Array.from({ length: lastPage }, (v: any, k: number) => ({
          pageno: k + 1,
          clickable: true,
        }));
      }
    } else if (pagination.page === lastPage) {
      if (lastPage > 5) {
        return [
          { pageno: 1, clickable: true },
          { pageno: "...", clickable: false },
          { pageno: lastPage - 2, clickable: true },
          { pageno: lastPage - 1, clickable: true },
          { pageno: lastPage, clickable: true },
        ];
      } else {
        return Array.from({ length: lastPage }, (v: any, k: number) => ({
          pageno: k + 1,
          clickable: true,
        }));
      }
    } else if (pagination.page === lastPage - 1) {
      if (lastPage > 5) {
        return [
          { pageno: 1, clickable: true },
          { pageno: "...", clickable: false },
          { pageno: lastPage - 2, clickable: true },
          { pageno: lastPage - 1, clickable: true },
          { pageno: lastPage, clickable: true },
        ];
      } else {
        return Array.from({ length: lastPage }, (v, k) => ({
          pageno: k + 1,
          clickable: true,
        }));
      }
    }
    return [
      { pageno: 1, clickable: true },
      { pageno: "...", clickable: false },
      { pageno: pagination.page, clickable: true },
      { pageno: "...", clickable: false },
      { pageno: lastPage, clickable: true },
    ];
  };

  return (
    <div className="pagination">
      <button
        disabled={!pagination.preBtn}
        onClick={() => handlePageChange(pagination.page - 1)}
      >
        back
      </button>
      {getPages().map((page: any, index: number) => (
        <div key={index}>
          {page.clickable ? (
            <button onClick={() => handlePageChange(page.pageno)}>
              {page.pageno}
            </button>
          ) : (
            <div>{page.pageno}</div>
          )}
        </div>
      ))}
      <button
        disabled={!pagination.nextBtn}
        onClick={() => handlePageChange(pagination.page + 1)}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
