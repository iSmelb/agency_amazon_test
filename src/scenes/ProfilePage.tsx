import CustomInput from "@/components/UI/input/CustomInput";
import Pagination from "@/components/UI/pagination/Pagination";
import CustomSelect from "@/components/UI/select/CustomSelect";
import TableHeaders from "@/components/tableHeaders/TableHeaders";
import { IProfile, testdata as data } from "@/data/data";
import { usePagination } from "@/hooks/usePagination";
import { useSortAndFilter } from "@/hooks/useSorting";
import { FC, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ProfilePage: FC = () => {
  const location = useLocation();
  const state = location.state as IProfile[];
  const { id } = useParams();
  const list =
    state || data.find((account) => account.accountId === Number(id))?.profiles;

  const [sort, setSort] = useState<keyof IProfile | null>(null);
  const [filter, setFilter] = useState("");

  const sortedAndFilter = useSortAndFilter(list, sort, filter, "marketplace");

  const {
    limit,
    handleLimit,
    currentItems,
    pagesArray,
    currentPage,
    handlePageChange,
  } = usePagination({ limitItemsOnPage: 0, items: sortedAndFilter });

  const headers: { value: keyof IProfile; name: string }[] = [
    { value: "profileId", name: "Id" },
    { value: "country", name: "Country" },
    { value: "marketplace", name: "Marketplace" },
  ];

  const handleSort = (option: keyof IProfile) => {
    if (sort && sort === option) {
      setSort(null);
    } else {
      setSort(option);
    }
  };

  return (
    <div className="profile_page">
      <div>Filter by marketplace:</div>
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
          currentItems.map((profile) => (
            <Link
              className="link_row"
              key={profile.profileId}
              to={`${profile.profileId}/campings`}
              state={profile.campings}
            >
              <div>{profile.profileId}</div>
              <div>{profile.country}</div>
              <div>{profile.marketplace}</div>
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

export default ProfilePage;
