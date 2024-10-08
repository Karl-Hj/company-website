import { Link, useLoaderData } from "react-router-dom";
import { getEmployees } from "../api/employees";
import "./employees.css";

export function Employees() {
  const employees = useLoaderData();

  return (
    <>
      <div className="card-container">
        {employees.map((employee) => {
          return (
            <div className="card" key={employee.id}>
              <div className="card-header">
                {employee.name} <p>{employee.position}</p>
              </div>
              <div className="card-body">
                <div className="card-email">{employee.email}</div>
              </div>
              <div className="card-footer">
                <Link to={`/employees/${employee.id}`}>
                  Information / Comments
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function loader({ request: { signal } }) {
  return getEmployees({ signal });
}
