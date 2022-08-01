import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  palette: {
    secondary: {
      main: "rgba(255, 255, 255, 0.1)",
    },
  },
});

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        {/* <div className="App"> */}
        <ToastContainer />
        <Toaster />
        <AppRouter />
        {/* </div> */}
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
