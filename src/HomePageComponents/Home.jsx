import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import Info from "./Info";
import ROICalculator from "./ROICalculator";
import Quiz from "../QuizComponent/Quiz/Quiz";
function Home() {
  return (
    <>
      <Hero />
      <CTA />
      {/* TODO - add the quiz component here. */}
      <Info />
      <Quiz />
      <ROICalculator />
      
    </>
  )
}

export default Home;
