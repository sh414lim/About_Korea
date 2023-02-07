import { ItokenType } from "../types/login/LoginTypes";

export const getJwtToken = () => {
  return sessionStorage.getItem("jwt");
};

export const setJwtToken = (token: string) => {
  sessionStorage.setItem("jwt", token);
};

export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshToken");
};

export const setRefreshToken = (token: string) => {
  sessionStorage.setItem("refreshToken", token);
};

export const handleLogin = (token: ItokenType) => {
  // const {
};
