import { Link, useLoaderData, useParams } from "react-router-dom";
import { getEmployee } from "../api/employees";
import "./employee.css";
import { getComments } from "../api/comments";

export function Employee() {
  const { employee, comments } = useLoaderData();
  const { employeeId } = useParams();

  return (
    <>
      <section className="employee-container">
        <main className="employee-main">
          <div className="employee-name">
            {employee.name} <p>{employee.position}</p>
          </div>
          <div className="employee-email">{employee.email}</div>
        </main>
      </section>
      <section className="comment-container">
        <h2>Comments</h2>
        <button className="button-add">
          <Link to={`/employees/${employeeId}/add`}>Add comment</Link>
        </button>
        {comments.map((comment) => {
          return (
            <main className="comment-main" key={comment.id}>
              <div className="comment-email">
                <Link
                  className="comment-email__link"
                  to={`/employees/${comment.userId}`}
                >
                  {comment.email}
                </Link>
                <button className="button-edit">
                  <Link to={`/employees/${comment.id}/edit`}>Edit</Link>
                </button>
              </div>
              <div className="comment-title">{comment.title}</div>
              <div className="comment-body">{comment.body}</div>
            </main>
          );
        })}
      </section>
    </>
  );
}

export async function loader({ request: { signal }, params }) {
  const employee = await getEmployee(params.employeeId, { signal });
  const comments = await getComments(params.employeeId, { signal });

  return { employee, comments };
}
