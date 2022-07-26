import "./Header.css";
import logo from "../../assets/Netflix_logo.png";
import HeaderNav from "./HeaderNav";
import HeaderNav2 from "./HeaderNav2";
import { useState, useEffect } from "react";

const Header = ({ isMain }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <header
      className={scrollPosition < 100 ? "header p-50" : "header-scroll p-50"}
    >
      <div className="first-navigation">
        <h1 id="logo">
          <a href="#">
            <img src={logo} alt="넷플릭스 로고" />
          </a>
        </h1>
        {isMain && <HeaderNav />}
      </div>
      {isMain && <HeaderNav2 />}
    </header>
  );
};
export default Header;
