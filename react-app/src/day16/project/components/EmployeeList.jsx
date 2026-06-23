import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, updateEmployeeStatus } from "../redux/EmployeeSlice";

import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeList = () => {
  const dispatch = useDispatch();

  const { allEmployees, statusFilter } = useSelector(
    (state) => state.employees,
  );

  const employees =
    statusFilter === "ALL"
      ? allEmployees
      : allEmployees.filter((emp) => emp.status === statusFilter);

  const handleToggleStatus = (name, status) => {
    dispatch(updateEmployeeStatus({ name, status }));
  };

  const handleFilter = (status) => {
    dispatch(setStatusFilter(status));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Employee List</h2>
      <div className="d-flex gap-2 mb-3 justify-content-center">
        <button className="btn btn-primary" onClick={() => handleFilter("ALL")}>
          All
        </button>

        <button
          className="btn btn-success"
          onClick={() => handleFilter("Going")}
        >
          Going
        </button>

        <button
          className="btn btn-danger"
          onClick={() => handleFilter("Not Going")}
        >
          Not Going
        </button>

        <button
          className="btn btn-warning"
          onClick={() => handleFilter("Pending")}
        >
          Pending
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.team}</td>
                <td>
                  <span
                    className={
                      emp.status === "Going"
                        ? "badge bg-success"
                        : emp.status === "Not Going"
                          ? "badge bg-danger"
                          : "badge bg-warning text-dark"
                    }
                  >
                    {emp.status}
                  </span>
                </td>

                <td className="d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleToggleStatus(emp.name, "Going")}
                  >
                    Going
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleToggleStatus(emp.name, "Not Going")}
                  >
                    Not Going
                  </button>

                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => handleToggleStatus(emp.name, "Pending")}
                  >
                    Pending
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
