import { Link } from "react-router-dom";

export default function Home() {
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
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            color: "#81c784",
          }}
        >
          🌿 WildRescue
        </span>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
          <Link
            to="/rescues"
            style={{ color: "#a5d6a7", textDecoration: "none" }}
          >
            Rescue Cases
          </Link>
          <Link
            to="/login"
            style={{ color: "#a5d6a7", textDecoration: "none" }}
          >
            Coordinator Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            color: "#66bb6a",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Wildlife Rescue Coordination Portal
        </p>
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: 1.2,
            fontWeight: "normal",
            marginBottom: "1.5rem",
            color: "#f1f8e9",
          }}
        >
          Every animal deserves a second chance
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#a5d6a7",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Track active rescue missions, monitor medical progress, and coordinate
          field teams across Karnataka and Tamil Nadu.
        </p>
        <Link
          to="/rescues"
          style={{
            display: "inline-block",
            background: "#2e7d32",
            color: "#f1f8e9",
            padding: "0.85rem 2.5rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
          }}
        >
          View Active Cases →
        </Link>
      </div>

      {/* Stats strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          padding: "3rem 2rem",
          borderTop: "1px solid #1e3a1e",
        }}
      >
        {[
          { number: "5", label: "Active Cases" },
          { number: "4", label: "States Covered" },
          { number: "3", label: "Field Teams" },
        ].map(({ number, label }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#81c784",
                margin: 0,
              }}
            >
              {number}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#66bb6a",
                margin: "0.25rem 0 0",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
