import Header from "./sections/Header";
import FAQs from "./sections/FAQs";
import NavBar from "./sections/NavBar";
import GlobalStyle from "./style/reset";
import Benefits from "./sections/Benefits";
import AboutUs from "./sections/AboutUs";
import CourseRecommendations from "./sections/CourseRecommendations";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Header></Header>
      <Benefits></Benefits>
      <AboutUs></AboutUs>
      <CourseRecommendations></CourseRecommendations>

      <FAQs></FAQs>
      {/* hacer las faqs */}
    </>
  );
};

export default App;
