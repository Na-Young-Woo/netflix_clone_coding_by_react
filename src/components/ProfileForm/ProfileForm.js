import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import "./ProfileForm.css";
const ProfileForm = () => {
  return (
    <div className="profiles-wrapper">
      <h1>프로필 관리</h1>
      <div className="choose-profile">
        <ul>
          <Link to="/">
            <li>
              <Avatar name="Kai"></Avatar>
            </li>
          </Link>
          <Link to="/">
            <li>
              <Avatar name="로열"></Avatar>
            </li>
          </Link>
          <Link to="/">
            <li>
              <Avatar name="HJW"></Avatar>
            </li>
          </Link>
          <Link to="/">
            <li>
              <Avatar name="VellKa"></Avatar>
            </li>
          </Link>
          <Link to="/">
            <li>
              <Avatar name="프로필 추가" isAvatarAdd={true}></Avatar>
            </li>
          </Link>
        </ul>
      </div>
      <button>완료</button>
    </div>
  );
};

export default ProfileForm;
