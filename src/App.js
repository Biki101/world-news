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
import PopularPage from "./pages/Popular-page/PopularPage";
import CategoriesPage from "./pages/categories-page/CategoriesPage";
import { useEffect } from "react";
import { populateGlobalArticle } from "./redux/global-news-slice/global-news-slice";
import {
  populateMovieArticle,
  populateSportsArticle,
} from "./redux/home-news-slice/home-news-slice";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData1 = async () => {
        const res = await fetch(
          "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
        );
        const json = await res.json();
        dispatch(populateGlobalArticle(json.results));
      };

      const fetchData2 = setTimeout(async () => {
        const res = await fetch(
          "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
        );
        const json = await res.json();
        dispatch(populateSportsArticle(json.results));
      }, 6000);

      const fetchData3 = setTimeout(async () => {
        const res = await fetch(
          "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=d9XpTjsFp87bwBGJw7Qm9oUGikpKt1GZ"
        );
        const json = await res.json();
        dispatch(populateMovieArticle(json.results));
      }, 6000);
      fetchData1();
      fetchData2();
      fetchData3();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="global" element={<GlobalPage />} />
          <Route path="popular" element={<PopularPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
