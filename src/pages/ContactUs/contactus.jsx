import { React , useRef} from 'react'
import emailjs from '@emailjs/browser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './contactus.scss'

const ContactUS = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d9cnox7', 'template_8xm035i', form.current, 'c_pu3j8xZNKLts-sA')
          .then((result) => {
              console.log('message sent');
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section className="sectionss">
            <div className="contactss">
                <h2>Contact Us</h2>
                <p>Welcome to our Contact Us page! We value your feedback, inquiries, and comments, and we're here to assist you in any way we can. Whether you have a question about our products, need support with your order, or want to share your thoughts on our services, we're ready to listen and provide prompt assistance.</p>
            </div>
            <div className="containerc">
                <div className="contactinfo">
                    <div className="box">
                        <div className="icon">
                            <LocationOnIcon />
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Lahore, Pakistan</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <EmailIcon />
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>mmansar000@gmail.com</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <PhoneIcon />
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+923214613759</p>
                        </div>
                    </div>
                </div>
                <div className="contactform">
                    <form ref={form} action="" onSubmit={sendEmail}>
                        <h2>Send Message</h2>
                        <div className="inputbox">
                            <input type="text" name="user_name" required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputbox">
                            <input type="text" name="user_email" required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputbox">
                            <textarea name="message" required="required"></textarea>
                            <span>Type your message...</span>
                        </div>
                        <div className="inputbox">
                            <input type="submit"  value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUS