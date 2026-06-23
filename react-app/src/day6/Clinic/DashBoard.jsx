import AppointmentSection from "./AppointmentSection";

const DashBoard = ({ appointmentDetails }) => {
  return (
    <div>
      <AppointmentSection appointmentDetails={appointmentDetails} />
    </div>
  );
};

export default DashBoard;
