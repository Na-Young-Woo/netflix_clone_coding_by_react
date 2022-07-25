import AvatarAdd from "./AvatarAdd";
import "./Avatar.css";
const Avatar = ({ name, isAvatarAdd }) => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">{isAvatarAdd && <AvatarAdd />}</div>
      <div>{name}</div>
    </div>
  );
};

export default Avatar;
