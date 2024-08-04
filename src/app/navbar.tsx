"use client";
import React from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4">
      <header className="text-2xl font-bold ml-[75px]">James Liu.</header>
      <nav className="mr-[50px] hidden flex-row gap-6 text-xl font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-lg lg:gap-6 lg:text-xl">
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-40}
          className="text-muted-foreground transition-colors hover:text-foreground text-lg hover:scale-110 transition duration-300"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={800}
          offset={-40}
          className="text-muted-foreground transition-colors hover:text-foreground text-lg hover:scale-110 transition duration-300"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={800}
          offset={-40}
          className="text-muted-foreground transition-colors hover:text-foreground text-lg hover:scale-110 transition duration-300"
        >
          Projects
        </Link>
        <Link
          to="contacts"
          smooth={true}
          duration={800}
          className="text-muted-foreground transition-colors hover:text-foreground text-lg hover:scale-110 transition duration-300"
        >
          Contact Me
        </Link>
      </nav>
    </div>
  );
}
