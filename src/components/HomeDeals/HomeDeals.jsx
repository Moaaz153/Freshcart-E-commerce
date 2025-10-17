import { Link } from "react-router";
import ProductCard from "../ProductCards/ProductCard";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../services/product-service";
import Loading from "../Loading/Loading";
import { calcTimeLeft } from "../../utils/counterDown";
import { ProductsContext } from "../../context/ProductsContext";

export default function HomeDeals() {

    // const [products, setProducts] = useState(null)
    // const [isLoading, setIsLoading] = useState(true)
    const [timeLeft, setTimeLeft] = useState({hours:0, minutes:0, seconds:0})

    // async function fetchProducts() {
    //     try {
    //         setIsLoading(true)
    //         const response = await getProducts()
    //         if (response.success) {
    //             setIsLoading(false)
    //             setProducts(response.data.data)
    //         }
    //     } catch (error) {
    //         setIsLoading(false)
    //     }
    // }



    // useEffect(()=>{
    //     fetchProducts()
    // }, [])
    const {isLoading, isError, Products, error} = useContext(ProductsContext)


    useEffect(()=>{
       const timer = setInterval(()=>{
            const newTimeLeft = calcTimeLeft()
            setTimeLeft(newTimeLeft)
        }, 1000)
        return function (){
            clearInterval(timer)
        }
    }, [])

       if(isLoading){
            return <Loading/>
        }

        const deals = Products.filter((product)=> product.priceAfterDiscount).slice(0,5)
        
        

    return (
        <>
            <section>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div >
                            <h2 className="text-2xl font-bold mb-3">Deals of the day</h2>
                            <div className="flex gap-2 items-center">
                                <p >Offers end in:</p>
                                <div className="counter flex gap-2 items-center">
                                    <div className="text-sm rounded-md flex justify-center items-center text-white bg-gray-900 size-7">
                                        {String(timeLeft.hours).padStart(2, 0)}
                                    </div>
                                    <span>:</span>
                                    <div className="text-sm rounded-md flex justify-center items-center text-white bg-gray-900 size-7">
                                        {String(timeLeft.minutes).padStart(2, 0)}
                                    </div>
                                    <span>:</span>
                                    <div className="text-sm rounded-md flex justify-center items-center text-white bg-gray-900 size-7">
                                        {String(timeLeft.seconds).padStart(2, 0)}
                                    </div>
                                    <span>:</span>
                                </div>
                            </div>
                        </div>
                        <Link to={"/deals"} className="text-primary-600 hover:text-primary-700 transition-colors duration-200">View Deals</Link>
                    </div>
                    <div className="grid py-7 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {deals.map((product)=> <ProductCard key={product.id} productInfo={product} /> )}
                    </div>
                </div>
            </section>
        </>
    )
}
