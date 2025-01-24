import React from "react";
import { NavLink } from "react-router";
function Header() {
  return (
    <div className="flex justify-between py-4 px-6 align-middle font-Montserrat">
      <h2 className="text-2xl font-bold">Kitty</h2>
      <nav>
        <ul className="flex gap-6">
          <NavLink to=''>Home</NavLink>
          <NavLink to='Blog'>Blog</NavLink>
          <NavLink to='Projects'>Projects</NavLink>
          <NavLink to='CaseStudies'>Case studies</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
