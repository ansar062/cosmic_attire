import React from "react";
import Slider from "../../component/Slider/slider";
import "./home.scss"
import FeaturedProduct from "../../component/FeaturedProducts/featuredproducts";
import Categories from "../../component/Categories/categories";

const Home = () => {
    return (
        <div className="home">
            <Slider/>
            <FeaturedProduct type = "featured"/>
            <Categories/>
            <FeaturedProduct type = "trending"/>
        </div>
    )
}

export default Home