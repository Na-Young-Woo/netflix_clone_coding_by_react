import "../css/reset.css";
import "../css/style.css";
import "../css/profiles.css";
import Header from "./header/Header";

const Profile = () => {
  return (
    <div>
      <Header></Header>
      <div className="profiles-wrapper">
        <h1>프로필 관리</h1>
        <div className="choose-profile">
          <ul>
            <a href="#">
              <li>
                <div className="avatar-wrapper">
                  <div className="avatar"></div>
                  <div>Kai</div>
                </div>
              </li>
            </a>
            <a href="#">
              <li>
                <div className="avatar-wrapper">
                  <div className="avatar"></div>
                  <div>로열</div>
                </div>
              </li>
            </a>
            <a href="#">
              <li>
                <div className="avatar-wrapper">
                  <div className="avatar"></div>
                  <div>HJW</div>
                </div>
              </li>
            </a>
            <a href="/index.html">
              <li>
                <div className="avatar-wrapper">
                  <div className="avatar"></div>
                  <div>VellKa</div>
                </div>
              </li>
            </a>

            <a href="#">
              <li>
                <div className="avatar-wrapper">
                  <div className="avatar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="75"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#e5e5e5"
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"
                      />
                    </svg>
                  </div>
                  <div>프로필 추가</div>
                </div>
              </li>
            </a>
          </ul>
        </div>
        <button>완료</button>
      </div>
    </div>
  );
};

export default Profile;
