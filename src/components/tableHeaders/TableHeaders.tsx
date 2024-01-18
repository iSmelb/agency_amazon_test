import { FC } from "react";

interface ITableHeaders {
  headers: {
    value: string;
    name: string;
  }[];
  sort: string | null;
  setSortBy: (option: string) => void;
}

const TableHeaders: FC<ITableHeaders> = ({ headers, sort, setSortBy }) => {
  return (
    <div className="table_header">
      {headers.map((header) => (
        <div
          className={sort === header.value ? "active" : ""}
          key={header.value}
          onClick={() => setSortBy(header.value)}
        >
          {header.name}
        </div>
      ))}
    </div>
  );
};

export default TableHeaders;
