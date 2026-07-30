"use client"

import { useRef } from "react"
import Стрелка from "./icone/DropDown.svg"
import "./HomeHeaderLeft.scss"


function HomeHeaderLeft()
{
    const Стрелка1Ref = useRef<HTMLLIElement>(null);
    const Стрелка2Ref = useRef<HTMLLIElement>(null);

    const handleClick = (ref: React.RefObject<HTMLLIElement | null>) => {
      if (ref.current) {
        const img = ref.current.querySelector('svg'); 
        if (img) {
          img.classList.toggle('activeстелка');
        }
      }
    };
   
    return(
        <div className='left'>
            <div className='left__content'>
                <ul className='list'>
                    <li className='list-item some' ref={Стрелка1Ref} onClick={() => handleClick(Стрелка1Ref)}>
                        <p className='tille'>Woman’s Fashion</p>
                        <button  >
                            <Стрелка alt="" />
                        </button>
                    </li>
                    <li className='list-item some' ref={Стрелка2Ref} onClick={() => handleClick(Стрелка2Ref)}>
                        <p className='tille'>Men’s Fashion</p>
                        <button >
                            <Стрелка alt="" />
                        </button>
                    </li>
                    <li className='list-item'>
                        <a className='tille'>Electronics</a>
                    </li>
                    <li className='list-item'>
                        <a className='tille'>Home & Lifestyle</a>
                    </li>
                    <li className='list-item'>
                        <a className='tille'>Medicine</a>
                    </li>
                    <li className='list-item'>
                        <a className='tille'>Sports & Outdoor</a>
                    </li>
                    <li className='list-item'>
                        <a className='tille'>Baby’s & Toys</a>
                    </li>
                    <li className='list-item'>
                        <a className='tille'>Groceries & Pets</a>
                    </li>
                    <li className='list-item'>
                        <a className='tille'>Health & Beauty</a>
                    </li>
                </ul>
             </div>
        </div>
    )
}

export default HomeHeaderLeft