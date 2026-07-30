"use client"

import { useSession } from "next-auth/react";

import "./HeaderAccount.scss"


function HeaderAccount()
{
    const { data: session } = useSession();
    return(
        <div className="header__Account">
            <div className="Account__путь">
                <p className="путь"><span className="span__путь">Home /</span> My Account</p>
            </div>
            <p>Welcome! <span className="span__name">{session?.user.name}</span></p>
        </div>
    )
}

export default HeaderAccount