import { Form, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./form.css";
import { FormGroup } from "./FormGroup";

export function PostForm({
  employees,
  employeeId,
  defaultValues = {},
  errors = {},
}) {
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
          <FormGroup className="form-group" errorMessage={errors.title}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={defaultValues.title}
            />
          </FormGroup>
          <FormGroup className="form-group" errorMessage={errors.body}>
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" defaultValue={defaultValues.body} />
          </FormGroup>
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  employeeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValues: PropTypes.shape({
    employeeId: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  errors: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export function postFormValidator({ title, body }) {
  const errors = {};

  if (title === "") {
    errors.title = "Required";
  }
  if (body === "") {
    errors.body = "Required";
  }

  return errors;
}
