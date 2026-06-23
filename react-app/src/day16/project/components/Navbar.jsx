import { useDispatch } from "react-redux";
import { resetAllStatus } from "../redux/EmployeeSlice";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetAllStatus());
  };

  return (
    <div className="container mt-3 p-3 border rounded bg-light">
      <h3 className="mb-3 text-center">Event Details</h3>

      <div className="mb-2">
        <p>
          <strong>Event Name:</strong> Friday Team Launch
        </p>
        <p>
          <strong>Venue:</strong> Green Bowl Cafe
        </p>
        <p>
          <strong>Time:</strong> 1:00 PM
        </p>
        <p>
          <strong>Date:</strong> Friday
        </p>
      </div>

      <div className="text-center">
        <button className="btn btn-danger" onClick={handleReset}>
          Reset All
        </button>
      </div>
    </div>
  );
};

export default Navbar;
