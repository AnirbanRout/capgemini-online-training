import { useOutletContext } from "react-router-dom";

export default function LocationHistory() {
  const rescue = useOutletContext();
  const { history } = rescue;

  return (
    <div>
      <h2
        style={{
          fontWeight: "normal",
          fontSize: "1.2rem",
          color: "#a5d6a7",
          margin: "0 0 1.5rem",
        }}
      >
        Location History
      </h2>

      {/* Timeline */}
      <div style={{ display: "grid", gap: "0" }}>
        {history.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "1.25rem",
              padding: "1rem 0",
              borderBottom: "1px solid #1e3a1e",
            }}
          >
            {/* Timeline dot + line */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#4caf50",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              />
              {index !== history.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    flex: 1,
                    background: "#1e3a1e",
                    marginTop: "4px",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div style={{ paddingBottom: "0.5rem" }}>
              <p
                style={{
                  margin: "0 0 0.25rem",
                  fontSize: "0.8rem",
                  color: "#558b2f",
                  letterSpacing: "0.05em",
                }}
              >
                {entry.date}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  color: "#e8f5e9",
                  lineHeight: 1.5,
                }}
              >
                {entry.event}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
