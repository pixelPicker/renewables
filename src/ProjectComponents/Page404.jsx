import React from "react";
import { Link } from "react-router";

function Page404() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="grid justify-items-center gap-2">
        <img src="/assets/images/cat_pic_1.jpg" className="aspect-9/16 w-1/1"></img>
        <h1 className="font-Montserrat text-2xl text-center">Couldn't find the page you asked</h1>
        <Link className="bg-black font-Montserrat text-white px-4 py-2 text-center rounded-3xl mx-4" to='/'>Go back home</Link>
      </div>
    </div>
  );
}

export default Page404;
