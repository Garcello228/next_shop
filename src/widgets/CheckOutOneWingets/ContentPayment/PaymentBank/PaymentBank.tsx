
import { Dispatch, SetStateAction } from "react"
import Image from "next/image"
import bk from "./icon/Bkash.png"
import visa from "./icon/Visa.png"
import mas from "./icon/Mastercard.png"
import nag from "./icon/Nagad.png"
import Btn from "./icon/btn.svg"
import Btnactive from "./icon/btnactive.svg"
import "./PaymentBank.scss"


interface IItemBtn {
    id: number,
    isOpen : number,
    setisOpen : Dispatch<SetStateAction<number>>,
    title: string
}

const ItemBtn = ({id, isOpen, setisOpen, title} : IItemBtn) => {

    const isActive = id === isOpen;
    const CurentSvg = isActive ? Btnactive : Btn

    return(
        <li className='choice__list-item' onClick={() => {setisOpen(id)}}>
            <CurentSvg  alt="" />
            <h3>{title}</h3>
        </li>
    )
}

interface IPaymentBank {
    isOpen: number,
    setisOpen: Dispatch<SetStateAction<number>>
}

function PaymentBank({isOpen, setisOpen} : IPaymentBank )
{

  
    return(
        <div className='payment__bank'>
            <div className='bank__choice'>
                <ul className='choice__list'>
                    <ItemBtn id={1} isOpen={isOpen} setisOpen={setisOpen} title={"Bank"}/>
                    <ItemBtn id={2} isOpen={isOpen} setisOpen={setisOpen} title={"Cash on delivery"}/>
                </ul>
            </div>
            <div className='bank__logo'>
                <ul className='logo-list'>
                    <li className='logo-list-item'>
                        <Image src={bk} alt="" />
                    </li>
                    <li className='logo-list-item'>
                        <Image src={visa} alt="" />
                    </li>
                    <li className='logo-list-item'>
                        <Image src={mas} alt="" />
                    </li>
                    <li className='logo-list-item'>
                        <Image src={nag} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PaymentBank