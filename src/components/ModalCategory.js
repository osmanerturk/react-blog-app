import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { putAsyncCat } from "../redux/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch()

 

  const [category, setCategory] = React.useState('');
 
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
            onInput={(e) => {
              setCategory(e.target.value)
            }}
          />
          

          <Button onClick={()=>dispatch(putAsyncCat())}>Create New Category</Button>
        </Box>
      </Modal>
    </div>
  );
}
