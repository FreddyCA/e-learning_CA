import AboutUs from "../sections/AboutUs";
import Benefits from "../sections/Benefits";
import CourseRecommendations from "../sections/CourseRecommendations";
import FAQs from "../sections/FAQs";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import NavBar from "../sections/NavBar";
import Testimonies from "../sections/Testimonies";
import Contacto from "../sections/Contacto";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Benefits></Benefits>
      <AboutUs></AboutUs>
      <CourseRecommendations></CourseRecommendations>
      <Testimonies></Testimonies>
      <FAQs></FAQs>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  );
};

export default Home;
