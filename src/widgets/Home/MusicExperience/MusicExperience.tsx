import Image from "next/image"
import "./MusicExperience.scss"
import колонка from "./icone/колонка.png"

function MusicExperience()
{
   
    return(
        <section className="MusicExperience sectionHome">
            <div className="MusicExperience__content">
                <div className="info">
                    <p className="info__над">Categories</p>
                    <h1 className="info__title">Enhance Your Music Experience</h1>
                    <div className="info__time">
                        <ul className="list">
                            <li className="list-item">
                                <h4>23</h4>
                                <p>Hours</p>
                            </li>
                            <li className="list-item">
                                <h4>05</h4>
                                <p>Days</p>
                            </li>
                            <li className="list-item">
                                <h4>59</h4>
                                <p>Minutes</p>
                            </li>
                            <li className="list-item">
                                <h4>35</h4>
                                <p>Seconds</p>
                            </li>
                        </ul>
                    </div>
                    <button className="info__btn">Buy Now!</button>
                </div>
                <div className="img">
                    <Image src={колонка} alt="" className="img__кол"/>
                </div>
            </div>
        </section>
    )
}

export default MusicExperience
                    