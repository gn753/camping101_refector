import { useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState(1);
  const limit = 3;
  const offset = (page - 1) * limit;

  const prevArrow = () => {
    setPage(page - 1);
  };

  const updatePagination = (index: number) => {
    setPage(index + 1);
  };

  const nextArrow = () => {
    setPage(page + 1);
  };

  return { prevArrow, nextArrow, updatePagination, page, offset, limit };
}
