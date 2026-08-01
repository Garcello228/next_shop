


interface ICartInfoHeader {
    data: string
}

function CartInfoHeader({data} : ICartInfoHeader)
{
   
   return(
    <header className='CartInfo__header'>
            <p> <span>Account / Gaming /</span> {data}</p>
    </header>
   )   
}

export default CartInfoHeader
    