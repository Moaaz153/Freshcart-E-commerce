import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import homeSliderImg from "../../assets/home-slider-1.png"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping, faMinus, faPlus, faRotateLeft, faShareNodes, faTruck, faStar } from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink, useParams } from "react-router"
import ProductInfo from "../../components/ProductInfo/ProductInfo"
import ProductDetailsTabs from "../../components/ProductDetailsTabs/ProductDetailsTabs"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading/Loading"
import { getProductsById } from "../../services/product-service"

export default function ProductDetails() {

  const [productDetails, setProductDetails] = useState(null)
    const [isLoading, setIsLoading]= useState(true)
    const [isError, setIsError]= useState(false)
    const {id} = useParams()
  
     async function fetchProductDetails(){
          try {
            setIsLoading(true)
             const response = await getProductsById({id})
             console.log(response);
             
             if(response.success){
                setIsLoading(false)
                setProductDetails(response.data.data)
             }
             
          } catch (error) {
            isError(true)
            setIsLoading(false)
            
          }
    
        }
  
        useEffect(()=>{
                fetchProductDetails()
            },[id])
        
            if(isLoading){
                return <Loading/>
            }
  





  return (
    <>
      <section className="py-12">
        <ProductInfo productDetails={productDetails}/>
        <ProductDetailsTabs productDetails={productDetails}/>
        <RelatedProducts productDetails={productDetails}/>
        
      </section>
    </>
  )
}
