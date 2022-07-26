import Header from "../components/Header/Header";
import Row from "../components/MainCom/ContentsLists/Row";
import "./Search.css";
import test from "../jsons/AllContents.json";
import ContentsLists from "../components/MainCom/ContentsLists/ContentsLists";
const Search = () => {
  return (
    <div>
      <Header isMain={true}></Header>
      <div className="search-back">
        <ContentsLists array={test} title={1} />
      </div>
      {/* test */}
    </div>
  );
};

export default Search;
