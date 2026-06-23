import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSupport = () => {
    navigate("/support", {
      state: { from: "Profile Page" },
    });
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h2>Student Profile</h2>
      <p>Message: You came from {location.state?.from}</p>
      <p>Time:{new Date().toLocaleTimeString()}</p>
      <div className="btn">
        <button onClick={navigateBack}>{"<-"} Go Back</button>
        <button onClick={handleSupport}>Go to Support</button>
      </div>
    </div>
  );
};

export default Profile;
