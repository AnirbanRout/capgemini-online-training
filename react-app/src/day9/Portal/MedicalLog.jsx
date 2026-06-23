import { useOutletContext } from "react-router-dom";

export default function MedicalLog() {
  const rescue = useOutletContext();
  const { medical } = rescue;

  const fields = [
    { label: "Condition", value: medical.condition },
    { label: "Treatment", value: medical.treatment },
    { label: "Veterinarian", value: medical.vet },
    { label: "Last Updated", value: medical.lastUpdated },
  ];

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
        Medical Log
      </h2>

      <div style={{ display: "grid", gap: "0" }}>
        {fields.map(({ label, value }) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.85rem 0",
              borderBottom: "1px solid #1e3a1e",
              fontSize: "0.95rem",
            }}
          >
            <span style={{ color: "#558b2f" }}>{label}</span>
            <span style={{ color: "#e8f5e9" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
