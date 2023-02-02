import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav-bar/main-nav/NavBar";
import Footer from "./components/footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/home-page/HomePage";
import SearchBar from "./components/search-section/SearchBar";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About-Page/AboutPage";
import ContactPage from "./pages/contact-page/Contact-page";
import GlobalPage from "./pages/global-page/GlobalPage";
// import { BreadCrumbProvider } from "./context/BreadCrumbcontext";

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
        {/* <BreadCrumbProvider> */}
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="global" element={<GlobalPage />} />
        </Routes>
        <Footer />
        {/* </BreadCrumbProvider> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
