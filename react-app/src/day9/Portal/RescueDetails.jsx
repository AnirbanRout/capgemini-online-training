import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams, Navigate } from "react-router-dom";

export default function RescueDetails() {
  const { id } = useParams();
  const [rescue, setRescue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/rescueCases/${id}`)
      .then((res) => {
        if (!res.ok) {
          setNotFound(true);
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setRescue(data);
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f1a0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <p style={{ color: "#558b2f" }}>Loading case details...</p>
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/rescues" replace />;
  }

  const tabs = [
    { label: "Overview", path: "overview" },
    { label: "Medical", path: "medical" },
    { label: "Location History", path: "location-history" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f1a0f",
        color: "#e8f5e9",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Nav */}
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
        <NavLink
          to="/rescues"
          style={{
            color: "#a5d6a7",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          ← Back to Cases
        </NavLink>
      </nav>

      {/* Case header */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "3rem 2rem 1.5rem",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#66bb6a",
            textTransform: "uppercase",
            margin: "0 0 0.5rem",
          }}
        >
          Case #{rescue.id}
        </p>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "normal",
            margin: "0 0 0.25rem",
            color: "#f1f8e9",
          }}
        >
          {rescue.name}
          <span
            style={{
              color: "#a5d6a7",
              fontSize: "1.2rem",
              marginLeft: "0.75rem",
            }}
          >
            — {rescue.animal}
          </span>
        </h1>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#66bb6a" }}>
          📍 {rescue.location.area}, {rescue.location.state} &nbsp;·&nbsp;
          Rescued by {rescue.rescuedBy}
        </p>
      </div>

      {/* Tabs */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            gap: "0",
            borderBottom: "1px solid #1e3a1e",
          }}
        >
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              style={({ isActive }) => ({
                padding: "0.75rem 1.5rem",
                textDecoration: "none",
                fontSize: "0.9rem",
                color: isActive ? "#81c784" : "#558b2f",
                borderBottom: isActive
                  ? "2px solid #81c784"
                  : "2px solid transparent",
                transition: "color 0.2s",
              })}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Child route renders here */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem" }}>
        <Outlet context={rescue} />
      </div>
    </div>
  );
}
