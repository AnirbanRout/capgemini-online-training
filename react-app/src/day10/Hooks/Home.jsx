import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  const handleProfile = () => {
    nav("/profile", {
      state: { from: "Home Page" },
    });
  };

  const handleSupport = () => {
    nav("/support", {
      state: { from: "Home Page" },
    });
  };

  return (
    <div className="container">
      <h2>Student Help Desk:</h2>
      <div className="btn">
        <button onClick={handleProfile}>View Profile</button>
        <button onClick={handleSupport}>Go to Support</button>
      </div>
    </div>
  );
};

export default Home;
