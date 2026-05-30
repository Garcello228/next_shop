'use client'

import { useRef, useState, useEffect  } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Dialog from './Dialog/Dialog';
import Link from "next/link"
import Пользователь from './icone/user.svg';
import Usera from './icone/user2.svg';
import Корзина from './icone/icon-mallbag.svg';
import UserOpenImg from './icone/userOpen.svg';
import X from './icone/icon-cancel.svg';
import Звезда from './icone/Icon-Reviews.svg';
import Выход from './icone/Icon-logout.svg';
import "./UserNaw.scss"





function UserNaw()
{
  const { data: session } = useSession();

  const pathname = usePathname();

  const blockRef = useRef<HTMLDivElement>(null); 
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [canShowTooltip, setCanShowTooltip] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  const isFromNavLink =  pathname === "/Account"

    
  const CurrentIcon = (isOpen || isFromNavLink) ? UserOpenImg : Пользователь;

  function UserOpen()
  {
    setIsOpen(!isOpen)
    setCanShowTooltip(false)
  }

  function Logout()
  {
    dialogRef.current?.showModal();
  }


  useEffect(() => {
   
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          isOpen && 
          blockRef.current && !blockRef.current.contains(target) &&
          buttonRef.current && !buttonRef.current.contains(target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };

  }, [isOpen]); 
    

    

    return(
      <>
        {(session) && (
          <>
           <div className='btn-user'>
              <button  ref={buttonRef}  className={`btn  ${canShowTooltip ? 'can-show' : ''} ${isOpen && "clicked"}`} onClick={UserOpen} onMouseLeave={() => setCanShowTooltip(true)}>
                <span className="tooltip">Пользователь</span>
                <CurrentIcon  className={`${isOpen || isFromNavLink ? `UserOpenImg` : ``}`} alt="" />
              </button>
                    
              <div ref={blockRef}  className={`select ${isOpen ? "openUser" : ""}`}>
                <ul className='select-list'>
                   <li className='item' >
                        <Link href="/Account" className='itemProfil' onClick={() => setIsOpen(false)}>
                           <Usera alt="" />
                           <p className='item__p'>Manage My Account</p>
                        </Link>
                    </li>
                    <li className='item'>
                        <Корзина alt="" />
                        <p>My Order</p>
                    </li>
                    <li className='item'>
                        <X alt="" />
                        <p>My Cancellations</p>
                    </li>
                    <li className='item'>
                        <Звезда alt="" />
                        <p>My Reviews</p>
                    </li>
                    <li className='item-btn item'>
                        <button onClick={Logout}>
                          <Выход  alt="" />
                          <p>Logout</p>
                        </button>
                    </li>
                </ul>
              </div>
           </div>
           <Dialog ref={dialogRef}/>
          </>
        )}
        
      </>
    )
}

export default UserNaw