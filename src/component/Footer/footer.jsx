import {React, useRef} from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./footer.scss";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const Footer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d9cnox7', 'template_mucqs1q', form.current, 'c_pu3j8xZNKLts-sA')
          .then((result) => {
              console.log('message sent');
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="container">
            <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <Link className="link" to ="/products/women">Women</Link>
                    <Link className="link" to ="/products/men">Men</Link>
                    <Link className="link" to ="/products/gymtank">Gym Tank</Link>
                    <Link className="link" to ="/products/featured">Featured</Link>
                    <Link className="link" to ="/products/trending">Trending</Link>

                </div>
                <div className="item">
                    <h1>Help & Support</h1>
                    <Link className="link" to ="/faq">FAQ</Link>
                    <Link className="link" to ="/aboutus">About us</Link>
                    <Link className="link" to ="/orderdetails">How to Order</Link>
                    <Link className="link" to ="/orderdetails">Shipping Info</Link>
                    <Link className="link" to ="/orderdetails">Payment Methods</Link>
                </div>
                <div className="item">
                    <h1>Contact Us</h1>
                    <div className="icons">
                        <a href="https://wa.me/+923214613759" > <WhatsAppIcon/></a>
                        <a href="https://www.facebook.com/profile.php?id=100092012469108&mibextid=ZbWKwL"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/cosmic_attire_cloth/"><InstagramIcon /></a>
                        <a href="mailto:mmansar0001@gmail.com"><MailOutlineIcon /></a>
                    </div>
                    <div className="join">
                        <h1>Join Us</h1>
                        <form ref={form} className="mail">
                            <input type="text" name="user_mail" placeholder="Enter your e-mail..."/>
                            <button onClick={sendEmail}>JOIN US</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Footer