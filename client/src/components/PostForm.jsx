import { Form, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./form.css";

export function PostForm({ employees, employeeId, defaultValues = {} }) {
  return (
    <>
      <Form method="post" className="form">
        <Link
          className="form-cancel"
          to={
            employeeId
              ? `/employees/${employeeId}`
              : `/employees/${defaultValues.employeeId}`
          }
        >
          Cancel
        </Link>
        <div className="form-row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={defaultValues.title}
          />
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" defaultValue={defaultValues.body} />
          <label htmlFor="userId">Author</label>
          <select name="userId" id="userId" defaultValue={defaultValues.userId}>
            {employees.map((employee) => {
              return (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              );
            })}
          </select>
        </div>
        <input type="hidden" name="employeeId" value={employeeId} />
        <button className="submit-button">Submit</button>
      </Form>
    </>
  );
}
PostForm.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
};
PostForm.propTypes = {
  employeeId: PropTypes.string,
};

PostForm.propTypes = {
  defaultValues: PropTypes.shape({
    employeeId: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};
