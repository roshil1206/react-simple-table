import React from "react";
import { PagninationType } from "./SimpleTable";
import "./Pagination.css";

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
    const paginationArray: Array<getPageType> = [
      { pageno: 1, clickable: true },
    ];

    const addTillLastPage = (): void => {
      for (let i = 2; i <= lastPage; i++) {
        paginationArray.push({ pageno: i, clickable: true });
      }
    };

    const pushTwoBefore = (currentPage: number): void => {
      paginationArray.push({ pageno: currentPage - 2, clickable: true });
      paginationArray.push({ pageno: currentPage - 1, clickable: true });
    };

    const pushTwoAfter = (
      currentPage: number,
      includeCurrent: boolean
    ): void => {
      if (includeCurrent) {
        paginationArray.push({ pageno: currentPage, clickable: true });
      }
      paginationArray.push({ pageno: currentPage + 1, clickable: true });
      paginationArray.push({ pageno: currentPage + 2, clickable: true });
    };

    const pushDots = (): void => {
      paginationArray.push({ pageno: "...", clickable: false });
    };

    const pushEnd = (): void => {
      paginationArray.push({ pageno: lastPage, clickable: true });
    };

    switch (pagination.page) {
      case 1:
        if (lastPage > 5) {
          pushTwoAfter(pagination.page, false);
          pushDots();
          pushEnd();
        } else {
          addTillLastPage();
        }
        break;
      case 2:
        if (lastPage > 6) {
          pushTwoAfter(pagination.page, true);
          pushDots();
          pushEnd();
        } else {
          addTillLastPage();
        }
        break;
      case 3:
        if (lastPage > 7) {
          paginationArray.push({ pageno: 2, clickable: true });
          pushTwoAfter(pagination.page, true);
          pushDots();
          pushEnd();
        } else {
          addTillLastPage();
        }
        break;

      case 4:
        if (lastPage > 8) {
          pushTwoBefore(pagination.page);
          pushTwoAfter(pagination.page, true);
          pushDots();
          pushEnd();
        } else {
          addTillLastPage();
        }
        break;

      case lastPage - 3:
        if (lastPage > 7) {
          pushDots();
          pushTwoBefore(pagination.page);
          pushTwoAfter(pagination.page, true);
          pushEnd();
        } else {
          addTillLastPage();
        }
        break;

      case lastPage - 2:
        if (lastPage > 7) {
          pushDots();
          pushTwoBefore(pagination.page);
          pushTwoAfter(pagination.page, true);
        } else {
          addTillLastPage();
        }
        break;
      case lastPage - 1:
        if (lastPage > 6) {
          pushDots();
          pushTwoBefore(pagination.page);
          paginationArray.push({ pageno: pagination.page, clickable: true });
          pushEnd();
        } else {
          addTillLastPage();
        }
        break;
      case lastPage:
        if (lastPage > 5) {
          pushDots();
          pushTwoBefore(pagination.page);
          pushEnd();
        } else {
          addTillLastPage();
        }
        break;

      default:
        pushDots();
        pushTwoBefore(pagination.page);
        pushTwoAfter(pagination.page, true);
        pushDots();
        pushEnd();
        break;
    }

    return paginationArray;
  };

  return (
    <div className="pagination">
      <button
        disabled={!pagination.preBtn}
        onClick={() => handlePageChange(pagination.page - 1)}
        className="paginationButton"
      >
        Back
      </button>
      {getPages().map((page: any, index: number) => (
        <div key={index}>
          {page.clickable ? (
            <button
              onClick={() => handlePageChange(page.pageno)}
              className={`paginationButton ${
                pagination.page === page.pageno ? "active" : ""
              }`}
            >
              {page.pageno}
            </button>
          ) : (
            <div
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <p
                style={{
                  margin: 0,
                  marginLeft: "0.3rem",
                  marginRight: "0.3rem",
                }}
              >
                {page.pageno}
              </p>
            </div>
          )}
        </div>
      ))}
      <button
        disabled={!pagination.nextBtn}
        onClick={() => handlePageChange(pagination.page + 1)}
        className="paginationButton"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
