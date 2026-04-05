import React from "react";
import HomePage from "./components/page/home/HomePage";
import Conscious from "./components/page/home/Conscious";
import SignatureExperiences from "./components/page/home/SignatureExperiences";
import YourExperts from "./components/page/home/YourExperts";

const page = () => {
  return (
    <>
      <HomePage />
      <Conscious />
      <SignatureExperiences />
      <YourExperts />
    </>
  );
};

export default page;
