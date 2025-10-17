import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeSliderImg from "../../assets/home-slider-1.png"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping, faMinus, faPlus, faRotateLeft, faShareNodes, faTruck, faStar } from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from "react-router"
import Rating from "../Rating/Rating"
import { calcDiscount } from "../../utils/dicount"
import ReactImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export default function ProductInfo({ productDetails }) {
    console.log(productDetails);
    const { id, title, description, imageCover, images, price, priceAfterDiscount, ratingsAverage, ratingsQuantity, category, quantity } = productDetails

    const{handelAddingProductToCart} = useContext(CartContext)
    return (
        <>
            <div className="container grid lg:grid-cols-2 lg:gap-12">
                {/* left side */}
                <div className="lg:w-96">
                    <ReactImageGallery showNav={false} showPlayButton={false} items={images.map((image)=> {
                        return {
                            original: image ,
                            thumbnail: image
                        }
                    })}/>
                </div>
                {/* right side */}
                <div className="space-y-8 rounded-md bg-white p-4 ">
                    <div className="flex justify-between items-center ">
                        <span className={`${quantity > 0 ? "bg-primary-100 text-primary-700" : "bg-red-100 text-red-500"} py-1 px-2 text-xs rounded `}>{quantity > 0 ? 'in stock' : "out of stock"}</span>
                        <div className="flex gap-2">
                            <button className="text-gray-500 hover:text-primary-600">
                                <FontAwesomeIcon icon={faShareNodes} />
                            </button>
                            <button className="text-gray-500 hover:text-primary-600">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>

                        </div>
                    </div>
                    <div className="space-y-4 border-b border-gray-400/30 pb-8">
                        <h2 className='text-2xl font-bold'>{title}</h2>
                        <div className="rating flex gap-2 items-center">
                            <Rating rating={ratingsAverage} />
                            <span className="text-gray-600 text-sm">{ratingsAverage} ({ratingsQuantity} reviews)</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <h2 className="text-3xl font-bold text-gray-900">{priceAfterDiscount || price} EGP</h2>
                            {priceAfterDiscount ? <> <del className="text-gray-500 text-lg">{price} EGP</del> <span className="py-1 px-2 text-sm rounded bg-red-100 text-red-700">save {calcDiscount({price,priceAfterDiscount})}%</span> </> : ""}
                            
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-700">{description}</p>
                    </div>
                  
                    <div className="flex items-center gap-12">
                        <span className="font-bold">Quantity:</span>
                        <div className="space-x-8 border border-gray-300 py-3 px-3">
                            <FontAwesomeIcon icon={faMinus} />
                            <span>1</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <p className="font-medium">Only {quantity} items left in stock</p>
                    </div>
                    <div className="flex items-center gap-4 border-b border-gray-400/30 pb-8">
                        <button onClick={()=>{handelAddingProductToCart({id})}} className="btn w-full py-4 text-white bg-primary-600">
                            <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                        </button>
                        <button className="btn w-full py-4 text-gray-700 bg-transparent border border-gray-300">Buy Now</button>
                    </div>
                    <ul className="flex justify-between items-center *:flex *:items-center *:gap-3 ">
                        <li>
                            <FontAwesomeIcon className="size-14 py-4 rounded-full bg-primary-200 text-2xl flex justify-center items-center text-primary-600" icon={faTruck} />
                            <div>
                                <h3 className="font-semibold">Free Delivery</h3>
                                <p className="text-gray-500">Orders $50 or more</p>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon className="size-14 py-4 rounded-full bg-primary-200 text-2xl flex justify-center items-center text-primary-600" icon={faRotateLeft} />
                            <div>
                                <h3 className="font-semibold">30 Days Return</h3>
                                <p className="text-gray-500">Satisfaction guaranteed</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
