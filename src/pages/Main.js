import "./Main.css";
import Header from "../components/Header/Header";
import TitleAndInfo from "../components/MainCom/TitleAndInfo/TitleAndInfo";
import BackgroundPlay from "../components/MainCom/BackgroundPlay/BackgroundPlay";
import ContentsLists from "../components/MainCom/ContentsLists/ContentsLists";
import Footer from "../components/Footer/Footer";
import TitleAndInfoData from "../jsons/TitleAndInfoData.json";

const Main = () => {
  console.log(TitleAndInfoData);
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
