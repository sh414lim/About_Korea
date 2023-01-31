import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState, useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/user").then(({ data }) => {
      setTodos(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <h1>123</h1>
    </>
  );
}
