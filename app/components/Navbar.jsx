import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-5xl mx-auto px-6 py-5">
      <Link href="/" className="font-bold text-3xl">
        Mindful<span className="mx-2 text-primary">Journery</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
