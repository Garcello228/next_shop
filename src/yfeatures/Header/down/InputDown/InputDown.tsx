import InputDowna from "./icone/Component 2.svg"
import "./InputDown.scss"

function InputDown()
{
   
    return(
        <div className="input">
            <input type="text" placeholder="What are you looking for?"/>
            <InputDowna className="InputDowna"/>
        </div>
                                
    )
}

export default InputDown