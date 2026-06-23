import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Stats = () => {
  const employees = useSelector((state) => state.employees.allEmployees);

  const totalEmployees = employees.length;

  const goingCount = employees.filter((emp) => emp.status === "Going").length;

  const notGoingCount = employees.filter(
    (emp) => emp.status === "Not Going",
  ).length;

  const pendingCount = employees.filter(
    (emp) => emp.status === "Pending",
  ).length;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee Stats</h2>

      <div className="row text-center">
        <div className="col-md-3">
          <div className="card text-bg-primary mb-3">
            <div className="card-body">
              <h5>Total</h5>
              <h3>{totalEmployees}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-bg-success mb-3">
            <div className="card-body">
              <h5>Going</h5>
              <h3>{goingCount}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-bg-danger mb-3">
            <div className="card-body">
              <h5>Not Going</h5>
              <h3>{notGoingCount}</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-bg-warning mb-3">
            <div className="card-body">
              <h5>Pending</h5>
              <h3>{pendingCount}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
