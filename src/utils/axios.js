import axiosDefault /* , { AxiosRequestConfig } */ from "axios";

const config /* : AxiosRequestConfig */ = {
  headers: {
    "Content-Type": "application/json"
  }
};

const baseURL = ``; /*  as string */

const axios = axiosDefault.create({
  ...config,
  baseURL
});

export { axios };
/* export type { AxiosResponse } from 'axios'; */
