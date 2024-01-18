import CustomInput from "@/components/UI/input/CustomInput";
import Pagination from "@/components/UI/pagination/Pagination";
import CustomSelect from "@/components/UI/select/CustomSelect";
import TableHeaders from "@/components/tableHeaders/TableHeaders";
import { ICampaign, testdata as data } from "@/data/data";
import { usePagination } from "@/hooks/usePagination";
import { useSortAndFilter } from "@/hooks/useSorting";
import { dateFormating } from "@/utils/dateFormat";
import { FC, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const CampingPage: FC = () => {
  const location = useLocation();
  const state = location.state as ICampaign[];
  const { id, idProfile } = useParams();
  const list =
    state ||
    data
      .find((account) => account.accountId === Number(id))
      ?.profiles.find((profile) => profile.profileId === Number(idProfile))
      ?.campings;

  const [sort, setSort] = useState<keyof ICampaign | null>(null);
  const [filter, setFilter] = useState("");

  const sortedAndFilter = useSortAndFilter(list, sort, filter, "cost");

  const {
    limit,
    handleLimit,
    currentItems,
    pagesArray,
    currentPage,
    handlePageChange,
  } = usePagination({ limitItemsOnPage: 0, items: sortedAndFilter });

  const headers: { value: keyof ICampaign; name: string }[] = [
    { value: "campaignId", name: "Id" },
    { value: "clicks", name: "Clicks" },
    { value: "cost", name: "Cost" },
    { value: "date", name: "Date" },
  ];

  const handleSort = (option: keyof ICampaign) => {
    if (sort && sort === option) {
      setSort(null);
    } else {
      setSort(option);
    }
  };

  return (
    <div className="camping_page">
      <div>Filter by cost:</div>
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
          currentItems.map((camping) => (
            <div className="row" key={camping.campaignId}>
              <div>{camping.campaignId}</div>
              <div>{camping.clicks}</div>
              <div>{camping.cost}</div>
              <div>{dateFormating(camping.date)}</div>
            </div>
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

export default CampingPage;
