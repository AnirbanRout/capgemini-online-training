import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Hardcoded credentials for demo
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "wildlife123";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/control-room");
    } else {
      setError("Invalid username or password.");
    }
  }

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
      <div
        style={{
          background: "#1a2e1a",
          border: "1px solid #1e3a1e",
          borderRadius: "8px",
          padding: "2.5rem",
          width: "100%",
          maxWidth: "380px",
        }}
      >
        {/* Header */}
        <p
          style={{
            margin: "0 0 0.25rem",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#66bb6a",
            textTransform: "uppercase",
          }}
        >
          Coordinator Access
        </p>
        <h1
          style={{
            margin: "0 0 2rem",
            fontSize: "1.5rem",
            fontWeight: "normal",
            color: "#f1f8e9",
          }}
        >
          Sign In
        </h1>

        {/* Username */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.8rem",
              color: "#558b2f",
              marginBottom: "0.4rem",
              letterSpacing: "0.05em",
            }}
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={{
              width: "100%",
              padding: "0.7rem 1rem",
              background: "#0f1a0f",
              border: "1px solid #1e3a1e",
              borderRadius: "4px",
              color: "#e8f5e9",
              fontSize: "0.95rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.8rem",
              color: "#558b2f",
              marginBottom: "0.4rem",
              letterSpacing: "0.05em",
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{
              width: "100%",
              padding: "0.7rem 1rem",
              background: "#0f1a0f",
              border: "1px solid #1e3a1e",
              borderRadius: "4px",
              color: "#e8f5e9",
              fontSize: "0.95rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Error */}
        {error && (
          <p
            style={{
              margin: "0 0 1rem",
              fontSize: "0.85rem",
              color: "#ef5350",
            }}
          >
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.85rem",
            background: "#2e7d32",
            color: "#f1f8e9",
            border: "none",
            borderRadius: "4px",
            fontSize: "0.95rem",
            cursor: "pointer",
            letterSpacing: "0.05em",
          }}
        >
          Login →
        </button>

        {/* Back link */}
        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.85rem",
          }}
        >
          <Link to="/" style={{ color: "#558b2f", textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </p>

        {/* Hint */}
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.75rem",
            color: "#2e4a2e",
          }}
        >
          demo: admin / wildlife123
        </p>
      </div>
    </div>
  );
}
