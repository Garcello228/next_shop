import { auth } from "@/app/api/auth/[...nextauth]/route";
import CartWid from "@/widgets/Cart/CartWid";


async function CartPage()
{
   
    const session = await auth();
 
    if (!session) {
        return(
         <section className="Wishlist container pading">
             <h1>Вы не зарагестрированы или не вошли в аккаунт чтобы пользоваться Cart</h1>
         </section>
        )
    }
   
    return(
      <CartWid session={session}/>
    )
   
}

export default CartPage
