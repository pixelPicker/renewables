import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import Info from "./Info";
function Home() {
  return (
    <>
      <Hero />
      <CTA />
      {/* TODO - add the quiz component here. */}
      <Info />
    </>
  )
}

export default Home;
