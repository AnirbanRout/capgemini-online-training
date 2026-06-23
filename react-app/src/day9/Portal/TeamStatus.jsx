import { useState, useEffect, useMemo } from "react";

const statusColor = {
  "Under Treatment": "#ffa726",
  Released: "#66bb6a",
  Observation: "#29b6f6",
  Recovered: "#26a69a",
  Critical: "#ef5350",
};

export default function TeamStatus() {
  const [rescueCases, setRescueCases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rescueCases")
      .then((res) => res.json())
      .then((data) => setRescueCases(data))
      .catch((err) => console.error("Error fetching team data:", err));
  }, []);

  // Use useMemo to recalculate team data only when rescueCases changes
  const teams = useMemo(() => {
    const teamsMap = {};

    rescueCases.forEach((rescue) => {
      const team = rescue.rescuedBy;
      if (!teamsMap[team]) {
        teamsMap[team] = {
          name: team,
          cases: [],
          active: 0,
          resolved: 0,
        };
      }
      teamsMap[team].cases.push(rescue);
      if (rescue.status === "Released" || rescue.status === "Recovered") {
        teamsMap[team].resolved += 1;
      } else {
        teamsMap[team].active += 1;
      }
    });

    return Object.values(teamsMap);
  }, [rescueCases]);

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
        Team Status
      </h1>
      <p style={{ fontSize: "0.9rem", color: "#558b2f", margin: "0 0 2rem" }}>
        {teams.length} teams in the field
      </p>

      {/* Team cards */}
      <div style={{ display: "grid", gap: "1rem" }}>
        {teams.map((team) => (
          <div
            key={team.name}
            style={{
              background: "#1a2e1a",
              border: "1px solid #1e3a1e",
              borderRadius: "8px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#f1f8e9",
                }}
              >
                {team.name}
              </h2>
              <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem" }}>
                <span style={{ color: "#ffa726" }}>{team.active} active</span>
                <span style={{ color: "#66bb6a" }}>
                  {team.resolved} resolved
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gap: "0" }}>
              {team.cases.map((rescue) => (
                <div
                  key={rescue.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.6rem 0",
                    borderTop: "1px solid #1e3a1e",
                    fontSize: "0.875rem",
                  }}
                >
                  <span style={{ color: "#a5d6a7" }}>
                    {rescue.name}
                    <span
                      style={{
                        color: "#558b2f",
                        marginLeft: "0.5rem",
                        fontSize: "0.8rem",
                      }}
                    >
                      — {rescue.animal}
                    </span>
                  </span>
                  <span
                    style={{
                      color: statusColor[rescue.status] || "#e8f5e9",
                      fontSize: "0.8rem",
                    }}
                  >
                    ● {rescue.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
