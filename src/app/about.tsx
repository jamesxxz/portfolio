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
    <div className="mt-[200px] mb-[30px] flex flex-col items-center">
      <div className="text-2xl mr-[980px]">About Me</div>
      <Separator className="w-[1100px] mt-5"></Separator>

      <div className="relative w-[950px] h-[600px] mt-[50px]">
        <Card className="absolute top-0 left-0 w-[500px] h-[270px] z-10">
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

        <Card className="absolute top-[230px] left-[400px] w-[560px] h-[320px] z-20">
          <CardHeader>
            <CardTitle className="text-xl flex flex-row gap-4">
              <Share2 />
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="LA" className="flex flex-row">
              <div>
                <TabsList className="w-[100px] h-[80px] ml-[10px] flex flex-col">
                  <TabsTrigger className="w-[120px]" value="LA">
                    Course LA
                  </TabsTrigger>
                  <TabsTrigger className="w-[120px]" value="SNL-Lab">
                    SNL Lab
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="ml-[50px]">
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
