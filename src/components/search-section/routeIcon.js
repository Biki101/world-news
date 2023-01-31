import InfoIcon from "@mui/icons-material/Info";
import GradeIcon from "@mui/icons-material/Grade";
import CategoryIcon from "@mui/icons-material/Category";
import PublicIcon from "@mui/icons-material/Public";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import BookIcon from "@mui/icons-material/Book";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
// import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
// import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export const routeIcon = {
  Home: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  About: <InfoIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  Popular: <GradeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  Category: <CategoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  Global: <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  Contact: <ContactSupportIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  Books: <BookIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  Movies: <MovieFilterIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  Sports: <SportsSoccerIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
};

export const returnRouteIcon = (prop) => {
  return routeIcon[prop];
};
