import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./pagesStyles/NewBlog.scss";
import { Typography } from "@mui/material";
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

export default function NewBlog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography
        sx={{ fontSize: "14.5px", marginTop: "1px" }}
        m="0"
        onClick={handleOpen}
      >
        New Blog
      </Typography>
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
            <div className="Contact From">
              <h2>Add New Blog Post</h2>
              <div>
                <form /* ref={form} onSubmit={sendEmail} */>
                  <input
                    type="text"
                    id="title"
                    label="Title"
                    variant="standard"
                    placeholder="Title"
                    required
                  />
                  <input
                    type="text"
                    id="image"
                    label="ImageUrl"
                    variant="standard"
                    placeholder="Image URL"
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
                  />
                  <button type="submit" value="Send">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

// {/* <TextField
//               autoFocus
//               margin="normal"
//               id="title"
//               label="Title"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={title}
//               onChange={(e)=>setTitle(e.target.value)}
//               required
//             />
//             <TextField
//               autoFocus
//               margin="normal"
//               id="image"
//               label="ImageUrl"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={image}
//               onChange={(e)=>setImage(e.target.value)}
//               placeholder="If you don't type an URL random image will be placed."
//             />
//              <TextField
//               autoFocus
//               aria-label="empty textarea"
//               margin="normal"
//               id="content"
//               label="Content"
//               type="textarea"
//               fullWidth
//               variant="standard"
//               value={content}
//               onChange={(e)=>setContent(e.target.value)}
//             />
//             <TextareaAutosize
//               maxRows={4}
//               minRows={3}
//               required
//               aria-label="empty textarea"
//               placeholder="Empty"
//               style={{ width: "100%" }}
//             />
//             <Box
//               component="div"
//               mt={2}
//               display={"flex"}
//               justifyContent={"space between"}
//             >
//               <Button>Submit</Button>
//               <Button>Cancel</Button>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, width: { xs: "100%", md: "45%" } }}
//                 onClick={handleSubmitChange}
//               >
//                 Submit Change
//               </Button>
//               <Button
//                 type="submit"
//                 color="error"
//                 variant="contained"
//                 sx={{
//                   mt: 3,
//                   marginLeft: { xs: "0", md: "2rem" },
//                   width: { xs: "100%", md: "45%" },
//                 }}
//                 onClick={handleClose}
//               >
//                 Cancel Change
//               </Button>
//             </Box>
//  */}
