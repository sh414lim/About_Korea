import React from "react";
import axios from "axios";
import cookie from "react-cookies";
export default function useSetToken(token: string) {
  axios.defaults.headers.common["Authorization"] = `${token}`;
  cookie.save("token", token, { path: "/", httpOnly: true });
}
