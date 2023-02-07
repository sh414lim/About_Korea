import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MainPage from "../components/main/MainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
