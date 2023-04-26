import React, { useState } from "react";
import "./products.scss"
import Lists from "../../component/Lists/lists";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../../component/backend/firebase'



const Products = () => {
    //
    const catid = useParams().id
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    //
    //firebase backend
    
    const [categoryGymtankProducts, setcategoryGymtankProducts] = useState([]);
    const [categoryHoodieProducts, setcategoryHoodieProducts] = useState([]);
    const [categoryMenProducts, setcategoryMenProducts] = useState([]);
    const [categoryWomenProducts, setcategoryWomenProducts] = useState([]);
    const [categoryShortsProducts, setcategoryShortsProducts] = useState([]);
    const [categoryTanktopProducts, setcategoryTanktopProducts] = useState([]);
    const [categoryTracksuitProducts, setcategoryTracksuitProducts] = useState([]);
    const [categoryTshirtsProducts, setcategoryTshirtsProducts] = useState([]);
    const [categoryFeaturedProducts, setcategoryFeaturedProducts] = useState([]);

    const categoryGymtankProductsCollectionRef = collection(db, "products/gymtank/gymtankproducts")
    const categoryFeaturedProductsCollectionRef = collection(db, "products/featured/featuredproducts")
    const categoryHoodieProductsCollectionRef = collection(db, "products/hoodies/hoodiesproducts")
    const categoryMenProductsCollectionRef = collection(db, "products/men/menproducts")
    const categoryWomenProductsCollectionRef = collection(db, "products/women/womenproducts")
    const categoryShortsProductsCollectionRef = collection(db, "products/shorts/shortsproducts")
    const categoryTanktopProductsCollectionRef = collection(db, "products/tanktop/tanktopproducts")
    const categoryTracksuitProductsCollectionRef = collection(db, "products/tracksuit/tracksuitproducts")
    const categoryTshirtsProductsCollectionRef = collection(db, "products/tashirts/tshirtsproducts")
    var categoryProducts = categoryGymtankProducts;
    if(catid === 'gymtank'){
        categoryProducts = categoryGymtankProducts;
    }
    else if(catid === 'men'){
        categoryProducts = categoryMenProducts;
    }
    else if(catid === 'women'){
        categoryProducts = categoryWomenProducts;
    }
    else if(catid === 'hoodie'){
        categoryProducts = categoryHoodieProducts;
    }
    else if(catid === 'shorts'){
        categoryProducts = categoryShortsProducts;
    }
    else if(catid === 'tanktop'){
        categoryProducts = categoryTanktopProducts;
    }
    else if(catid === 'tracksuit'){
        categoryProducts = categoryTracksuitProducts;
    }
    else if(catid === 'tshirts'){
        categoryProducts = categoryTshirtsProducts;
    }
    else if(catid === 'featured'){
        categoryProducts = categoryFeaturedProducts;
    }
    
    useEffect(
        () => {
            const getProducts = async () => {
                const gymtankData = await getDocs(categoryGymtankProductsCollectionRef);
                const hoodiesData = await getDocs(categoryHoodieProductsCollectionRef);
                const menData = await getDocs(categoryMenProductsCollectionRef);
                const womenData = await getDocs(categoryWomenProductsCollectionRef);
                const shortsData = await getDocs(categoryShortsProductsCollectionRef);
                const tanktopData = await getDocs(categoryTanktopProductsCollectionRef);
                const tracksuitData = await getDocs(categoryTracksuitProductsCollectionRef);
                const tshirtsData = await getDocs(categoryTshirtsProductsCollectionRef);
                const featuredData = await getDocs(categoryFeaturedProductsCollectionRef);

                setcategoryFeaturedProducts(featuredData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryGymtankProducts(gymtankData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryHoodieProducts(hoodiesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryMenProducts(menData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryWomenProducts(womenData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryShortsProducts(shortsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryTanktopProducts(tanktopData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryTracksuitProducts(tracksuitData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setcategoryTshirtsProducts(tshirtsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

                
            }
            getProducts()
        }, []
    )
    return (
        <div className="products">
            <div className="left">
                <div className="filteritems">
                    <h1>Products Categories</h1>
                    <div className="inputitems">
                        <input type="checkbox" id="1" value={1}/>
                        <label htmlFor="1">Women</label>
                    </div>
                    <div className="inputitems">
                        <input type="checkbox" id="2" value={2}/>
                        <label htmlFor="1">Men</label>
                    </div>
                    <div className="inputitems">
                        <input type="checkbox" id="3" value={3}/>
                        <label htmlFor="1">T-Shirt</label>
                    </div>
                    <div className="inputitems">
                        <input type="checkbox" id="4" value={4}/>
                        <label htmlFor="1">Hoodies</label>
                    </div>
                    <div className="inputitems">
                        <input type="checkbox" id="5" value={5}/>
                        <label htmlFor="1">Gym Tank</label>
                    </div>
                    <div className="inputitems">
                        <input type="checkbox" id="6" value={6}/>
                        <label htmlFor="1">Shorts</label>
                    </div>
                    <div className="inputitems">
                        <input type="checkbox" id="7" value={7}/>
                        <label htmlFor="1">Tank Top</label>
                    </div>
                    <div className="inputitems">
                        <input type="checkbox" id="8" value={8}/>
                        <label htmlFor="1">Track Suit</label>
                    </div>
                </div>
                <div className="filteritems">
                    <h1>Filter by Price</h1>
                    <div className="inputitems">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filteritems">
                    <h1>Sort by</h1>
                    <div className="inputitems">
                        <input type="radio" id="hh" value="asc" name="price" onChange={e=>setSort("asc")}/>
                        <label htmlFor="hh">Price (Lowerst First)</label>
                    </div>
                    <div className="inputitems">
                        <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
                        <label htmlFor="desc">Price (Highest First)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img 
                className="catImg"
                src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Lists categoryProducts={categoryProducts}/>
            </div>
        </div>
    )
}

export default Products