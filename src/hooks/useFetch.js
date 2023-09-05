import React, { useEffect, useState } from "react";

const useFetch = (url, countPage, setItems, setLoading) => {
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [countPage]);
};

export default useFetch;
