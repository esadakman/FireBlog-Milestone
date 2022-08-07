import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../contexts/AuthContext";
import NewBlogStyle from "./pagesStyles/NewBlog.module.scss";
import { push, ref, set } from "firebase/database";
import { auth, db } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  // const { userCheck } = useAuthContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  // Bilgi Ekleme
  const AddUser = (e) => {
    e.preventDefault();
    const userRef = ref(db, "blog/");
    const newUserRef = push(userRef);
    set(newUserRef, {
      title: title,
      description: description,
      imageUrl: imageUrl,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      // createdAt: new Date().toISOString().split("T")[0],
      createdAt: new Date().toLocaleString("en-us", {
        month: "long",
        year: "numeric",
        day: "numeric",
      }),
      likes: 0,
    });
    setTitle("");
    setDescription("");
    setImageUrl("");
    navigate("/");
  };
  // console.log(auth.currentUser.displayName);
  return (
    <div className={NewBlogStyle["container"]}>
      <div className={NewBlogStyle["contactForm"]}>
        <h2>Add New Blog Post</h2>
        <div>
          <form /* onSubmit={(e) => createPost(e)} */>
            <input
              type="text"
              name="title"
              label="Title"
              placeholder="Title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              // type="text"
              id="image"
              label="ImageUrl"
              placeholder="Image URL"
              // required
              type="text"
              name="image"
              className="form-control"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <textarea
              placeholder="Content"
              // required
              autoFocus
              margin="normal"
              id="content"
              label="Content"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button /* type="submit" */ value="Send" onClick={AddUser}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;

// const handlePublish = () => {
//   if (!formData.title || !formData.description || !formData.image) {
//     alert("Please fill all the fields");
//     return;
//   }
//   const storageRef = ref(
//     storage,
//     `/images/${Date.now()}${formData.image.name}`
//   );

//   const uploadImage = uploadBytesResumable(storageRef, formData.image);

//   uploadImage.on(
//     "state_changed",
//     (snapshot) => {
//       const progressPercent = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//       setProgress(progressPercent);
//     },
//     (err) => {
//       console.log(err);
//     },
//     () => {
//       setFormData({
//         title: "",
//         description: "",
//         image: "",
//       });

//       getDownloadURL(uploadImage.snapshot.ref).then((url) => {
//         const articleRef = collection(db, "Articles");
//         addDoc(articleRef, {
//           title: formData.title,
//           description: formData.description,
//           imageUrl: url,
//           createdAt: Timestamp.now().toDate(),
//           createdBy: userCheck.displayName,
//           userId: userCheck.uid,
//           likes: [],
//           comments: [],
//         })
//           .then(() => {
//             console.log("Article added successfully");
//             setProgress(0);
//           })
//           .catch((err) => {
//             console.log("Error adding article");
//           });
//       });
//     }
//   );
// };

// {/* <div className={NewBlogStyle["cardContainer"]}> */}
//       {/* <div className={NewBlogStyle["title"]}>
//           <h2>──── Details ────</h2>
//         </div>
//         <div className={NewBlogStyle["description"]}>
//           <h3>TITLE</h3>
//           <h6>Jul 30, 2022</h6>
//           <p>
//             Node.js, açık kaynaklı, genelde sunucu tarafında çalışan ve ağ
//             bağlantılı uygulamalar için geliştirilmiş bir çalıştırma ortamıdır
//             (İng. İngilizce: runtime environment). Node.js uygulamaları genelde
//             istemci tarafı betik dili olan JavaScript kullanılarak geliştirilir.
//             Node.js, Google V8 JavaScript motorunu kullanarak betik dilini
//             yorumlar ve içerisinde standart olarak dağıtılan kütüphaneler
//             sayesinde ek bir sunucu yazılımına (Apache HTTP Sunucusu, Nginx, IIS
//             vs.) gerek kalmadan uygulamanın Web sunucusu görevini görür.
//           </p>
//         </div>
//         <div className={NewBlogStyle["cardFooter"]}> */}
//       {/* <p>@esadakman </p> */}
//       {/* </div> */}
//       {/* </div> */}
