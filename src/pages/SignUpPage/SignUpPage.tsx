import SignUpRegistor from "@/yfeatures/SignUp/SignUpRegistor"
import Image from 'next/image';
import myImg from './images/Side Image.png';
import "./SignUpPage.scss"


async function SignUpPage()
{

   
   return(
        <section className="Registor container">
            <div className='Registor__content'>
               <Image src={myImg} alt="" />
               <SignUpRegistor />
            </div>
        </section>
   )
}

export default SignUpPage