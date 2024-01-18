import { sortByProperty } from "@/utils/sorting";
import { useMemo } from "react";

export const useSorting = <T>(list: T[], sort: keyof T | null): T[] => {
  const sortedList = useMemo(() => {
    if (sort) {
      console.log("сортируем");

      const newlist = sortByProperty(list, sort);
      return newlist;
    }
    return list;
  }, [list, sort]);

  return sortedList;
};

export const useSortAndFilter = <T>(
  list: T[],
  sort: keyof T | null,
  query: string,
  filterBy: keyof T
) => {
  const sortedList = useSorting(list, sort);

  const sortedAndSearchList = useMemo(() => {
    console.log("фильтруем");

    return sortedList.filter((elem) => {
      if (
        typeof elem[filterBy] === "string" ||
        typeof elem[filterBy] === "number" ||
        elem[filterBy] instanceof Date
      ) {
        return String(elem[filterBy])
          .toLowerCase()
          .includes(query.toLowerCase());
      }
      throw new Error("Invalid property type for filter");
    });
  }, [query, sortedList]);

  return sortedAndSearchList;
};
