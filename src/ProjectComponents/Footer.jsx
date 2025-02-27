import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col sm:flex-row sm:justify-between py-8 px-4 sm:px-16 lg:px-32 sm:items-center">
        <div className="flex flex-col sm:items-start">
          <img src="./assets/images/reflux_logo.png" alt="Reflux logo" className="aspect-16/9 w-32" />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-8">
          <Link to={""} className="font-Montserrat hover:border-black transition-all duration-300 p-2 border-transparent border-b-2">Home</Link>
          <Link to={"blog"} className="font-Montserrat hover:border-black transition-all duration-300 p-2 border-transparent border-b-2">Blog</Link>
          <Link to={"projects"} className="font-Montserrat hover:border-black transition-all duration-300 p-2 border-transparent border-b-2">Projects</Link>
          <Link to={"casestudy"} className="font-Montserrat hover:border-black transition-all duration-300 p-2 border-transparent border-b-2">Case studies</Link>
          <Link to={"about"} className="font-Montserrat hover:border-black transition-all duration-300 p-2 border-transparent border-b-2">About</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
