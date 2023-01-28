import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav-bar/main-nav/NavBar";
import Footer from "./components/footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/home-page/HomePage";
import SearchBar from "./components/search-section/SearchBar";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(36, 200, 36)",
      },
      secondary: {
        main: "#46b298",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <SearchBar />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
