import { baseApi } from "./baseApi";

export function getComments(employeeId, options) {
  return baseApi
    .get(`comments?employeeId=${employeeId}`, options)
    .then((res) => res.data);
}
