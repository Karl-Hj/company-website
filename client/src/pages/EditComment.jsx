import { redirect, useActionData, useLoaderData } from "react-router-dom";
import { getEmployees } from "../api/employees";
import { PostForm, postFormValidator } from "../components/PostForm";
import { getComment, updateComment } from "../api/comments";

export function EditComment() {
  const { employees, comment } = useLoaderData();
  const errors = useActionData();

  return (
    <>
      <PostForm employees={employees} defaultValues={comment} errors={errors} />
    </>
  );
}
export async function loader({ request: { signal }, params }) {
  const employees = getEmployees({ signal });
  const comment = getComment(params.employeeId, { signal });

  return { employees: await employees, comment: await comment };
}

export async function action({ request, params: { employeeId } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = postFormValidator({ title, body });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const employees = await getEmployees();
  const employee = employees.find((emp) => emp.id === userId);
  const email = employee ? employee.email : "";

  const update = await updateComment(
    employeeId,
    {
      title,
      body,
      userId: Number(userId),
      employeeId: Number(employeeId),
      email,
    },
    { signal: request.signal }
  );

  return redirect(`/employees/${update.employeeId}`);
}
