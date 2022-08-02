import React from "react";
import NewBlogStyle from "./pagesStyles/NewBlog.module.scss";

const NewBlog = () => {
  return (
    <div className={NewBlogStyle["container"]}>
      <div className={NewBlogStyle["contactForm"]}>
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
      {/* <div className={NewBlogStyle["cardContainer"]}> */}
      {/* <div className={NewBlogStyle["title"]}>
          <h2>──── Details ────</h2>
        </div>
        <div className={NewBlogStyle["description"]}>
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
        <div className={NewBlogStyle["cardFooter"]}> */}
      {/* <p>@esadakman </p> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default NewBlog;
