# FireBlog App (Milestone)

## Objective

Build a Register FireBlog App using ReactJS.

## Description

- Project aims to create a FireBlog App.
- In this project, I designed a Fire Blog with many features.
- I used context API for state management, Firebase for authentication, and Firestore database for CRUD operations.
- I did the styling with Material UI and SASS.
- I also use formik and yup for login and register validation.

## Project Link

#### You can reach my project from [here](https://fire-blog-milestone.vercel.app/) 👈

## Project Skeleton

```
FireBlog-Milestone (folder)
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│    ├── assets
│    │       └── [images]
│    ├── components
│    │       ├── ComponentsStyles
│    │       │     ├── BlogCard.module.scss
│    │       │     ├── EditBlog.module.scss
│    │       │     ├── Navbar.module.scss
│    │       │     ├── Home.module.scss
│    │       │     └── NotFound.module.scss
│    │       ├── formik
│    │       │     ├── LoginForm.jsx
│    │       │     ├── LoginSchema.jsx
│    │       │     ├── SignUpForm.jsx
│    │       │     └── signUpSchema.jsx
│    │       ├── BlogCard.jsx
│    │       ├── EditBlog.jsx
│    │       ├── Footer.jsx
│    │       ├── Navbar.jsx
│    │       └── NotFound.jsx
│    ├── contexts
│    │       ├── AuthContext.js
│    │       └── BlogContext.js
│    ├── helpers
│    │       ├── firebase.js
│    │       └── toastNotify.js
│    ├── pages
│    │      ├── pagesStyle
│    │      │     ├── BlogDetails.module.scss
│    │      │     ├── Home.module.scss
│    │      │     └── NewBlog.module.scss
│    │      ├── BlogDetails.jsx
│    │      ├── Home.jsx
│    │      ├── Login.jsx
│    │      ├── NewBlog.jsx
│    │      ├── Profile.jsx
│    │      └── Register.jsx
│    ├── router
│    │       └─── AppRouter.jsx
│    ├── scss
│    │     ├── _mixins.scss
│    │     ├── _reset.scss
│    │     └── _variables.scss
│    ├── App.js
│    ├── index.js
│    └── index.scss
├── .env
├── package.json
└── yarn.lock
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JS
- ReactJS
- Firebase
- SASS
- Material-UI
- Context API
- Formik-Yup

To run this project;

- Signup `https://firebase.google.com/` and create new app in firebase.
- Use `https://firebase.google.com/docs/auth/web/start` and create Firebase Auth for `Authentication` and Firebase Realtime Database for `CRUD` operations (Don't forget to change read and write values to true).
-
- Create a .env file and set your
  -- REACT_APP_FIREBASE_API_KEY,
  -- REACT_APP_FIREBASE_AUTH_DOMAIN,
  -- REACT_APP_FIREBASE_DATABASE_URL
  -- REACT_APP_FIREBASE_PROJECT_ID,
  -- REACT_APP_FIREBASE_STORAGE_BUCKET,
  -- REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  -- REACT_APP_FIREBASE_APP_ID for firebase access

- After these you can run the project as usual =>

```
$ git clone https://github.com/esadakman/FireBlog-Milestone.git
$ cd ./FireBlog-Milestone
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project
