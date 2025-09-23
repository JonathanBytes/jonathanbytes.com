import Link from 'next/link'
import SocialMedia from './SocialMedia'
import { MainLogo } from './Icons'

export default function Footer() {
  return (
    <footer className="flex grow-2 flex-wrap justify-between p-6 max-h-[305px] w-full bg-altbg ">
      <div className="footer-logo">
        <Link href="/">
          <MainLogo className="text-3xl sm:text-5xl mb-0" />
        </Link>
        <p className="text-sm sm:text-xl mt-0 ml-0">
          Apasionado por <strong>aprender y crear.</strong>
        </p>
      </div>
      <div className=" flex p-0">
        <SocialMedia />
      </div>
    </footer>
  )
}
