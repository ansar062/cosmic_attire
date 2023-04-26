import React from "react";
import Card from "../Card/card";
import "./featuredproducts.scss"
import { useState, useEffect } from "react";
import { db } from '../backend/firebase'
import { collection, getDocs } from 'firebase/firestore'

const FeaturedProduct = ({type}) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const featuredProductsCollectionRef = collection(db, "products/featured/featuredproducts")
    useEffect(
        () => {
            const getProducts = async () => {
                const data = await getDocs(featuredProductsCollectionRef);
                setFeaturedProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }
            getProducts()
        }, []
    )
    
    return (
        <div className="featuredproducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Introducing our top picks from our latest clothing collection!
                    Our featured products showcase the epitome of style, comfort,
                    and quality. From trendy statement pieces to timeless classics,
                    our clothing brand offers something for everyone.
                </p>
            </div>
            <div className="bottom">
                {featuredProducts.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProduct