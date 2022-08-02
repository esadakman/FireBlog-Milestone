import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../helpers/firebase";
import { set, ref, push, onValue, remove, update } from "firebase/database";
import { useAuthContext } from "./AuthContext";

const BlogContextProvider = () => {
  const { userCheck } = useAuthContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [editPostOpen, setEditPostOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [updateInfo, setUpdateInfo] = useState({});
  return;
};

export default BlogContextProvider;
