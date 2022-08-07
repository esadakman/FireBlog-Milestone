import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import BlogStyle from "./ComponentsStyles/BlogDetails.module.scss";
import EditBlog from "./EditBlog";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { ref, remove } from "firebase/database";
import { db } from "../helpers/firebase";

export default function BlogDetails() {
  const { state } = useLocation();
  const { userCheck } = useAuthContext();
  const navigate = useNavigate();

  // console.log(state.id);
  // console.log(state);

  // ? DELETEContact
  const handleDelete = (data) => {
    remove(ref(db, `blog/` + state.id));
    navigate("/");
    // toastSuccess("Contact succesfully deleted");
  };

  return (
    <div className={BlogStyle["container"]}>
      <div className={BlogStyle["cardContainer"]}>
        <div className={BlogStyle["title"]}>
          <h2>──── Details ────</h2>
          <img
            // style={{ width: "30rem" }}
            src={state.imageUrl}
            alt="poster"
          />
        </div>
        <div className={BlogStyle["description"]}>
          <h3>{state.title}</h3>
          <h6>{state.createdAt}</h6>
          <p>{state.description}</p>
        </div>
        <div className={BlogStyle["cardFooter"]}>
          <p>@{state.author.name} </p>
          <div className={BlogStyle["btnContainer"]}>
            {state.author.id === userCheck.uid ? (
              <>
                <Button
                  sx={{
                    minWidth: "15px !important",
                    color: "Red",
                  }}
                  onClick={handleDelete}
                >
                  <DeleteForeverIcon />
                </Button>
                <EditBlog editData={state} />
                <Button
                  sx={{
                    minWidth: "15px !important",
                    color: "Pink",
                  }}
                >
                  <FavoriteBorderIcon />
                </Button>
              </>
            ) : (
              <Button
                sx={{
                  minWidth: "15px !important",
                  color: "Pink",
                }}
              >
                <FavoriteBorderIcon />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
