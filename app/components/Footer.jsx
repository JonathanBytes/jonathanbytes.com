import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { MainLogo } from "./Icons";

export default function Footer() {
  return (
    <footer>
      <div className='footer-logo'>
        <Link href='/'>
          <MainLogo className='text-3xl sm:text-5xl text-background' />
        </Link>
        <p className="text-sm text-background sm:text-xl">Apasionado por <strong>aprender y crear.</strong></p>
      </div>
      <div className='footer-links'>
        <SocialMedia />
      </div>
    </footer>
  )
}
