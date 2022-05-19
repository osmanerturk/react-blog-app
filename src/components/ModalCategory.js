import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { putAsyncCat } from "../redux/slices/categorySlice";
import { useDispatch } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {

  const [newCat,setNewCat] = React.useState("")
  const dispatch = useDispatch()
  const handleSubmit = () => {
    if (!newCat) return;
    dispatch(putAsyncCat({ name : newCat }));

    setNewCat("");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>+Category</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col space-y-3" sx={style}>
          <input
            type="text"
            placeholder="Category Name"
            className="input input-bordered w-full max-w-xs"
            onChange={(e)=> setNewCat(e.target.value)}
            value={newCat}
            
          />

          <Button onClick={handleSubmit}>Create New Category</Button>
        </Box>
      </Modal>
    </div>
  );
}
