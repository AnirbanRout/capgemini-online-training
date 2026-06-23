import { useSelector, useDispatch } from "react-redux";
import { selectTicket } from "../redux/TicketSlice";

const TicketList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.allTickets);

  return (
    <div>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          onClick={() => dispatch(selectTicket(ticket.id))}
          style={{
            border: "1px solid black",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          <p>{ticket.id}</p>
          <p>{ticket.customerName}</p>
          <p>{ticket.issueTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
