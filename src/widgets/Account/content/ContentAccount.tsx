import ContentLeft from "./left/ContentLeft"
import EditAccount from "@/yfeatures/Account/EditAccount"
import "./ContentAccount.scss"


function ContentAccount()
{
   
    return(
        <div className="content">
            <ContentLeft />
            <EditAccount />
        </div>
    )
}

export default ContentAccount