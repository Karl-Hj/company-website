import { baseApi } from "./baseApi";

export function getEmployees(options) {
  return baseApi.get("employees", options).then((res) => res.data);
}

export function getEmployee(employeeId, options) {
  return baseApi
    .get(`employees/${employeeId}`, options)
    .then((res) => res.data);
}
