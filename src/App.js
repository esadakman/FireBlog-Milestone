import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material";
// import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./contexts/AuthContext";

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
        <AppRouter />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
