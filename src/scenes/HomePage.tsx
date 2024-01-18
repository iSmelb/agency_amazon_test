import { testdata as data } from "@/data/data";
import { dateFormating } from "@/utils/dateFormat";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IAccounts } from "@/data/data";
import TableHeaders from "@/components/tableHeaders/TableHeaders";
import { useSortAndFilter } from "@/hooks/useSorting";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/UI/pagination/Pagination";
import CustomSelect from "@/components/UI/select/CustomSelect";
import CustomInput from "@/components/UI/input/CustomInput";

const HomePage: FC = () => {
  const [list, setList] = useState(data);
  const [sort, setSort] = useState<keyof IAccounts | null>(null);
  const [filter, setFilter] = useState("");

  const sortedAndFilter = useSortAndFilter(list, sort, filter, "email");
  const {
    limit,
    handleLimit,
    currentItems,
    pagesArray,
    currentPage,
    handlePageChange,
  } = usePagination({ limitItemsOnPage: 0, items: sortedAndFilter });

  const headers: { value: keyof IAccounts; name: string }[] = [
    { value: "accountId", name: "Id" },
    { value: "email", name: "Email" },
    { value: "authToken", name: "Token" },
    { value: "creationDate", name: "Creation Date" },
  ];

  const handleSort = (option: keyof IAccounts) => {
    if (sort && sort === option) {
      setSort(null);
    } else {
      setSort(option);
    }
  };

  return (
    <div className="home_page">
      <div>Filter by email</div>
      <CustomInput onChange={setFilter} />

      <div>Count of elements on page:</div>
      <CustomSelect
        placeholder="Choose limit"
        options={[
          { value: 0, name: "all" },
          { value: 1, name: 1 },
          { value: 2, name: 2 },
          { value: 3, name: 3 },
        ]}
        onChange={handleLimit}
        value={limit}
      />
      <div className="table">
        <TableHeaders headers={headers} sort={sort} setSortBy={handleSort} />
        {currentItems &&
          currentItems.map((account) => (
            <Link
              className="link_row"
              key={account.accountId}
              state={account.profiles}
              to={`accounts/${account.accountId}/profiles`}
            >
              <div>{account.accountId}</div>
              <div>{account.email}</div>
              <div>{account.authToken}</div>
              <div>{dateFormating(account.creationDate)}</div>
            </Link>
          ))}
      </div>
      <Pagination
        pages={pagesArray}
        currentPage={currentPage}
        onClick={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
