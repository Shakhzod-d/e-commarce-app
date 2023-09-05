import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const ItemList = ({ items, addProduct }) => {
  const addItemToCart = (item) => {
    addProduct((prevItems) => [...prevItems, item]);
  };

  return (
    <List style={{ width: "500px" }}>
      {items?.map((item, index) => (
        <div key={index}>
          {"No "}
          {+index + 1}
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={item.title} src={item.thumbnail} />
            </ListItemAvatar>

            <ListItemText
              primary={item.title}
              secondary={`Price: ${item?.price}$`}
            />
            <IconButton color="secondary" aria-label="Delete">
              <DeleteIcon style={{ cursor: "pointer", width: "18px" }} />
            </IconButton>
            <IconButton color="primary" aria-label="Edit">
              <EditIcon style={{ cursor: "pointer", width: "18px" }} />
            </IconButton>
            <IconButton
              onClick={() => addItemToCart(item)}
              color="primary"
              aria-label="Edit"
            >
              <AddIcon style={{ cursor: "pointer" }} />
            </IconButton>
          </ListItem>
          {index < items.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
};

export default ItemList;
