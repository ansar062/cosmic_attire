import React, { useState } from "react";
import './product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useLocation } from "react-router-dom";

const Product = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const [selectedImage, setImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images = [
        `${item.img}`,
        `${item.img2}`
    ]
    if(!item){
        return <div className="loading">Hy Ansar</div>
    }
    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={item.img} alt="" onClick={e=>setImage(0)}/>
                    <img src={item.img2} alt="" onClick={e=>setImage(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImage]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{item.title}</h1>
                <span className="price">${item.price}</span>
                <p>{item.desc}</p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(prev=>prev ===1 ? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add">
                <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: {item.tags}</span>
                    <hr />
                    <div className="info">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>ADDITIONAL INFORMATION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

