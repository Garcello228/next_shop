"use client"

import Up from "./icone/Up.svg"
import "./Strelka.scss"


function Strelka()
{

    function UpBtn()
    {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
    }
   
    return(
        <div className="Strelka">
          <button className="Strelka-svg" onClick={UpBtn}>
          <Up/>
          </button>
        </div>
    )
}

export default Strelka