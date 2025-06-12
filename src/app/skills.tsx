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
    <div className="mt-[20px] mb-[30px] flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-0">
      <div className="text-2xl lg:mr-[980px] mr-0 text-center lg:text-left">
        Skills
      </div>
      <Separator className="lg:w-[1100px] w-full mt-5"></Separator>
      <div className="lg:w-[950px] w-full lg:h-[200px] h-auto mt-[50px]">
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
              <CarouselItem
                key={skill.title}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div>
                  <Card className="h-auto lg:h-[120px]">
                    <CardHeader className="mt-0 lg:mt-[-10px]">
                      <CardTitle className="text-base font-black">
                        {skill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="mt-[8px]">
                      <div className="flex gap-1 justify-center lg:justify-start">
                        {skill.elems.map((elem) => (
                          <Icon
                            key={elem.name}
                            icon={elem.icon}
                            className="size-7"
                          ></Icon>
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
