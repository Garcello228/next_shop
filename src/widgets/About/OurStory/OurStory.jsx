import Image from 'next/image';
import "./OurStory.scss"
import img from './img/Side Image.png';

function OurStory()
{
   
    return(
        <section className="OurStory">
            <header className="OurStory__header">
                <p ><span>Home /</span> About</p>
            </header>
            <main className="OurStory__contect">
                <div className="text">
                    <h1 className="text__title">Our Story</h1>
                    <div className="text__p">
                        <p> Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace 
                            with an active presense in Bangladesh. Supported by wide range of tailored marketing, 
                            data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
                            customers across the region. 
                        </p>
                        <p> Exclusive has more than 1 Million products to offer, growing at a very fast. 
                           Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                </div>
                <Image src={img} alt="" />
            </main>
        </section>
    )
}

export default OurStory
                    
                