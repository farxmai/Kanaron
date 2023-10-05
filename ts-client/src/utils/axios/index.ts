import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  timeout: 30000,
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const setSession = ({
  id,
  secret,
}: {
  id?: string;
  secret?: string;
}) => {
  if (id && secret) {
    const Basic = `Basic ${id} ${secret}`;
    apiClient.defaults.headers.common.Authorization = Basic;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
};

export const onAxiosError =
  (text = "AXIOS ERROR", callback?: (err: any) => any) =>
  (err: AxiosError) => {
    console.error(text, err?.response?.data);
    callback && callback(err);
  };

export const apiRoutes = {
  login: "/api/auth/login",
};

export default apiClient;
