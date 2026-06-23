import { useSelector, useDispatch } from "react-redux";
import { toggleStar, updateStatus, updatePriority } from "../redux/TicketSlice";

const TicketDetail = () => {
  const dispatch = useDispatch();

  const { allTickets, selectedTicketId } = useSelector(
    (state) => state.tickets,
  );

  const selectedTicket = allTickets.find((t) => t.id === selectedTicketId);

  if (!selectedTicket) {
    return <h3>Select a ticket to view details</h3>;
  }

  return (
    <div style={{ border: "2px solid blue", padding: "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{selectedTicket.issueTitle}</h2>

        <button
          onClick={() => dispatch(toggleStar(selectedTicket.id))}
          style={{
            fontSize: "18px",
            cursor: "pointer",
            border: "none",
            background: "transparent",
          }}
        >
          {selectedTicket.starred ? "⭐ Starred" : "☆ Star"}
        </button>
      </div>

      <p>
        <b>Customer:</b> {selectedTicket.customerName}
      </p>

      <p>
        <b>Description:</b> {selectedTicket.description}
      </p>

      <p>
        <b>Status:</b>{" "}
        <select
          value={selectedTicket.status}
          onChange={(e) =>
            dispatch(
              updateStatus({
                id: selectedTicket.id,
                status: e.target.value,
              }),
            )
          }
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </p>

      <p>
        <b>Priority:</b>{" "}
        <select
          value={selectedTicket.priority}
          onChange={(e) =>
            dispatch(
              updatePriority({
                id: selectedTicket.id,
                priority: e.target.value,
              }),
            )
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </p>

      <p>
        <b>Assigned To:</b> {selectedTicket.assignedTo}
      </p>
    </div>
  );
};

export default TicketDetail;
