import Image from "next/image"
import TitleHome from "@/zshared/Home/HeaderHome"
import ps5 from "./icone/ps5.png"
import woman from "./icone/woman.png"
import ткань from "./icone/ткань.png"
import gucci from "./icone/gucci.png"
import "./NewArrival.scss"


function NewArrival()
{
  
    return(
        <section className="NewArrival sectionHome">
            <div className="NewArrival__content">
             <header className="NewArrival__header">
                <TitleHome подзаголовок="Featured" title="New Arrival"/>
             </header>
             <div className="content">
                <div className="ps5">
                    <Image className="ps5__img" src={ps5} alt="" />
                    <div className="ps5__content">
                        <h2 className="title">PlayStation 5</h2>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
                <div className="women">
                    <div className="women__content">
                        <h2 className="title">Women’s Collections</h2>
                        <p>Featured woman collections that give you another vibe.</p>
                        <a href="#">Shop Now</a>
                    </div>
                    <Image className="women__img" src={woman} alt="" />
                </div>
                <div className="ткань">
                    <Image className="ткань__img" src={ткань} alt="" />
                    <div className="ткань__content">
                        <h2 className="title">Speakers</h2>
                        <p>Amazon wireless speakers</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
                <div className="Perfume">
                    <Image className="ткань__img" src={gucci} alt="" />
                    <div className="ткань__content">
                        <h2 className="title">Perfume</h2>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
             </div>
            </div>
        </section>
    )
}

export default NewArrival
                   