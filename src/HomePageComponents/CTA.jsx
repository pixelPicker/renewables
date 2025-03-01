import React from "react";
import { FcGlobe } from "react-icons/fc";
import { FaLeaf } from "react-icons/fa6";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";
import ReactGA from 'react-ga4';


function CTA() {
  const handleClick = () => {
    ReactGA.event({
      category: 'Social Links',
      action: 'Click',
      label: platform,
    });
  }

  return (
    <section className=" bg-gray-200 py-8 px-4 sm:px-16 sm:py-16 flex flex-col items-center justify-items-center gap-4 sm:gap-8">
      <h1 className="sm:w-2/3 xl:w-1/2 text-center font-MontserratBold text-3xl sm:text-4xl pb-8">
        Imagine. Act. Transform. Join Us in Building a Greener Tomorrow!
      </h1>
      <div>
        <Link onClick={handleClick} to={'https://forms.gle/65FUp9HteRacTRPa9'} className="bg-green-500 hover:bg-green-400 active:bg-green-300 font-Nunito px-4 py-3 sm:px-6 sm:py-4 rounded-full transition-all">
          Give us your feedback
        </Link>
      </div>

    </section>
  );
}

export default CTA;