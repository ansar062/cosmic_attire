import { React } from 'react'
import { Link } from 'react-router-dom'
import './orderdetails.scss'

const OrderDetails = () => {
    return (
        <div className="orderdetails">
            <div className="howtoorder">
                <img src="https://static.vecteezy.com/system/resources/previews/006/867/385/original/gradient-of-place-order-design-online-choosing-items-vector.jpg" alt="" />
                <div className="detailss">
                    <h1>How to Place an Order</h1>
                    <p>
                        To place an Order you have to contact us on any social media platform.
                        As we are accepting Custom Order so you can also send us what
                        Design you want on your Cosmetics.
                    </p>
                    <Link className='link' to='/contactus'><button>Contact us</button></Link>
                    
                </div>
            </div>
            <div className="shippinginfo">
                <div className="detailss2">
                    <h1>Shipping Info</h1>
                    <p>
                        After placing and confirming the order we will discuss your Address, 
                        Country of shipping and Shipping Charges.
                    </p>
                </div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/217/374/small/vector-icebreaker-ship-illustration.jpg" alt="" />
            </div>
            <div className="paymentmethods">
                <img src="https://st4.depositphotos.com/1001599/28678/v/450/depositphotos_286789878-stock-illustration-open-banking-platform-concept-vector.jpg" alt="" />
                <div className="details3">
                    <h1>Payment Methods</h1>
                    <p>
                        All Kind of Payment Methods are accepted.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails