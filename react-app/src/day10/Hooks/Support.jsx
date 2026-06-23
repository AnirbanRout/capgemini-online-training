import { useLocation, useNavigate } from "react-router-dom";

const Support = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile", {
      state: { from: "Support Page" },
    });
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h2>Student Support</h2>
      <p>Message: You came from {location.state?.from}</p>
      <p>Time:{new Date().toLocaleTimeString()}</p>
      <div className="btn">
        <button onClick={navigateBack}>{"<-"} Go Back</button>
        <button onClick={handleProfile}>Go to Profile</button>
      </div>
    </div>
  );
};

export default Support;
