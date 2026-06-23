const AppointmentCard = ({ appointmentDetails }) => {
  return (
    <div className="appointment-card">
      <h1>AppointmentCard</h1>
      <h2>Patient Details:</h2>

      {appointmentDetails &&
        appointmentDetails.map((appointment, index) => (
          <div key={index} className="cards">
            <p>Patient Name: {appointment.patientName}</p>
            <p>Doctor Name: {appointment.doctorName}</p>
            <p>Department: {appointment.department}</p>
            <p>Appointment Date: {appointment.appointmentDate}</p>
            <p>Room Number: {appointment.roomNumber}</p>
          </div>
        ))}
    </div>
  );
};

export default AppointmentCard;
