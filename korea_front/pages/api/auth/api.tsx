import axios from "axios";
import { resolve } from "path/posix";
import Swal from "sweetalert2";

export const PostSignUpApi = (
  Uemail: string,
  Upassword: string,
  Ucountry: string
) => {
  const params = {
    email: Uemail,
    password: Upassword,
    country: Ucountry,
  };
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8000/user/sign_up", params)
      .then((res) => {
        // console.log(res.data);
        let isSuccess: boolean = res.data.ok;
        if (isSuccess) {
          resolve(res.data);
        } else {
          Swal.fire({
            icon: "error",
            text: `${res.data.error}`,
          });
        }
        reject(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const RequestloginApi = (Uemail: string, Upassword: string) => {
  const params = {
    email: Uemail,
    password: Upassword,
  };
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:8000/user/login", params)
      .then((res) => {
        console.log(res.data);
        let isSuccess: boolean = res.data.ok;
        if (isSuccess) {
          resolve(res.data);
        } else {
          Swal.fire({
            icon: "error",
            text: `${res.data.error}`,
          });
        }
        reject(res.data.ok);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const RequestUserInfoApi = (id: any) => {
  axios
    .get("http://localhost:8000/user/info", id)
    .then((res) => {
      console.log(777);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
