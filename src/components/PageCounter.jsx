// src/Pagination.js
import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

function Pagination({ page, pageCount, onPageChange }) {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <MuiPagination
      count={pageCount}
      page={page}
      onChange={handleChange}
      variant="outlined"
      shape="rounded"
      color="primary"
    />
  );
}

export default Pagination;
