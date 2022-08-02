import React from "react";
import { Link } from "react-router-dom";
import BlogCardStyle from "./ComponentsStyles/BlogCard.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BlogDetails from "./BlogDetails";
// import ModeCommentIcon from "@mui/icons-material/ModeComment";
const BlogCard = ({ articles }) => {
  // console.log(articles[0].id);
  return (
    <>
      {articles.map(({ id, title, description, imageURL, createdAt }) => (
        <div className={BlogCardStyle["row"]} key={id}>
          <div className={BlogCardStyle["card"]}>
            <div
              className={BlogCardStyle["wrapper"]}
              style={{ backgroundImage: `url(${imageURL})` }}
            >
              <div className={BlogCardStyle["header"]}>
                <div className={BlogCardStyle["date"]}>
                  <span className={BlogCardStyle["day"]}>
                    {createdAt.toDate().toDateString()}
                  </span>
                  {/* <span className={BlogCardStyle["month"]}>Aug</span>
                  <span className={BlogCardStyle["year"]}>2016</span> */}
                </div>
                <ul className={BlogCardStyle["menu-content"]}>
                  <li>
                    <FavoriteBorderIcon />
                    <span>18</span>
                  </li>
                </ul>
              </div>
              <div className={BlogCardStyle["data"]}>
                <div className={BlogCardStyle["content"]}>
                  <span className={BlogCardStyle["author"]}>Jane Doe</span>
                  <h1 className={BlogCardStyle["title"]}>
                    <Link to="/details">
                      {title}
                      {/* Stranger Things: The sound of the Upside Down */}
                    </Link>
                  </h1>
                  <p className={BlogCardStyle["text"]}>
                    {/* The antsy bingers of Netflix will eagerly anticipate the
                    digital release of the Survive soundtrack, out today. */}
                    {description}
                  </p>
                  <Link to="/details" className={BlogCardStyle["button"]}>
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;

// {articles.map((blog) => (
//   <div className={BlogCardStyle["row"]} key={blog.id}>
//     <div className={BlogCardStyle["card"]}>
//       <div
//         className={BlogCardStyle["wrapper"]}
//         style={{ backgroundImage: `url(${blog.imageURL})` }}
//       >
//         <div className={BlogCardStyle["header"]}>
//           <div className={BlogCardStyle["date"]}>
//             <span className={BlogCardStyle["day"]}>12</span>
//             <span className={BlogCardStyle["month"]}>Aug</span>
//             <span className={BlogCardStyle["year"]}>2016</span>
//           </div>
//           <ul className={BlogCardStyle["menu-content"]}>
//             <li>
//               <FavoriteBorderIcon />
//               <span>18</span>
//             </li>
//           </ul>
//         </div>
//         <div className={BlogCardStyle["data"]}>
//           <div className={BlogCardStyle["content"]}>
//             <span className={BlogCardStyle["author"]}>Jane Doe</span>
//             <h1 className={BlogCardStyle["title"]}>
//               <Link to="/details">
//                 {blog.title}
//                 {/* Stranger Things: The sound of the Upside Down */}
//               </Link>
//             </h1>
//             <p className={BlogCardStyle["text"]}>
//               {/* The antsy bingers of Netflix will eagerly anticipate the
//               digital release of the Survive soundtrack, out today. */}
//               {blog.description}
//             </p>
//             <Link to="/details" className={BlogCardStyle["button"]}>
//               Read more...
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
