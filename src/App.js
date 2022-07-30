import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material";
// import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    secondary: {
      main: "rgba(255, 255, 255, 0.1)",
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
