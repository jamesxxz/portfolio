import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4">
      <header className="text-2xl font-bold ml-[75px]">James Liu.</header>
      <nav className="mr-[50px] hidden flex-row gap-6 text-xl font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-lg lg:gap-6 lg:text-xl">
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground text-lg"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground text-lg"
        >
          Skills
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground text-lg"
        >
          Projects
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground text-lg"
        >
          Contact Me
        </Link>
      </nav>
    </div>
  );
}
