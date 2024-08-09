import { baseApi } from "./baseApi";

export function getEmployees(options) {
  return baseApi.get("employees", options).then((res) => res.data);
}
