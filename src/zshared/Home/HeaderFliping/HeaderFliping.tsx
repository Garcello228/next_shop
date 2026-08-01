import Leftimg from "./icone/left.svg"
import Rightimg from "./icone/right.svg"
import "./HeaderFliping.scss"

interface IHeaderFliping{
    offset: number,
    setOffset: React.Dispatch<React.SetStateAction<number>>
}

function HeaderFliping({offset, setOffset} : IHeaderFliping)
{
    const step = 200; 

    function left()
    {
        
       if (offset < 0) { 
          setOffset(prev => prev + step);
       }
       
    }

    function right()
    {
       if (offset > -800) {
          setOffset(prev => prev - step);
       }
       
    }
   
    return(
        <div className="flipping">
            <button className={`flipping__btn ${offset === 0 && `btn_d`}`} onClick={left} disabled={offset === 0}>
                <Leftimg alt="" />
            </button>
            <button className={`flipping__btn ${offset === -800 && `btn_d`}`} onClick={right} disabled={offset === -800}>
                <Rightimg alt="" />
            </button>
        </div>
    )
}

export default HeaderFliping