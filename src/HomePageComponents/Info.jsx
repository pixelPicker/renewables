import React from "react";
import { FcGlobe } from "react-icons/fc";
import { FaLeaf } from "react-icons/fa6";
import { Link } from "react-router";
import { MdArrowOutward } from "react-icons/md";

function Info() {
  return (
    <section className=" bg-gray-200 p-16 flex flex-col gap-16">
      <div className="w-2/3">
        <h1 className="font-MontserratBold text-4xl text-gray-700 pb-8">
          Imagine. Act. Transform. Join Us in Building a Greener Tomorrow!
        </h1>
        <div>
          <Link className="bg-green-500 hover:bg-green-400 active:bg-green-300 font-Nunito px-4 py-3 rounded-full transition-all">Get Invloved Today
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Info;
