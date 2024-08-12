import { baseApi } from "./baseApi";

export function getComments(employeeId, options) {
  return baseApi
    .get(`comments?userId=${employeeId}`, options)
    .then((res) => res.data);
}
