import React from "react";
import { FcGlobe } from "react-icons/fc";
import { FaLeaf } from "react-icons/fa6";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";

function CTA() {
  return (
    <section className=" bg-gray-200 p-16 flex flex-col items-center justify-items-center gap-8">
      <h1 className="w-1/2 text-center font-MontserratBold text-4xl pb-8">
        Imagine. Act. Transform. Join Us in Building a Greener Tomorrow!
      </h1>
      <div>
        <Link className="bg-green-500 hover:bg-green-400 active:bg-green-300 font-Nunito px-6 py-4 rounded-full transition-all">
          Get Involved Today
        </Link>
      </div>

    </section>
  );
}

export default CTA;