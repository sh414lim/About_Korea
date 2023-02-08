import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
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
export const requestLogOut = () => {
  Swal.fire({
    icon: "success",
    title: "LogOut",
    text: "Success LogOut",
    confirmButtonText: "LogOut",
  }).then((res) => {
    if (res.isConfirmed) {
      Cookies.remove("token");
      location.reload();
    }
  });
};
