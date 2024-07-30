import Landing from "./landing";
import About from "./about";
import Skills from "./skills";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Landing />
        <About></About>
        <Skills></Skills>
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
