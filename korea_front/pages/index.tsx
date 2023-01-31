import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState, useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [ema, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cy, setCy] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/user").then(({ data }) => {
      setTodos(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    console.log(ema, pwd);
  }, [ema]);

  const onPost = () => {
    const params = {
      email: ema,
      password: pwd,
      country: cy,
    };

    axios
      .post("http://localhost:8000/user", params)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>123</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="country"
        onChange={(e) => {
          setCy(e.target.value);
        }}
      />
      <button onClick={onPost}>전송</button>
    </>
  );
}
