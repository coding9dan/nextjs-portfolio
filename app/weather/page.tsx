import { Metadata } from "next/types";
import React from "react";
import Main from "./components/Main";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Code in Life | Weather",
  description: "Weather App page",
};

const Weather = () => {
  return (
    <>
      <Navbar page="weather" />

      <Main />

      <Footer />
    </>
  );
};

export default Weather;
