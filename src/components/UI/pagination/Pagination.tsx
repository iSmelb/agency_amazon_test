import { FC } from "react";

interface IPagination {
  pages: number[];
  currentPage: number;
  onClick: (page: number) => void;
}

const Pagination: FC<IPagination> = ({ pages, currentPage, onClick }) => {
  return (
    <div className="pagination">
      {pages.map((_, i) => (
        <button
          className={i + 1 === currentPage ? "active" : ""}
          key={i + 1}
          onClick={() => onClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
