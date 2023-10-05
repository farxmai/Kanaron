import apiClient, { apiRoutes } from "utils/axios";

const login = (data: { email: string; password: string }) => {
  return apiClient.post(apiRoutes.login, data);
};

const modules = {
  login,
};

export default modules;
