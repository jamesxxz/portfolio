import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavBar from "./navbar";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <div>
          <div className="">
            <img
              src="profile-pic.jpg"
              alt="profile-pic"
              className="rounded-lg"
            />
          </div>

          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Bio</CardTitle>
                <CardDescription>Hi I am James Liu</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>

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

                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card> */}
          </div>
        </div>
      </main>
    </div>
  );
}
