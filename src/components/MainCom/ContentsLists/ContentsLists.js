import "./contentsLists.css";
import Row from "./Row";
import RowTitle from "../../../jsons/ContentTitleData.json";
import ContentData1 from "../../../jsons/ContnetImageData.json";
import ContentData2 from "../../../jsons/ContnetImageData2.json";
import ContentData3 from "../../../jsons/ContnetImageData3.json";
import ContentData4 from "../../../jsons/ContnetImageData4.json";
import ContentData5 from "../../../jsons/ContnetImageData5.json";
import ContentData6 from "../../../jsons/ContnetImageData6.json";
import ContentRankData1 from "../../../jsons/ContentRankData1.json";
import RowRank from "./RowRank";
const ContentsLists = () => {
  return (
    <div>
      <section className="contents-lists p-50">
        <Row array={ContentData1} title={RowTitle[0].title} />
        <Row array={ContentData2} title={RowTitle[1].title} />
        <Row array={ContentData3} title={RowTitle[2].title} />
        <RowRank array={ContentRankData1} title={RowTitle[4].title} />
        <Row array={ContentData4} title={RowTitle[5].title} />
        <Row array={ContentData5} title={RowTitle[8].title} />
        <Row array={ContentData6} title={RowTitle[10].title} />
      </section>
    </div>
  );
};
export default ContentsLists;
