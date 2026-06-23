import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

export default function RescueList() {
  const [rescueCases, setRescueCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/rescueCases")
      .then((res) => res.json())
      .then((data) => {
        setRescueCases(data);
        setLoading(false);
      });
  }, []);

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
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            color: "#81c784",
            textDecoration: "none",
          }}
        >
          🌿 WildRescue
        </Link>
        <Link
          to="/login"
          style={{
            color: "#a5d6a7",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          Coordinator Login
        </Link>
      </nav>

      {/* Header */}
      <div
        style={{
          maxWidth: "900px",
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
          All Cases
        </p>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "normal",
            margin: "0 0 0.5rem",
            color: "#f1f8e9",
          }}
        >
          Rescue Cases
        </h1>
        <p style={{ color: "#a5d6a7", margin: 0, fontSize: "0.95rem" }}>
          {loading ? "Loading..." : `${rescueCases.length} cases on record`}
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1rem 2rem 4rem",
          display: "grid",
          gap: "1rem",
        }}
      >
        {loading ? (
          <p style={{ color: "#558b2f" }}>Fetching rescue cases...</p>
        ) : (
          rescueCases.map((rescue) => (
            <Link
              key={rescue.id}
              to={`/rescues/${rescue.id}/overview`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#1a2e1a",
                  border: "1px solid #1e3a1e",
                  borderRadius: "8px",
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#4caf50")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#1e3a1e")
                }
              >
                <div>
                  <p
                    style={{
                      margin: "0 0 0.25rem",
                      fontSize: "1.1rem",
                      color: "#f1f8e9",
                      fontWeight: "bold",
                    }}
                  >
                    {rescue.name}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "#a5d6a7",
                        fontSize: "0.9rem",
                        marginLeft: "0.5rem",
                      }}
                    >
                      — {rescue.animal}
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0 0 0.5rem",
                      fontSize: "0.85rem",
                      color: "#66bb6a",
                    }}
                  >
                    📍 {rescue.location.area}, {rescue.location.state}
                  </p>
                  <p
                    style={{ margin: 0, fontSize: "0.8rem", color: "#558b2f" }}
                  >
                    Rescued by {rescue.rescuedBy} · {rescue.rescueDate}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.5rem",
                  }}
                >
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
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: statusColor[rescue.status] || "#e8f5e9",
                    }}
                  >
                    ● {rescue.status}
                  </span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
