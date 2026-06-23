import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// import Home from "./day10/Home";
// import Profile from "./day10/Profile";
// import Support from "./day10/Support";
import App from "./App";
import ProtectedClass from "./day12/Components/ProtectedClass";
import Login from "./day12/Components/Login";
import DashBoard from "./day12/Components/DashBoard";
import LocalDashBoard from "./day12/Components/LocalDashBoard";
import About from "./day13/pages/About";

// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/login", element: <Login /> },
//   { path: "/local-dashboard", element: <LocalDashBoard /> },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedClass>
//         <DashBoard />
//       </ProtectedClass>
//     ),
//   },
// ]);

createRoot(document.getElementById("root")).render(<App />);
