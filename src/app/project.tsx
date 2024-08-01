"use client";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  function handleProjectClicked(projectUrl: string) {
    window.open(projectUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mb-[30px] flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="text-2xl mr-0 md:mr-[980px]">Projects</div>
      <Separator className="w-full md:w-[1100px] mt-5" />
      <div className="flex flex-col gap-[30px] md:gap-[110px] w-full md:w-[1000px] mt-[30px] md:mt-[50px]">
        {/* First Project */}
        <div className="relative flex flex-col md:flex-row gap-4">
          <Card className="absolute inset-0 md:relative w-full md:w-[500px] h-[210px] z-20 mb-4 md:mb-0 md:mr-[-50px] md:mt-[50px]">
            <CardHeader>
              <CardTitle className="text-lg">Personal Portfolio</CardTitle>
            </CardHeader>
            <CardContent className="text-sm mt-5">
              Personal website built with Next.js, React.js, TypeScript, and
              shadcn/ui.
            </CardContent>
          </Card>
          <div className="relative w-full md:w-[600px] h-[200px] z-10">
            <button
              onClick={() =>
                handleProjectClicked("https://github.com/jamesxxz/portfolio")
              }
              className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hover:shadow-2xl"
            >
              <img
                src="personal-web.jpg"
                alt="personal portfolio"
                className="rounded-lg border w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* Second Project */}
        <div className="relative flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-[600px] h-[200px] z-10">
            <button
              onClick={() =>
                handleProjectClicked("https://github.com/ChrastilLab/Concord")
              }
              className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hover:shadow-2xl"
            >
              <img
                src="concord.jpg"
                alt="concord"
                className="rounded-lg border w-full h-full object-cover"
              />
            </button>
          </div>
          <Card className="absolute inset-0 md:relative w-full md:w-[500px] h-[210px] z-20 md:ml-[-50px] mb-4 md:mb-0 md:mt-[50px]">
            <CardHeader>
              <CardTitle className="text-lg">Concord</CardTitle>
              <CardDescription>UCI SNL</CardDescription>
            </CardHeader>
            <CardContent className="text-sm mt-[-5px]">
              An all-in-one site designed for better organization and
              accessibility of resources for research labs and their members,
              and efficient management for lab administrators
            </CardContent>
          </Card>
        </div>

        {/* Third Project */}
        <div className="relative flex flex-col md:flex-row gap-4">
          <Card className="absolute inset-0 md:relative w-full md:w-[500px] h-[210px] z-20 mb-4 md:mb-0 md:mr-[-50px] md:mt-[60px]">
            <CardHeader>
              <CardTitle className="text-lg">Direct Messaging chat</CardTitle>
            </CardHeader>
            <CardContent className="text-sm mt-5">
              A chatting GUI that interacts with the existing server and allows
              different users to exchange messages through internal commands
              supported by the server.
            </CardContent>
          </Card>
          <div className="relative w-full md:w-[600px] h-[100px] z-10">
            <button
              onClick={() =>
                handleProjectClicked(
                  "https://github.com/jamesxxz/Direct-messaging-chat"
                )
              }
              className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hover:shadow-2xl"
            >
              <img
                src="dm-chat.jpg"
                alt="direct-messaging chat"
                className="rounded-lg border w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
