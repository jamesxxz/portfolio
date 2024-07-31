"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { tech_skills } from "@/data/tech-skill";
import { Icon } from "@iconify/react";

export default function Skills() {
  return (
    <div className="mt-[20px] mb-[30px] flex flex-col items-center">
      <div className="text-2xl mr-[980px]">Skills</div>
      <Separator className="w-[1100px] mt-5"></Separator>
      <div className="w-[950px] h-[200px] mt-[50px]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {tech_skills.map((skill) => (
              <CarouselItem className="basis-1/3">
                <div>
                  <Card className="h-[120px]">
                    <CardHeader className="mt-[-10px]">
                      <CardTitle className="text-base font-black">
                        {skill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="mt-[10px]">
                      <div className="flex gap-1">
                        {skill.elems.map((elem) => (
                          <Icon icon={elem.icon} className="size-7"></Icon>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
