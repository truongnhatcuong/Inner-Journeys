import React from "react";
import HomePage from "./components/page/home/HomePage";
import Conscious from "./components/page/home/Conscious";
import SignatureExperiences from "./components/page/home/SignatureExperiences";
import YourExperts from "./components/page/home/YourExperts";
import Banner7 from "./components/page/home/Banner7";
import WeeklyProgram from "./components/page/home/WeeklyProgram";
import SacredValentine from "./components/page/home/SacredValentine";

const page = () => {
  return (
    <>
      <HomePage />
      <Conscious />
      <SignatureExperiences />
      <YourExperts />
      <Banner7 />
      <WeeklyProgram />
      <SacredValentine />
    </>
  );
};

export default page;
