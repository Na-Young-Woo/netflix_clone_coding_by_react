import { Link, Navigate } from "react-router-dom";
import "./HeaderNav2.css";
import { useEffect, useState, useRef } from "react";
import AllContents from "../../jsons/AllContents.json";
import Search from "../../pages/Search";
import styled from "styled-components";

import SearchState from "../../states/SearchState";
import { useRecoilState } from "recoil";

const HeaderNav2 = () => {
  const [search, setSearch] = useState("");

  const [click, setClick] = useState(false);

  const [searchText, setSearchText] = useRecoilState(SearchState);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    AllContents.filter((val) => {
      if (search != "") {
        let index = val.alt.indexOf(search);
        let isFind = index !== -1;
        if (isFind) {
          // 이 값을 atom에 담아!

          // console.log("searchText");
          // console.log(searchText);
          // SearchState(val.alt);
          // useRecoilState(val.alt);

          // alert(val.alt);
          setSearchText(val.alt);
          // alert(searchText);
          // setSearchText(searchText);
          console.log(SearchState);
          console.log(val.alt);
        }
      }
    });
  }, [searchText]);

  const showSearchBox = () => {
    setClick(!click);
  };

  return (
    <div>
      {/* <Search /> */}
      <div className="secondary-navigation">
        <div className="nav-item">
          <div className={click ? "search-input-box" : null}>
            <InputStyled
              active={click}
              type="text"
              // style={{ border: "1px solid red", color: "#fff" }}
              value={search}
              onChange={handleInputChange}
              placeholder="제목, 사람, 장르"
            />
            <SearchIcon
              active={click}
              type="button"
              className="search-icon-btn"
              onClick={showSearchBox}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="search-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                  fill="currentColor"
                ></path>
              </svg>
            </SearchIcon>
          </div>
        </div>
        <div className="nav-item notifications">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="account-menu-item">
          <a href="#">
            <img
              className="profile-icon"
              src="https://occ-0-2794-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQA2g0uhhht-Gj_rICyIbMyxTMPHMBwMSweHuxoMZdn0e-3umoqxxjtuXNbwr-bKr_OdSQxLDyvJ8TIt39IrFcP2kRUxpWY.png?r=b21"
              alt=""
            />
            <div className="caret-wrapper">
              <span className="caret"></span>
            </div>
          </a>
          <div className="dropdown-click-area"></div>
          <div className="account-dropdown-wrapper">
            <ul>
              <a href="#">
                <li>
                  <div className="other_profile profile-icon"></div>
                  <span>Kai</span>
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="other_profile profile-icon"></div>
                  로열
                </li>
              </a>
              <a href="#">
                <li>
                  <div className="other_profile profile-icon"></div>
                  HJW
                </li>
              </a>
              <Link to="/profile/manage">
                <div className="profile-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <li>프로필 관리</li>
              </Link>
              <a href="#">
                <div className="profile-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>

                <li>계정</li>
              </a>
              <a href="#">
                <div className="profile-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <li>고객센터</li>
              </a>
              <Link to="/login">
                <li>넷플릭스에서 로그아웃</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputStyled = styled.input`
  display: ${(props) => (props.active ? "block" : "none")};
  padding-left: 45px;
`;

const SearchIcon = styled.button`
  transform: ${(props) =>
    props.active ? "translateX(-230px)" : "translateX(0)"};
`;
export default HeaderNav2;
