import axios from "axios";
import { config } from "./config";

const apiurl = config.apiurl;

export const CallPostApiServices = (
  url,
  data,
  successCallBack,
  errorCallBack
) => {
  console.log(`${apiurl}${url}`);
  axios
    .post(`${apiurl}${url}`, data)
    .then(successCallBack)
    .catch(errorCallBack);
};
