import React from "react"
import Красный from "./icone/красный.svg"
import "./HeaderHome.scss"


interface ITitleHome{
   подзаголовок: string,
   title: string,
}

function TitleHome({ подзаголовок,  title } : ITitleHome)
{
  return(
    <div className="header__title">
      <div className="supertitles">
        <Красный alt="" />
        <h5 className="supertitles__title">{подзаголовок}</h5>
      </div>
      <h1>{title}</h1>
    </div>
   )
}


export default React.memo(TitleHome, (prevProps, nextProps) => {
  return (
    prevProps.подзаголовок === nextProps.подзаголовок &&
    prevProps.title === nextProps.title
  );
});