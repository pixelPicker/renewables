import React from "react";
import { NavLink } from "react-router";
function Header() {
  return (
    <div className="sticky top-0 left-0 z-50 backdrop-blur-xl flex justify-between py-4 px-32 items-center font-Montserrat">
      <h2 className="text-2xl font-bold">Kitty</h2>
      <nav>
        <ul className="flex gap-6">
          <NavLink className='hover:border-black transition-all duration-300 p-2 border-transparent border-b-2' to=''>Home</NavLink>
          <NavLink className='hover:border-black transition-all duration-300 p-2 border-transparent border-b-2' to='blog'>Blog</NavLink>
          <NavLink className='hover:border-black transition-all duration-300 p-2 border-transparent border-b-2' to='projects'>Projects</NavLink>
          <NavLink className='hover:border-black transition-all duration-300 p-2 border-transparent border-b-2' to='case studies'>Case studies</NavLink>
          <NavLink className='hover:border-black transition-all duration-300 p-2 border-transparent border-b-2' to='about'>About</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
