import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeSliderImg from "../../assets/home-slider-1.png"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping, faMinus, faPlus, faRotateLeft, faShareNodes, faTruck, faStar } from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from "react-router"
import { useState } from "react"
import ProductDetails from "../../pages/ProductDetails/ProductDetails"
import ProductInfoTap from "./ProductInfoTap"
import ReviewsTap from "./ReviewsTap"
import ShippingTap from "./ShippingTap"

export default function ProductDetailsTabs({productDetails}) {

    const [activeTap,setActiveTap] = useState('details')

    function getActiveTap(){
        switch (activeTap){
            case 'details' : 
            return <ProductInfoTap productDetails={productDetails}/>
            case "review" : 
            return <ReviewsTap/>
            case "shipping" :
            return <ShippingTap/>
            default : 
            return <ProductInfoTap/>
        }
    }



    return (
        <>
            <div className="py-8 container">
                <div className="px-6 border-b  border-gray-400/30">
                    <div className="flex items-center gap-10">
                        <button className={`px-6 py-4 font-medium ${activeTap == 'details' ? "text-primary-600 border-b-2 border-primary-600" : "hover:text-primary-600 text-gray-600"}`} onClick={()=> setActiveTap("details")}>
                            Product Details
                        </button>
                        <button className={`px-6 py-4 font-medium ${activeTap == 'review' ? "text-primary-600 border-b-2 border-primary-600" : "hover:text-primary-600 text-gray-600"}`} onClick={()=> setActiveTap("review")}>
                            Reviews (149)
                        </button>
                        <button className={`px-6 py-4 font-medium ${activeTap == 'shipping' ? "text-primary-600 border-b-2 border-primary-600" : "hover:text-primary-600 text-gray-600"}`} onClick={()=> setActiveTap("shipping")}>
                            Shipping & Returns
                        </button>
                    </div>
                </div>
                <div className="p-6 space-y-8">
                    {getActiveTap()}
                </div>
            </div>
        </>
    )
}
