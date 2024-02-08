import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { MainLogo } from "./Icons";

export default function Footer() {
  return (
    <footer>
      <div className='footer-logo'>
        <Link href='/'>
          <MainLogo className='text-3xl sm:text-5xl mb-0' />
        </Link>
        <p className="text-sm sm:text-xl mt-0">Apasionado por <strong>aprender y crear.</strong></p>
      </div>
      <div className='footer-links'>
        <SocialMedia />
      </div>
    </footer>
  )
}
