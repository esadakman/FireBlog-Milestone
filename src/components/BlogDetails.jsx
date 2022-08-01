// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./ComponentsStyles/BlogDetails.scss";
import EditBlog from "./EditBlog";

export default function BlogDetails() {
  return (
    <div className="container">
      <div className="cardContainer">
        <div className="title">
          <h2>──── Details ────</h2>
          <img
            // style={{ width: "30rem" }}
            src="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
            alt="poster"
          />
        </div>
        <div className="description">
          <h3>TITLE</h3>
          <h6>Jul 30, 2022</h6>
          <p>
            Node.js, açık kaynaklı, genelde sunucu tarafında çalışan ve ağ
            bağlantılı uygulamalar için geliştirilmiş bir çalıştırma ortamıdır
            (İng. İngilizce: runtime environment). Node.js uygulamaları genelde
            istemci tarafı betik dili olan JavaScript kullanılarak geliştirilir.
            Node.js, Google V8 JavaScript motorunu kullanarak betik dilini
            yorumlar ve içerisinde standart olarak dağıtılan kütüphaneler
            sayesinde ek bir sunucu yazılımına (Apache HTTP Sunucusu, Nginx, IIS
            vs.) gerek kalmadan uygulamanın Web sunucusu görevini görür.
          </p>
        </div>
        <div className="cardFooter">
          <p>@esadakman </p>
          <div className="btnContainer">
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
