import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="flex flex-row justify-center mt-[120px] gap-[200px]">
      <div className="mt-[100px]">
        <div className="text-4xl mb-[15px]">Hi, I'm James Liu</div>
        <div className="text-lg mb-[50px]">Student developer at UC Irvine</div>
        <a
          href="https://docs.google.com/document/d/1AjS9IsPzXmmP--Isu-jyIxJGtTDwkeUDXxvzBY8AURc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">Download CV</Button>
        </a>
      </div>

      <div>
        <img
          src="profile-pic.jpg"
          alt="profile-pic"
          className="rounded-lg w-auto h-[400px]"
        />
      </div>
    </div>
  );
}
