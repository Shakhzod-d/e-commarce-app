import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ItemList from "./ItemList";

function ModalWindow({ open, handleClose, items }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Cart</DialogTitle>
      <DialogContent>
        {items?.length === 0 ? (
          <DialogTitle>No items selected yet</DialogTitle>
        ) : (
          <ItemList addProduct={() => {}} items={items} />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalWindow;
