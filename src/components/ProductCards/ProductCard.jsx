import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCodeCompare, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/dicount";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ProductCard({productInfo}) {
    const {imageCover, title, category, priceAfterDiscount, price, ratingsAverage, ratingsQuantity, id} = productInfo
    const{handelAddingProductToCart} = useContext(CartContext)
    return (
        <>
            <div className="card relative rounded-xl shadow-lg overflow-hidden bg-white">
                <div>
                    <Link to={`/product/${id}`} className="block">
                        <img src={imageCover} alt="" className="h-60 mx-auto" />
                    </Link>
                    
                </div>
                <div className="p-4 space-y-3">
                    <div>
                        <span className="text-sm text-gray-500">{category.name}</span>
                        <h2 className="font-semibold cursor-pointer"><Link to={`/product/${id}`} className="line-clamp-1">{title}</Link></h2>
                    </div>
                    <div className="rating flex gap-2 items-center">
                        <Rating rating={ratingsAverage}/>
                        <span>{ratingsAverage}</span>
                        <span>{ratingsQuantity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="price space-x-3">
                            <span className="text-lg text-primary-600 font-bold">{priceAfterDiscount ? priceAfterDiscount : price} EGP</span>
                            {priceAfterDiscount && <del className="text-gray-500">{price} EGP</del>}
                        </div>
                        <button onClick={()=>{handelAddingProductToCart({id})}} className="btn bg-primary-600 hover:bg-primary-700 text-white rounded-full p-0 size-8">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
                <div className="action absolute top-4 right-4 flex flex-col gap-4 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
                    <button>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faCodeCompare} />
                    </button>
                    <button className="">
                        <Link to={`/product/${id}`}>
                            <FontAwesomeIcon icon={faEye} /> 
                        </Link>
                        
                    </button>
                </div>
                {priceAfterDiscount && <span className="badge absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md">-{calcDiscount({price,priceAfterDiscount})}%</span>}
            </div>
        </>
    )
}
