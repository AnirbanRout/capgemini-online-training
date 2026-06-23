import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <ul>
        <li>
          <NavLink to="/dashboard/admin">admin</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/user">user</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
