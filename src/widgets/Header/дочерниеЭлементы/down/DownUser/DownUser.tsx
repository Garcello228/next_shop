import WishlistNaw from "@/zentities/DownHeader/Wishlist/WishlistNaw"
import BasketNaw from "@/zentities/DownHeader/Basket/BasketNaw"
import UserNaw from "@/zentities/DownHeader/User/UserNaw"
import "./DownUser.scss"


async function DownUser()
{

    return(
       <div className="icone">
           <WishlistNaw />
           <BasketNaw />
           <UserNaw />
       </div>
    )
}

export default DownUser