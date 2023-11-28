import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import roa from '../../../../public/img/davidRoa.svg'
import linkedin from '../../../../public/img/linkedin.svg'
import insta from '../../../../public/img/instagram.svg'


const montserrat = Montserrat({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <nav className='nav_glabal_container'>
      <div>
        <Image
          src={roa}
          alt="David Roa logo"
          sizes='20vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />


      </div>


      <ul className={montserrat.className}>
        <Link href='./bio' className='nav_items'>
          <li> Bio</li>
        </Link>

        <Link href='./uxui' className='nav_items'>
          <li> UX/UI Desing</li>
        </Link>

        <Link href='./illustrations' className='nav_items'>
          <li> Illustration</li>
        </Link>
        <div className='nav_social_icons'>
          <li>
            <Link href='https://www.linkedin.com/in/davidroaui/' target='_blank'>
            <Image
              src={linkedin}
              alt='linkedin log'
            />
            </Link>            
          </li>
          <li>
            <Link href='https://www.instagram.com/roa_franco/' target='_blank'>
              <Image
              src={insta}
              alt='instagram log'
            />
            </Link>          
          </li>          
        </div>
        <p>Copyright 2021©</p>
      </ul>

    </nav>

  )
}