import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>MyApp</h1>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
