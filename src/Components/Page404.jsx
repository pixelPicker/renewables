import React from "react";
import { Link } from "react-router";

function Page404() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="grid justify-center gap-2">
        <h1 className="font-Montserrat text-8xl text-center">404</h1>
        <h1 className="font-Montserrat text-2xl text-center">Page Not Found</h1>
        <Link className="bg-black font-Montserrat text-white px-4 py-2 text-center rounded-3xl mx-4" to='/'>Go back home</Link>
      </div>
    </div>
  );
}

export default Page404;
