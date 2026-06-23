import { useOutletContext } from "react-router-dom";

export default function Overview() {
  const rescue = useOutletContext();

  const fields = [
    { label: "Animal", value: rescue.animal },
    { label: "Name", value: rescue.name },
    { label: "Status", value: rescue.status },
    { label: "Severity", value: rescue.severity },
    {
      label: "Location",
      value: `${rescue.location.area}, ${rescue.location.state}`,
    },
    { label: "Rescued By", value: rescue.rescuedBy },
    { label: "Rescue Date", value: rescue.rescueDate },
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
        Case Overview
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
