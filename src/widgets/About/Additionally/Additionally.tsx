import "./Additionally.scss"
import Машина from "./icone/1.svg"
import Наушники from "./icone/2.svg"
import Щит from "./icone/3.svg"



function Additionally() {
  
    
    return(
        <section className="Additionally">
            <div className="Additionally__content">
                <ul className="list">
                    <li className="list-item">
                        <Машина alt="" className="img__Additionally"/>
                        <div className="info">
                            <h3>FREE AND FAST DELIVERY</h3>
                            <p>Free delivery for all orders over $140</p>
                        </div>
                    </li>
                    <li className="list-item">
                        <Наушники alt="" className="img__Additionally" />
                        <div className="info">
                            <h3>24/7 CUSTOMER SERVICE</h3>
                            <p>Friendly 24/7 customer support</p>
                        </div>
                    </li>
                    <li className="list-item">
                        <Щит alt=""  className="img__Additionally"/>
                        <div className="info">
                            <h3>MONEY BACK GUARANTEE</h3>
                            <p>We reurn money within 30 days</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Additionally