import Link from 'next/link'

import Image from 'next/image'
import roa from '../../../../public/img/davidRoa.svg'
export default function Navbar() {
  return (
    <>
      <h1>
        <Link href='/'>
          <Image
          src={roa}
          alt="David Roa logo"
        />
        </Link>
           
        </h1>
       
        <nav>
          <ul>
          
            <Link href='./uxui' className='nav_items'>
             <li> UX/UI Desing</li>
            </Link>
          
          
            <Link href='./illustrations' className='nav_items'>
             <li> Illustration</li>
            </Link>            
          
          
            <Link href='./aboutme' className='nav_items'>
             <li> About</li>
            </Link>
          
          
            <Link href='./contact' className='nav_items'>
             <li> Contact</li>
            </Link>            
          
          </ul>

        </nav>
    </>
  )
}