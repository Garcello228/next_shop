import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HeaderAccount from "@/widgets/Account/Header/HeaderAccount";
import ContentAccount from "@/widgets/Account/content/ContentAccount";
import "./AccountPage.scss"


async function AccountPage()
{
    const session = await auth();

    if (!session) {
      redirect("/login?error=auth_required");
    }

    return(
        <section className="Profile container">
           <HeaderAccount />
           <ContentAccount />
        </section>
    )
}

export default AccountPage