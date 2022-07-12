import "../css/reset.css";
import "./main.css";
import Header from "./header/Header";
import TitleAndInfo from "./TitleAndInfo";
import BackgroundPlay from "./BackgroundPlay/BackgroundPlay";
import Footer from "./Footer";
import ContentsLists from "./ContentsLists/ContentsLists";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <TitleAndInfo></TitleAndInfo>
      <BackgroundPlay></BackgroundPlay>
      <ContentsLists></ContentsLists>
      <Footer></Footer>
    </div>
  );
};
export default Main;
