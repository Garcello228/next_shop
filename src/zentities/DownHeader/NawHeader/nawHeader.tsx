'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./NawHeader.scss"

function NawHeader()
{
    const pathname = usePathname()

    const links = [
     { name: 'Home', href: '/' },
     { name: 'Contact', href: '/Contact' },
     { name: 'About', href: '/About' },
     { name: 'Sign Up', href: '/signup' },
    ]
   
    return(
        <nav className="navig__navigation">
            <ul>
               {links.map((link) => {
                  const isActive = pathname === link.href

                   return (
                    <li key={link.name}>
                     <Link  href={link.href}  className={isActive ? 'isActive' : ''}>
                      {link.name}
                     </Link>
                    </li>
                   )
          
                })}
            </ul>
        </nav>
    )
}

export default NawHeader