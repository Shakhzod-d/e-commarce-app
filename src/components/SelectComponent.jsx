import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectComponent({ items, setItems, setLoading }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    const categoryUrl = `https://dummyjson.com/products/category/${event.target.value}`;
    setLoading(true);
    fetch(categoryUrl)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <FormControl variant="outlined" sx={{ width: "500px" }}>
      <InputLabel id="select-label">Select an Option</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        onChange={handleChange}
        label="Select an Option"
      >
        <MenuItem value="">None</MenuItem>
        {items?.map((item, idx) => {
          return (
            <MenuItem key={idx} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
