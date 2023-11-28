import Blog from "./sections/Blog";
import FAQs from "./sections/FAQs";
import NavBar from "./sections/NavBar";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Blog></Blog>
      <h3>hola</h3>
      <FAQs></FAQs>
    </>
  );
};

export default App;
