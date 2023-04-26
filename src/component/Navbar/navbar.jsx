import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/cart";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleNavigationClick = () => {
        setOpenMenu(false);
    };

    const handleMenuToggle = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item" to='/'>
                        <img src="/img/2.png" alt="/" />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/women">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/men">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/featured">Featuring</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to='/'>COSMIC ATTIRE</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/aboutus">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/contactus">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons" onClick={() => setOpen(!open)}>
                        {/* <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon /> */}
                        <div className="charticon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>

                </div>
                <div className={`menu-toggle ${openMenu ? "is-clicked" : ""}`} onClick={handleMenuToggle}>
                    <MenuIcon />
                </div>
            </div>

            {open && <Cart />}
            {openMenu &&
                <div class="menubar">
                    <nav className={`main-navigation ${openMenu ? "is-active" : ""}`}>
                        <ul class="main-navigation">
                            <Link className="item" to='/'><div className="item" onClick={handleNavigationClick}>Home</div></Link>
                            <Link className="item" to='/aboutus'><div className="item" onClick={handleNavigationClick}>About us</div></Link>
                            <Link className="item" to='/contactus'><div className="item" onClick={handleNavigationClick}>Contact us</div></Link>
                            <div className="category">Category</div>
                            <Link className="item" to='/products/women'><div className="item" onClick={handleNavigationClick}>Women</div></Link>
                            <Link className="item" to='/products/men'><div className="item" onClick={handleNavigationClick}>Men</div></Link>
                            <Link className="item" to='/products/featured'><div className="item" onClick={handleNavigationClick}>Featured</div></Link>
                            <Link className="item" to='/products/trending'><div className="item" onClick={handleNavigationClick}>Trending</div></Link>

                        </ul>
                    </nav>
                </div>
            }
        </div>
    )
}

export default Navbar