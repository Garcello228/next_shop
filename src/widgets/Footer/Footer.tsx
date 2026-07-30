import './Footer.scss'
import Lol from './icone/QrCode.svg';
import play from './images/GooglePlay.png'; 
import apple from './images/AppStore.png'; 
import F from './icone/Icon-Facebook.svg';
import T from './icone/Icon-Twitter.svg';
import I from './icone/icon-instagram.svg';
import Inl from './icone/Icon-Linkedin.svg';
import Cam from "./icone/iconSend.svg"
import Image from "next/image";





function Footer() {
    
   
    return (
        <>
            
        <footer className='footer container'>
            <ul className='footer__list'>
               <li className='item'>
                 <div className='item__text первый'>
                    <h4>Exclusive</h4>
                    <h5>Subscribe</h5>
                    <p>Get 10% off your first order</p>
                 </div>
                 <div  className='item__input'>
                  <input  type="email" placeholder="Enter your email" />
                  <Cam className='Cam'/>
                 </div>
               </li>
               <li className='item'>
                 <h4 className='основной'>Support</h4>
                 <div className='p'>
                  <p>11 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                   <p>exclusive@gmail.com</p>
                   <p>+88015-88888-9999</p>
                 </div>
               </li>
               <li className='item'>
                <h4 className='основной'>Account</h4>
                <div className='p'>
                 <p>My Account</p>
                 <p>Login / Register</p>
                 <p>Cart</p>
                 <p>Wishlist</p>
                 <p>Shop</p>
                </div>
               </li>
               <li className='item'>
                <h4 className='основной'>Quick Link</h4>
                <div className='p'>
                 <p>Privacy Policy</p>
                 <p>Terms Of Use</p>
                 <p>FAQ</p>
                 <p>Contact</p>
                          
                </div>
               </li>
               <li className='item'>
               <h4 className='основной'>Download App</h4>
               <p className='last_p'>Save $3 with App New User Only</p>
               <div className='grid'>
                <Lol className='Qr' alt="" />
                <div className='flex'>
                 <Image src={play} className='Play' alt="" />
                 <Image src={apple} className='Apple' alt="" />
                </div>
               </div>
               <div className='maseg'>
                <a href="">
                 <F alt="" />
                </a>
                <a href="">
                 <T  alt="" />
                </a>
                <a href="">
                 <I  alt="" />
                </a>
                <a href="">
                 <Inl alt="" />
                </a>
               </div>
               </li>
            </ul>
        </footer>
        
        </>

    )

}




export default Footer