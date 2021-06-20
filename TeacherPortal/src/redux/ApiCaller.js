// @flow
import fetch from "cross-fetch";
import { checkStatus, parseJSON } from "./responseHandler";

const queryString = require("query-string");

const headerData = {
  "content-type": "application/x-www-form-urlencoded",
};

const BodyConversion = (body: Object, header: Object) => {
  if (header["content-type"] === "application/x-www-form-urlencoded") {
    return queryString.stringify(body);
  }
  if (header["content-type"] === "application/json") {
    return JSON.stringify(body);
  }
  return body;
};

const API = "http://localhost:8011";

export default (
  endpoint: string,
  method: string,
  body: Object,
  header: Object = headerData,
  hostName: string = "http://localhost:8011"
) =>
  fetch(`${API}${endpoint}`, {
    headers: header,
    method,
    body: BodyConversion(body, header),
  })
    .then(checkStatus)
    .then(parseJSON)
    .catch((error) => {
      return {
        status: false,
        message: "Ooops network error! Check your net connection",
      };
    });
