import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./slider.scss";



const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const Data =[
        "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/247298/pexels-photo-247298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1)
    }

    return (
        <div className="slider">
            <div className="container" >
                <img src={Data[currentSlide]} alt="" />
            </div>
            <a className="prev" onClick={prevSlide}>
                <ArrowBackIosIcon/>
            </a>
            <a className="next" onClick={nextSlide}>
                <ArrowForwardIosIcon/>
            </a>
        </div>
    )
}

export default Slider