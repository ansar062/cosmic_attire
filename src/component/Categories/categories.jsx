import React from "react";
import "./categories.scss"
import {Link} from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className= 'link' to ='/products/gymtank' >Gymtank</Link>
                    </button>
                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className= 'link' to ='/products/women'>Women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className= 'link' to ='/products/men'>Men</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className= 'link' to ='/products/hoodies'>Hoodie</Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className= 'link' to ='/products/shorts'>Shorts</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className= 'link' to ='/products/tshirts'>T-Shirts</Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Categories