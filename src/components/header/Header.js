import "./header.css";
import logo from "../../assets/Netflix_logo.png";
import HeaderNav from "./HeaderNav";
import HeaderNav2 from "./HeaderNav2";

const Header = ({ isMain }) => {
  return (
    <header className="p-50">
      <div className="first-navigation">
        <h1 id="logo">
          <a href="#">
            <img src={logo} alt="넷플릭스 로고" />
          </a>
        </h1>
        {/* and 연산자 */}
        {isMain && <HeaderNav />}
      </div>
      {isMain && <HeaderNav2 />}
    </header>
  );
};
export default Header;
