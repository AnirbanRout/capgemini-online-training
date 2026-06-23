import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Note: Removed the static import
// import rescueCases from "./data/rescueCases";

const severityColor = {
  Low: { background: "#1b5e20", color: "#a5d6a7" },
  Medium: { background: "#e65100", color: "#ffe0b2" },
  High: { background: "#b71c1c", color: "#ffcdd2" },
  "Very High": { background: "#4a148c", color: "#e1bee7" },
};

const statusColor = {
  "Under Treatment": "#ffa726",
  Released: "#66bb6a",
  Observation: "#29b6f6",
  Recovered: "#26a69a",
  Critical: "#ef5350",
};

export default function ActiveMissions() {
  const [rescueCases, setRescueCases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rescueCases")
      .then((res) => res.json())
      .then((data) => setRescueCases(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Filter only active cases (not released or recovered)
  const activeCases = rescueCases.filter(
    (r) => r.status !== "Released" && r.status !== "Recovered",
  );

  return (
    <div>
      {/* Header */}
      <p
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          color: "#66bb6a",
          textTransform: "uppercase",
          margin: "0 0 0.5rem",
        }}
      >
        Control Room
      </p>
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: "normal",
          color: "#f1f8e9",
          margin: "0 0 0.5rem",
        }}
      >
        Active Missions
      </h1>
      <p style={{ fontSize: "0.9rem", color: "#558b2f", margin: "0 0 2rem" }}>
        {activeCases.length} ongoing missions
      </p>

      {/* Table */}
      <div
        style={{
          border: "1px solid #1e3a1e",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.5fr 1fr 1fr",
            padding: "0.75rem 1.25rem",
            background: "#1a2e1a",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "#558b2f",
            textTransform: "uppercase",
          }}
        >
          <span>Animal</span>
          <span>Name</span>
          <span>Location</span>
          <span>Severity</span>
          <span>Status</span>
        </div>

        {activeCases.map((rescue, index) => (
          <Link
            key={rescue.id}
            to={`/rescues/${rescue.id}/overview`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1.5fr 1fr 1fr",
                padding: "1rem 1.25rem",
                borderTop: index === 0 ? "none" : "1px solid #1e3a1e",
                fontSize: "0.9rem",
                alignItems: "center",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1a2e1a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span style={{ color: "#a5d6a7" }}>{rescue.animal}</span>
              <span style={{ color: "#e8f5e9" }}>{rescue.name}</span>
              <span style={{ color: "#66bb6a", fontSize: "0.85rem" }}>
                {rescue.location.area}
              </span>
              <span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    ...severityColor[rescue.severity],
                  }}
                >
                  {rescue.severity}
                </span>
              </span>
              <span
                style={{
                  color: statusColor[rescue.status] || "#e8f5e9",
                  fontSize: "0.85rem",
                }}
              >
                ● {rescue.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
