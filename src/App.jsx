import Header from "./sections/Header";
import FAQs from "./sections/FAQs";
import NavBar from "./sections/NavBar";
import GlobalStyle from "./style/reset";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar></NavBar>
      <Header></Header>
      <h3>hola</h3>
      <FAQs></FAQs>
    </>
  );
};

export default App;
