import Stars from "./cart/Vector.svg"
import Starsсер from "./cart/Vectorсер.svg"
import Starsпол from "./cart/starполовина.svg"
import "./Grade.scss"


const Grade =({ grade } : { grade : string}) => {

  const starsArray = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (Number(grade) >= starValue) {
      return Stars; 
    } else if (Number(grade) >= starValue - 0.5) {
      return Starsпол; 
    } else {
      return Starsсер;
    }
  });

  return (
    <div className="stars">
      <ul className="stars__list">
       {starsArray.map((CurrentStarSvg, index) => {
          return (
            <li key={index} className="stars__list-item">
              <CurrentStarSvg
                alt={`star-${index}`}
              />
            </li>
          );
       })}
      </ul>
    </div>
  );
}

export default Grade;