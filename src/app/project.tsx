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
    <div className="mb-[30px] flex flex-col items-center">
      <div className="text-2xl mr-[980px]">Projects</div>
      <Separator className="w-[1100px] mt-5"></Separator>
      <div className="flex flex-col gap-[110px] w-[1000px] mt-[50px]">
        <div className="flex relatve">
          <Card className="relative w-[500px] h-[210px] z-20 mr-[-50px] mt-[50px]">
            <CardHeader>
              <CardTitle className="text-lg">Perosonal Portfolio</CardTitle>
            </CardHeader>
            <CardContent className="text-sm mt-5">
              Personal website built with Next.js, React.js, TypeScript, and
              shadcn/ui.
            </CardContent>
          </Card>

          <div className="relative w-[600px] h-[200px] z-10">
            <button
              onClick={() =>
                handleProjectClicked("https://github.com/jamesxxz/portfolio")
              }
              className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hover:shadow-2xl"
            >
              <img
                src="personal-web.jpg"
                alt="personal portfolio"
                className="rounded-lg border"
              />
            </button>
          </div>
        </div>

        <div className="flex relatve">
          <div className="relative w-[600px] h-[200px] z-10">
            <button
              onClick={() =>
                handleProjectClicked("https://github.com/ChrastilLab/Concord")
              }
              className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hover:shadow-2xl"
            >
              <img
                src="concord.jpg"
                alt="concord"
                className="rounded-lg border"
              />
            </button>
          </div>

          <Card className="relative w-[500px] h-[210px] z-20 ml-[-50px] mt-[50px]">
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

        <div className="flex relatve">
          <Card className="relative w-[500px] h-[210px] z-20 mr-[-50px] mt-[60px]">
            <CardHeader>
              <CardTitle className="text-lg">Direct Messaging chat</CardTitle>
            </CardHeader>
            <CardContent className="text-sm mt-5">
              A chatting GUI that interact with the existing server and allow
              different users to exchange messages through internal commands
              supported by server.
            </CardContent>
          </Card>

          <div className="relative w-[600px] h-[100px] z-10">
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
                className="rounded-lg border"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
