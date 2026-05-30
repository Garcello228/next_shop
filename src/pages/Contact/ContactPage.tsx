import ContactAdmin from "@/widgets/Contact/ContactAdmin"
import "./ContactPage.scss"
import ContactUser from "@/yfeatures/Contact/ContactUser"


function ContactPage()
{
   
    return(
        <section className="Contact container pading">
            <header className="Contact__header">
                <p><span>Home /</span> Cantact</p>
            </header>
            <main className="Contact__main">
                <ContactAdmin />
                <ContactUser />
            </main>
        </section>
    )
}

export default ContactPage