"use client";
import NavBar from "./navbar";
import Landing from "./landing";
import About from "./about";
import Skills from "./skills";
import Projects from "./project";
import Contacts from "./contact";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Landing />
        <Element name="about">
          <About></About>
        </Element>
        <Element name="skills">
          <Skills></Skills>
        </Element>
        <Element name="projects">
          <Projects></Projects>
        </Element>
        <Element name="contacts">
          <Contacts></Contacts>
        </Element>
      </main>
      <footer className="mb-[30px] mr-[20px] flex justify-end md:items-center">
        Copyright © 2024 Jyun Rong Liu. All Rights Reserved.
      </footer>
    </div>
  );
}
