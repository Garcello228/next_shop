import "./ContentLeft.scss"


function ContentLeft()
{
   return(
        <div className="content__left">
            <ul className="list">
                <li className="list-item">
                    <dt className="title">Manage My Account</dt>
                    <dd className="activeProfil">My Profile</dd>
                    <dd>Address Book</dd>
                    <dd>My Payment Options</dd>
                </li>
                <li className="list-item">
                    <dt className="title">My Orders</dt>
                    <dd>My Returns</dd>
                    <dd>My Cancellations</dd>
                </li>
                <li className="list-item">
                    <dt className="title">My WishList</dt>
                </li>
            </ul>
        </div>
    )
}

export default ContentLeft