import { getPageCount } from "@/utils/totalPage";
import { useMemo, useState } from "react";

export const useLimit = (pageCount: number): number[] => {
  const arr: number[] = [];
  return useMemo(() => {
    for (let i = 0; i < pageCount; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [pageCount]);
};

interface IUseLimit<T> {
  limitItemsOnPage: number;
  items: T[];
}

export const usePagination = <T>({ limitItemsOnPage, items }: IUseLimit<T>) => {
  const [limit, setLimit] = useState(limitItemsOnPage);
  const totalPages = limit ? getPageCount(items.length, limit) : 1;
  console.log(totalPages);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = limit ? (currentPage - 1) * limit : 0;
  const endIndex = limit ? startIndex + limit : items.length;

  const pagesArray = useLimit(totalPages);
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLimit = (count: string) => {
    setCurrentPage(1);
    setLimit(Number(count));
  };

  return {
    limit,
    handleLimit,
    currentPage,
    pagesArray,
    handlePageChange,
    currentItems,
  };
};
