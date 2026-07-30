import Image from "next/image"
import { IProduct } from "@/state/services/api"
import "./Imgs.scss"

interface IImags {
    data: IProduct
}

function Imags({data} : IImags)
{
   
    return(
        <div className='detalis__imgs'>
            <ul className='imgs__list'>
                <li className='imgs__list-item осн'>
                    <Image src={data.img} alt="" className={data.name === `AK-900 Wired Keyboard` ? `img-клава-осн` : ``} width={180} height={190}/>
                </li>
                <li className='imgs__list-item доп д'>
                    <Image src={data.img} alt="" className={data.name === `AK-900 Wired Keyboard` ? `img-клава-доп` : ``} width={180} height={190}/>
                </li>
                <li className='imgs__list-item доп д1'>
                    <Image src={data.img} alt="" className={data.name === `AK-900 Wired Keyboard` ? `img-клава-доп` : ``} width={180} height={190}/>
                </li>
                <li className='imgs__list-item доп д2'>
                    <Image src={data.img} alt="" className={data.name === `AK-900 Wired Keyboard` ? `img-клава-доп` : ``} width={180} height={190}/>
                </li>
                <li className='imgs__list-item доп д3'>
                     <Image src={data.img} alt="" className={data.name === `AK-900 Wired Keyboard` ? `img-клава-доп` : ``} width={180} height={190}/>
                </li>
            </ul>
        </div>
    )
}

export default Imags