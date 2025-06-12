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
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  function handleProjectClicked(projectUrl: string) {
    window.open(projectUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mb-[30px] flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="text-2xl mr-0 md:mr-[980px]">Projects</div>
      <Separator className="w-full md:w-[1100px] mt-5" />
      <div className="flex flex-col gap-[30px] md:gap-[110px] w-full md:w-[1000px] mt-[30px] md:mt-[50px]">
        {/* First Project */}
        <div className="relative flex flex-col gap-4 md:flex-row">
          <Card className="relative w-full h-[210px] z-20 md:w-[500px] md:mr-[-50px] md:mt-[50px]">
            <CardHeader>
              <CardTitle className="text-lg">VISTA</CardTitle>
              <CardDescription>KPFF Consulting Engineers</CardDescription>
            </CardHeader>
            <CardContent className="text-sm mt-[-15px]">
              An cross-platform desktop application using Godot Engine to
              visualize structural building models under earthquake simulations,
              thereby enhancing engineering workflows
            </CardContent>
          </Card>
          <div className="relative w-full h-[200px] z-10 md:w-[600px] mb-[30px]">
            <button
              onClick={() =>
                handleProjectClicked("https://github.com/jamesxxz/portfolio")
              }
              className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hover:shadow-2xl"
            >
              <img
                src="vista.jpg"
                alt="vista"
                className="rounded-lg border w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        {/* Second Project */}
        {isMobile ? (
          <div className="relative flex flex-col gap-4 md:flex-row">
            <Card className="relative w-full h-[210px] z-20 md:w-[500px] md:mr-[-50px] md:mt-[50px]">
              <CardHeader>
                <CardTitle className="text-lg">Concord</CardTitle>
                <CardDescription>UCI SNL</CardDescription>
              </CardHeader>
              <CardContent className="text-sm mt-[-15px]">
                An all-in-one site designed for better organization and
                accessibility of resources for research labs and their members,
                and efficient management for lab administrators
              </CardContent>
            </Card>
            <div className="relative w-full h-[200px] z-10 md:w-[600px] mb-[30px]">
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
          </div>
        ) : (
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
              <CardContent className="text-sm mt-[-15px]">
                An all-in-one site designed for better organization and
                accessibility of resources for research labs and their members,
                and efficient management for lab administrators
              </CardContent>
            </Card>
          </div>
        )}

        {/* Third Project */}
        <div className="relative flex flex-col gap-4 md:flex-row">
          <Card className="relative w-full h-[210px] z-20 md:w-[500px] md:mr-[-50px] md:mt-[60px]">
            <CardHeader>
              <CardTitle className="text-lg">ZotFitness</CardTitle>
              <CardDescription>BitHacks 2025</CardDescription>
            </CardHeader>
            <CardContent className="text-sm mt-[-15px]">
              A web UI that allows you to know how your heart, body, and
              environment respond as you move during your workout in real time,
              thereby helping you optimize every rep, push your limits safely
            </CardContent>
          </Card>
          <div className="relative w-full h-[100px] z-10 md:w-[600px]">
            <button
              onClick={() =>
                handleProjectClicked("https://github.com/jeremyunoz/ZotFitness")
              }
              className="rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500 hover:shadow-2xl"
            >
              <img
                src="zotfitness.jpg"
                alt="zotfitness"
                className="rounded-lg border w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
