import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BlogContextProvider } from "./contexts/BlogContext";

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
      <BlogContextProvider>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
