import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function ControlRoomLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  const navItems = [
    { label: "Active Missions", path: "active-missions" },
    { label: "Team Status", path: "team-status" },
    { label: "Reports", path: "reports" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f1a0f",
        color: "#e8f5e9",
        fontFamily: "Georgia, serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid #1e3a1e",
        }}
      >
        <NavLink
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            color: "#81c784",
            textDecoration: "none",
          }}
        >
          🌿 WildRescue
        </NavLink>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span
            style={{
              fontSize: "0.8rem",
              color: "#558b2f",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Control Room
          </span>
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              border: "1px solid #2e4a2e",
              color: "#a5d6a7",
              padding: "0.4rem 1rem",
              borderRadius: "4px",
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Body: sidebar + content */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <aside
          style={{
            width: "220px",
            borderRight: "1px solid #1e3a1e",
            padding: "2rem 0",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#2e4a2e",
              textTransform: "uppercase",
              padding: "0 1.5rem",
              marginBottom: "0.75rem",
            }}
          >
            Navigation
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  padding: "0.75rem 1.5rem",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  color: isActive ? "#81c784" : "#558b2f",
                  background: isActive ? "#1a2e1a" : "transparent",
                  borderLeft: isActive
                    ? "2px solid #81c784"
                    : "2px solid transparent",
                  transition: "all 0.2s",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </aside>

        {/* Main content: child route renders here */}
        <main style={{ flex: 1, padding: "2.5rem 2rem", overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
