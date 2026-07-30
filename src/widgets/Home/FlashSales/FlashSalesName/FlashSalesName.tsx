import Timer from "@/zentities/Home/Timer/Timer"
import TitleHome from "@/zshared/Home/HeaderHome"
import "./FlashSalesName.scss"


function FlashSalesName()
{
    return(
        <div className="FlashSales__name">
            <TitleHome подзаголовок="Today’s" title="Flash Sales"/>
            <Timer />
        </div>
    )
}

export default FlashSalesName