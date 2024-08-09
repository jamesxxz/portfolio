"use client";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";

export default function Contacts() {
  function handleContactClicked(contactUrl: string) {
    window.open(contactUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mt-[300px] mb-[200px] flex flex-col relative gap-[50px] items-center px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="text-2xl font-black text-center">Let&apos;s Connect!</div>

      <div className="flex flex-col sm:flex-row items-center relative w-full">
        <Separator className="w-full sm:w-[550px] bg-black" />
        <div className="mt-2 sm:mt-0 sm:ml-20 flex gap-3 justify-center">
          <a
            className="hover:opacity-75 text-slate-800"
            onClick={() =>
              handleContactClicked(
                "https://www.linkedin.com/in/jyun-rong-liu-385b0522a/"
              )
            }
          >
            <Icon
              icon="mdi:linkedin"
              className="size-12 hover:scale-125 duration-500"
            />
          </a>
          <a
            className="hover:opacity-75 text-slate-800"
            onClick={() => handleContactClicked("https://github.com/jamesxxz")}
          >
            <Icon
              icon="pixelarticons:github"
              className="size-12 hover:scale-125 duration-500"
            />
          </a>
          <a
            className="hover:opacity-75 text-slate-800"
            href="mailto:jamesliu1027z@gmail.com"
          >
            <Icon
              icon="memory:email"
              className="size-12 hover:scale-125 duration-500"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center relative w-full justify-end">
        <p className="mr-0 mb-2 sm:mr-8 flex gap-2 flex-wrap justify-center">
          <a href="mailto:jamesliu1027z@gmail.com" className="hover:underline">
            jamesliu1027z@gmail.com
          </a>
          /
          <a href="mailto:jyunrl@uci.edu" className="hover:underline">
            jyunrl@uci.edu
          </a>
        </p>
        <Separator className="w-full sm:w-[500px] bg-black" />
      </div>
    </div>
  );
}
