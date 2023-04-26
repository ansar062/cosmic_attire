import React from "react";
import './lists.scss'
import Card from "../Card/card";
import { useParams } from "react-router-dom";
const Lists = ({categoryProducts}) => {
    return (
        <div className="list">{categoryProducts?.map(item=>(
            <Card item= {item} key={item.id}/>
        ))}</div>
    )
}

export default Lists