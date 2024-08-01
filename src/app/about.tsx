import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Microscope, Share2 } from "lucide-react";

export default function About() {
  return (
    <div className="mt-[180px] mb-[30px] flex flex-col items-center">
      <div className="text-2xl lg:mr-[980px] mr-0">About Me</div>
      <Separator className="lg:w-[1100px] w-full mt-5"></Separator>

      <div className="relative lg:w-[950px] w-full lg:h-[600px] h-auto mt-[50px] flex flex-col lg:flex-row lg:items-start items-center">
        <Card className="lg:absolute static top-0 left-0 lg:w-[500px] w-full lg:h-[270px] h-auto z-10 mb-4 lg:mb-0">
          <CardHeader>
            <CardTitle className="text-xl flex flex-row gap-4">
              <Microscope />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pt-[30px] text-xl">
              University of California, Irvine
            </div>
            <div>B.S in Computer Science</div>
          </CardContent>
          <CardFooter>
            <div>Sep. 2022 - Present</div>
          </CardFooter>
        </Card>

        <Card className="lg:absolute static lg:top-[230px] top-0 lg:left-[400px] left-0 lg:w-[560px] w-full lg:h-[300px] h-auto z-20">
          <CardHeader>
            <CardTitle className="text-xl flex flex-row gap-4">
              <Share2 />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="LA" className="flex flex-col lg:flex-row">
              <div>
                <TabsList className="lg:w-[100px] w-full lg:h-[80px] h-auto ml-[10px] flex lg:flex-col flex-row">
                  <TabsTrigger className="lg:w-[120px] w-full" value="LA">
                    Course LA
                  </TabsTrigger>
                  <TabsTrigger className="lg:w-[120px] w-full" value="SNL-Lab">
                    SNL Lab
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="lg:ml-[50px] ml-0 mt-4 lg:mt-0">
                <TabsContent value="LA" className="text-sm">
                  <ul>
                    <li>
                      - Responsible for the course regarding programming with
                      Python software libraries and object-oriented programming
                    </li>
                    <br />
                    <li>
                      - Provided support and feedback to students who have
                      Python-related problems with class projects and
                      assignments
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="SNL-Lab" className="text-sm">
                  <ul>
                    <li>
                      - Developed a comprehensive website for resource
                      integration and member management of the lab
                    </li>
                    <br />
                    <li>
                      - Responsible for the front-end development in a
                      collaborative team and utilized React.js and other
                      technologies
                    </li>
                  </ul>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
