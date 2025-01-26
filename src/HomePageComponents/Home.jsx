import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import Info from "./Info";
import ROICalculator from "./ROICalculator";
import Stories from "./Stories";

function Home() {
  return (
    <>
      <Hero />
      <CTA />
      {/* TODO - add the quiz component here. */}
      <Info />
      {/* //* - Waiting for blogs and other stuff to put content */}
      <Stories />
      <ROICalculator />
    </>
  )
}

export default Home;
