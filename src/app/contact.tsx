"use client";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";

export default function Contacts() {
  function handleContactClicked(contactUrl: string) {
    window.open(contactUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="mt-[300px] mb-[200px] flex flex-col relative gap-[50px] items-center">
      <div className="text-2xl font-black">Let's Connect!</div>

      <div className="flex items-center relative w-full">
        <Separator className="w-[550px] bg-black" />
        <div className="ml-20 flex gap-3">
          <a
            className="hover:opacity-75 color-gray-200"
            onClick={() =>
              handleContactClicked(
                "https://www.linkedin.com/in/jyun-rong-liu-385b0522a/"
              )
            }
          >
            <Icon icon="mdi:linkedin" className="size-11" />
          </a>
          <a
            className="hover:opacity-75 color-gray-200"
            onClick={() => handleContactClicked("https://github.com/jamesxxz")}
          >
            <Icon icon="pixelarticons:github" className="size-11" />
          </a>
          <a
            className="hover:opacity-75 color-gray-200"
            href="mailto:jamesliu1027z@gmail.com"
          >
            <Icon icon="memory:email" className="size-11" />
          </a>
        </div>
      </div>

      <div className="flex items-center relative w-full justify-end">
        <p className="mr-8 flex gap-2">
          <a href="mailto:jamesliu1027z@gmail.com" className="hover:underline">
            jamesliu1027z@gmail.com
          </a>
          /
          <a href="mailto:jyunrl@uci.edu" className="hover:underline">
            jyunrl@uci.edu
          </a>
        </p>
        <Separator className="w-[500px] bg-black" />
      </div>
    </div>
  );
}
