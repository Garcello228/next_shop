import LoginForm from '@/yfeatures/Login/LoginForm';
import Image from 'next/image';
import myImg from './images/Side Image.png';
import "./LoginPage.scss"


async function LoginPage()
{
  

  return (

    <>
        <section className="Registor container">
            <div className='Registor__content'>
               <Image src={myImg} alt="" />
               <LoginForm />
            </div>
         </section>
      
    </>
  )
    
}

export default LoginPage 