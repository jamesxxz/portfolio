import NavBar from "./navbar";
import Landing from "./landing";
import About from "./about";
import Skills from "./skills";
import Projects from "./project";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Landing />
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        {/*

                <Card>
                  <CardHeader>
                    <CardTitle>Contact me</CardTitle>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Project</CardTitle>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>

               */}
      </main>
    </div>
  );
}
