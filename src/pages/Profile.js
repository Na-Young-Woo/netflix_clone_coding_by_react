import "./Profile.css";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import ProfileForm from "../components/ProfileForm/ProfileForm";
const Profile = () => {
  return (
    <div>
      <Header />
      <ProfileForm />
    </div>
  );
};

export default Profile;
