import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import "./profilePage.css";
import { auth } from "../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePage_body">
        <h2>Edit Profile</h2>
        <div className="profilePage_details">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
            alt=""
          />
          <div className="profilePage_info">
            <h2>{user.email}</h2>
            <div className="profilePage_plans">
              <h3>Plans</h3>
              <button
                className="profilePage_signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
