import AppointmentCard from "./AppointmentCard";

const AppointmentSection = ({ appointmentDetails }) => {
  return (
    <div>
      <AppointmentCard appointmentDetails={appointmentDetails} />
    </div>
  );
};

export default AppointmentSection;
