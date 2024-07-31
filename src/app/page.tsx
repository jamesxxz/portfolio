import NavBar from "./navbar";
import Landing from "./landing";
import About from "./about";
import Skills from "./skills";
import Projects from "./project";
import Contacts from "./contact";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Landing />
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
      </main>
      <footer className="mb-[30px] mr-[20px] flex justify-end">
        Copyright © 2024 Jyun Rong Liu. All Rights Reserved.
      </footer>
    </div>
  );
}
