import { useSelector } from "react-redux";

const TicketStats = () => {
  const tickets = useSelector((state) => state.tickets.allTickets);

  const total = tickets.length;
  const open = tickets.filter((t) => t.status === "Open").length;
  const inProgress = tickets.filter((t) => t.status === "In Progress").length;
  const resolved = tickets.filter((t) => t.status === "Resolved").length;

  const boxStyle = {
    flex: 1,
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#1e1e2f",
        padding: "10px",
      }}
    >
      <div style={{ ...boxStyle, background: "#4a90e2" }}>
        Total <br /> {total}
      </div>

      <div style={{ ...boxStyle, background: "#f39c12" }}>
        Open <br /> {open}
      </div>

      <div style={{ ...boxStyle, background: "#9b59b6" }}>
        In Progress <br /> {inProgress}
      </div>

      <div style={{ ...boxStyle, background: "#2ecc71" }}>
        Resolved <br /> {resolved}
      </div>
    </div>
  );
};

export default TicketStats;
