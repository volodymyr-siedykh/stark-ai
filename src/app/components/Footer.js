import Link from "next/link"
import iconCopyright from "../../../public/images/icon-copyright.svg"
import iconApple from "../../../public/images/icon-apple.svg"
import iconGoogle from "../../../public/images/icon-google.svg"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className='bg-main-blue'>
      <div className='section text-white py-[20px]'>
        <div className='flex flex-col gap-4 md:flex-row justify-between'>
          <div className='flex gap-[10px]'>
            <Image src={iconCopyright} alt='copyright' />
            <p>Stark A.I</p>
          </div>
          <nav>
            <ul className="flex flex-col md:flex-row justify-between gap-6">
              <li>
                <Link href='/'>About</Link>
              </li>
              <li>
                <Link href='/'>Contact</Link>
              </li>
              <li>
                <Link href='/'>Terms of Service</Link>
              </li>
              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
            </ul>
          </nav>
          <div className='flex gap-[10px]'>
            <Image src={iconApple} alt='apple' />
            <Image src={iconGoogle} alt='google' />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer