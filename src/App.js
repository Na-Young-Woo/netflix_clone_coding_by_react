import Header from "./components/Header.js";
import TitleAndInfo from "./components/TitleAndInfo";
import BackgroundPlay from "./components/BackgroundPlay";
import Footer from "./components/Footer";
import ContentsLists from "./components/ContentsLists";

function App() {
  return (
    <div id="wrapper">
      <section>
        <Header></Header>
        <TitleAndInfo></TitleAndInfo>
        <BackgroundPlay></BackgroundPlay>
      </section>
      <div className="contents-lists-and-footer">
        <ContentsLists></ContentsLists>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
