import { baseApi } from "./baseApi";

export function getComments(employeeId, options) {
  return baseApi
    .get(`comments?employeeId=${employeeId}`, options)
    .then((res) => res.data);
}

export function getComment(employeeId, options) {
  return baseApi.get(`comments/${employeeId}`, options).then((res) => res.data);
}

export function updateComment(commentId, data, options) {
  return baseApi
    .put(`comments/${commentId}`, data, options)
    .then((res) => res.data);
}
