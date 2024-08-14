import {
  redirect,
  useActionData,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { getEmployees } from "../api/employees";
import { PostForm, postFormValidator } from "../components/PostForm";

export function AddComment() {
  const employees = useLoaderData();
  const { employeeId } = useParams();
  const errors = useActionData();

  return (
    <>
      <PostForm employees={employees} employeeId={employeeId} errors={errors} />
    </>
  );
}

export function loader({ request: { signal } }) {
  return getEmployees({ signal });
}

export async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");
  const employeeId = formData.get("employeeId");

  const errors = postFormValidator({ title, body });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const employees = await getEmployees();
  const employee = employees.find((emp) => emp.id === userId);
  const email = employee ? employee.email : "";

  const id = crypto.randomUUID();

  const newComment = await fetch("http://localhost:3000/comments", {
    method: "POST",
    signal: request.signal,
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      id,
      title,
      body,
      userId: Number(userId),
      email,
      employeeId: Number(employeeId),
    }),
  }).then((res) => res.json());

  return redirect(`/employees/${newComment.employeeId}`);
}
