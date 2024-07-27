import Landing from "./landing";
import About from "./about";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Landing />
        <About></About>
        {/* <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>

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
