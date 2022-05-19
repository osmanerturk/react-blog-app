import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { selectCats, selectPosts } from "../redux/slices/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { putAsyncPost } from "../redux/slices/categorySlice";
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

  const cats = useSelector(selectCats);

  const [title, setTitle] = React.useState("");
  const [categoryId, setCategoryId] = React.useState("");
  const [caption, setCaption] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [file, setFile] = React.useState(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append("img",file)
    formData.append("title",title)
    formData.append("categoryId",categoryId)
    formData.append("caption",caption)
    formData.append("content",description)
    formData.append("authorId",6)
    dispatch(
      putAsyncPost(formData)
    );
    setTitle("");
    setCategoryId("");
    setCaption("");
    setDescription("");
  };

  console.log(categoryId);
  console.log(title);
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
          <form>
            <input
              type="file"
              accept="image/*"
              placeholder="file"
              className="input input-bordered w-full max-w-xs"
              onChange={(e)=>setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <select
              onChange={(e) => setCategoryId(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value={undefined}>Select Category</option>
              {cats.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <textarea
              className="textarea textarea-primary"
              placeholder="Caption"
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
            ></textarea>
            <textarea
              className="textarea textarea-primary"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>

            <Button onClick={handleSubmit}>Create New Post</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
