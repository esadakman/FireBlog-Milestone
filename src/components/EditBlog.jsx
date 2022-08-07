import editStyle from "./ComponentsStyles/EditBlog.module.scss";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "50%", lg: "42%" },
  height: "fit-content",
  // bgcolor: "rgba(255, 255, 255, 0.916)",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "1rem",
  transition: "0.5s all linear",
};

const EditBlog = ({ editData }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(editData);
  return (
    <div>
      <Button
        sx={{
          margin: "0 !important",
          color: "green",
          minWidth: "50px !important",
        }}
        onClick={handleOpen}
      >
        <EditIcon />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className={editStyle["update"]}>
              <h2>Update Blog</h2>
              <div>
                <form /* ref={form} onSubmit={sendEmail} */>
                  <input
                    type="text"
                    id="title"
                    label="Title"
                    variant="standard"
                    placeholder="Title"
                    autoFocus
                    required
                    // value={editData.title || ""}
                  />
                  <input
                    type="text"
                    id="image"
                    label="ImageUrl"
                    variant="standard"
                    placeholder="Image URL"
                    autoFocus
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Content"
                    required
                    autoFocus
                    margin="normal"
                    id="content"
                    label="Content"
                    type="text"
                    variant="standard"
                    // value={editData.description || ""}
                  />
                  <button type="submit" value="Send">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditBlog;
