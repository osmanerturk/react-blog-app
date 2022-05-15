import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { selectItems } from "../redux/slices/categorySlice";
import { useSelector } from "react-redux";
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

  const cats = useSelector(selectItems) 

  return (
    <div>
      <Button onClick={handleOpen}>+Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="flex flex-col space-y-3" sx={style}>
          <input
            type="file"
            accept="image/*"
            placeholder="file"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
          />

          <select className="select select-bordered w-full max-w-xs">
            <option value={undefined}>
              Select Category
            </option>
           {cats.map(cat=>
            <option key={cat.id}>{cat.name}</option>)}
          </select>
          <textarea
            className="textarea textarea-primary"
            placeholder="Caption"
          ></textarea>
          <textarea
            className="textarea textarea-primary"
            placeholder="Description"
          ></textarea>

          <Button>Create New Post</Button>
        </Box>
      </Modal>
    </div>
  );
}
