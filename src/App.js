import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BlogContextProvider } from "./contexts/BlogContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const theme = createTheme({
  palette: {
    info: {
      main: "#050f24",
    },
  },
});

function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
