import "./ContactAdmin.scss"
import Tel from './icone/phone.svg';
import Mail from './icone/mail.svg';

function ContactAdmin()
{
    return(
        <div className="Contact__admin">
            <div className="admintel">
                <div className="admintel__title">
                   <Tel />
                    <h4>Call To Us</h4>
                </div>
                <div className="admintel__info">
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </div>
            </div>
            <hr />
            <div className="adminemail">
                <div className="adminemail__title">
                    <Mail />
                    <h4>Write To US</h4>
                </div>
                <div className="adminemail__info">
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactAdmin