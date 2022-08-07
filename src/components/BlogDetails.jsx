import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import BlogStyle from "./ComponentsStyles/BlogDetails.module.scss";
import EditBlog from "./EditBlog";
import { useBlogContext } from "../contexts/BlogContext";

export default function BlogDetails() {
  const { isLoading, data } = useBlogContext();
  console.log(data);
  return (
    <div className={BlogStyle["container"]}>
      <div className={BlogStyle["cardContainer"]}>
        <div className={BlogStyle["title"]}>
          <h2>──── Details ────</h2>
          <img
            // style={{ width: "30rem" }}
            src="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
            alt="poster"
          />
        </div>
        <div className={BlogStyle["description"]}>
          <h3>TITLE</h3>
          <h6>Jul 30, 2022</h6>
          <p>{data.description}</p>
        </div>
        <div className={BlogStyle["cardFooter"]}>
          <p>@esadakman </p>
          <div className={BlogStyle["btnContainer"]}>
            <Button
              sx={{
                minWidth: "15px !important",
                color: "Red",
              }}
            >
              <DeleteForeverIcon />
            </Button>
            <EditBlog />
            <Button
              sx={{
                minWidth: "15px !important",
                color: "Pink",
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// {/* <Card sx={{ width: "645px" }}>
//         <CardActionArea>

//           <CardMedia
//             component="img"
//             height="340"
//             image="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card> */}
