import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="flex flex-col lg:flex-row justify-center mt-[120px] gap-[20px] lg:gap-[200px] px-4 sm:px-8 md:px-12 lg:px-0 items-center">
      <div className="mt-[50px] lg:mt-[100px] text-center lg:text-left">
        <div className="lg:text-4xl text-2xl mb-[15px]">
          Hi, I&apos;m James Liu
        </div>
        <div className="lg:text-lg text-base mb-[30px] lg:mb-[50px]">
          Student developer at UC Irvine
        </div>
        <a
          href="https://docs.google.com/document/d/1AjS9IsPzXmmP--Isu-jyIxJGtTDwkeUDXxvzBY8AURc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">Download CV</Button>
        </a>
      </div>

      <div className="mt-8 lg:mt-0">
        <img
          src="profile-pic.jpg"
          alt="profile-pic"
          className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-auto lg:h-[400px] h-auto"
        />
      </div>
    </div>
  );
}
