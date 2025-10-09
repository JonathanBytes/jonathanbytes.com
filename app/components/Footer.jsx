import Link from "next/link";
import { MainLogo, GitHub } from "./Icons";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <footer className="flex grow-2 flex-wrap justify-between p-6 max-h-[305px] w-full bg-altbg ">
      <div className="pr-4 pb-2">
        <Link href="/">
          <MainLogo className="text-3xl sm:text-5xl mb-0" />
        </Link>
        <p className="text-sm sm:text-xl mt-0 ml-0">
          Apasionado por <strong>aprender y crear.</strong>
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link
            href="https://github.com/JonathanBytes/jonathanbytes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-foreground)] hover:opacity-100 underline-offset-4 hover:decoration-[var(--color-foreground)] hover:underline"
          >
            <GitHub className="w-4 h-4" />
            Código Fuente
          </Link>
        </div>
      </div>
      <div className="flex p-0">
        <SocialMedia />
      </div>
    </footer>
  );
}
