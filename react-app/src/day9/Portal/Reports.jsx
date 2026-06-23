import { useState, useEffect, useMemo } from "react";

const severityColor = {
  Low: "#66bb6a",
  Medium: "#ffa726",
  High: "#ef5350",
  "Very High": "#ce93d8",
};

export default function Reports() {
  const [rescueCases, setRescueCases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/rescueCases")
      .then((res) => res.json())
      .then((data) => setRescueCases(data))
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  // Recalculate metrics only when rescueCases changes
  const metrics = useMemo(() => {
    const totalCases = rescueCases.length;
    const activeCases = rescueCases.filter(
      (r) => r.status !== "Released" && r.status !== "Recovered",
    ).length;
    const resolvedCases = rescueCases.filter(
      (r) => r.status === "Released" || r.status === "Recovered",
    ).length;
    const criticalCases = rescueCases.filter(
      (r) => r.status === "Critical",
    ).length;

    const byState = rescueCases.reduce((acc, r) => {
      const state = r.location.state;
      acc[state] = (acc[state] || 0) + 1;
      return acc;
    }, {});

    const bySeverity = rescueCases.reduce((acc, r) => {
      acc[r.severity] = (acc[r.severity] || 0) + 1;
      return acc;
    }, {});

    return {
      totalCases,
      activeCases,
      resolvedCases,
      criticalCases,
      byState,
      bySeverity,
    };
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
        Reports
      </h1>
      <p style={{ fontSize: "0.9rem", color: "#558b2f", margin: "0 0 2rem" }}>
        Summary of all rescue operations
      </p>

      {/* Stat cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {[
          { label: "Total Cases", value: metrics.totalCases, color: "#a5d6a7" },
          { label: "Active", value: metrics.activeCases, color: "#ffa726" },
          { label: "Resolved", value: metrics.resolvedCases, color: "#66bb6a" },
          { label: "Critical", value: metrics.criticalCases, color: "#ef5350" },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            style={{
              background: "#1a2e1a",
              border: "1px solid #1e3a1e",
              borderRadius: "8px",
              padding: "1.25rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: "0 0 0.5rem",
                fontSize: "2rem",
                fontWeight: "bold",
                color,
              }}
            >
              {value}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.75rem",
                color: "#558b2f",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* By state + by severity side by side */}
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        {/* Cases by state */}
        <div
          style={{
            background: "#1a2e1a",
            border: "1px solid #1e3a1e",
            borderRadius: "8px",
            padding: "1.25rem 1.5rem",
          }}
        >
          <h2
            style={{
              margin: "0 0 1rem",
              fontSize: "0.9rem",
              color: "#a5d6a7",
              fontWeight: "normal",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Cases by State
          </h2>
          <div style={{ display: "grid", gap: "0" }}>
            {Object.entries(metrics.byState).map(([state, count], index) => (
              <div
                key={state}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.65rem 0",
                  borderTop: index === 0 ? "none" : "1px solid #1e3a1e",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ color: "#a5d6a7" }}>{state}</span>
                <span style={{ color: "#f1f8e9", fontWeight: "bold" }}>
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cases by severity */}
        <div
          style={{
            background: "#1a2e1a",
            border: "1px solid #1e3a1e",
            borderRadius: "8px",
            padding: "1.25rem 1.5rem",
          }}
        >
          <h2
            style={{
              margin: "0 0 1rem",
              fontSize: "0.9rem",
              color: "#a5d6a7",
              fontWeight: "normal",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Cases by Severity
          </h2>
          <div style={{ display: "grid", gap: "0" }}>
            {Object.entries(metrics.bySeverity).map(
              ([severity, count], index) => (
                <div
                  key={severity}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.65rem 0",
                    borderTop: index === 0 ? "none" : "1px solid #1e3a1e",
                    fontSize: "0.9rem",
                  }}
                >
                  <span style={{ color: severityColor[severity] || "#e8f5e9" }}>
                    ● {severity}
                  </span>
                  <span style={{ color: "#f1f8e9", fontWeight: "bold" }}>
                    {count}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
