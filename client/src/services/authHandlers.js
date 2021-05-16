import jwt from "jsonwebtoken";
import { AUTH_TOKEN, AUTH_TOKEN_SECRET } from "../constants";

export const userLogIn = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
  window.location.pathname = "/dashboard/profile";
};

export const userLogOut = () => {
  localStorage.removeItem(AUTH_TOKEN);
  window.location.pathname = "/";
};

export const tokenParser = (token) => {
  const user = jwt.verify(token, AUTH_TOKEN_SECRET);
  return user;
};

export const getUser = () => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const user = token ? tokenParser(token) : null;
  return user;
};
