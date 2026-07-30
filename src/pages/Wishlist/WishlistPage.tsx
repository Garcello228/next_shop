import { auth } from "@/app/api/auth/[...nextauth]/route";
import WishlistWid from "@/widgets/Wishlist/WishlistWid";


async function WishlistPage()
{

    const session = await auth();
    console.log("session", session)
    
    if (!session) {
        return(
            <section className="Wishlist container pading">
                <h1>Вы не зарагестрированы или не вошли в аккаунт чтобы пользоваться Wishlist</h1>
            </section>
        )
    }
   
    return(
        <WishlistWid/>
    )
}

export default WishlistPage