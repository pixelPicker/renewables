import React from "react";
import { Link } from "react-router";

function Hero() {
  return (
    <>
      <section className="max-h-screen grid grid-cols-5">
      <div className="flex flex-col col-span-2 pl-16 gap-5 justify-center">
        <h1 className="font-MontserratBold text-5xl max-w-1/3 text-slate-700">
          Renewable Energy Is Not the Future <br></br><span className="text-green-700">— It’s Now</span>
        </h1>
        <h1 className="font-Nunito text-xl max-w-1/3 text-slate-700">
          Expand your understanding of renewable energy and its impact today
        </h1>
        <div className="flex gap-4">
          <Link className="bg-black hover:bg-gray-800 active:bg-gray-700 font-Nunito text-white px-4 py-3 text-sm text-center rounded-lg " to='/'>
            Visit Store
          </Link>
          <Link className="outline-2 outline outline-black font-Nunito px-4 py-3 text-sm text-center rounded-lg " to='/'>
            Read More
          </Link>
        </div>
      </div>
      <img src="assets\images\rec_2.jpg" alt="renewable energy" className="aspect-3/2 col-span-3" />
    </section>
    </>
  );
}

export default Hero;
