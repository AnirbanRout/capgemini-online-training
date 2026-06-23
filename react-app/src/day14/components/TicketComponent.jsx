const TicketComponent = React.memo(({ tickets, handleTicketCount }) => {
  return (
    <>
      {tickets.map((t) => (
        <div
          key={t.id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <h4>Title: {t.title}</h4>
          <p>Description: {t.description}</p>
          {t.status === "resolved" && (
            <p>
              Date: {t.date} Time: {t.time}
            </p>
          )}
          <button
            onClick={() => handleTicketCount(t.id)}
            disabled={t.status === "resolved"}
          >
            Mark as Resolved
          </button>
        </div>
      ))}
    </>
  );
});

export default TicketComponent;
