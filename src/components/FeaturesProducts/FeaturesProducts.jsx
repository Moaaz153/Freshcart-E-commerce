import { useContext, useEffect, useState } from "react"
import Loading from "../Loading/Loading"
import ProductCard from "../ProductCards/ProductCard"
import { getProducts } from "../../services/product-service"
import { ProductsContext } from "../../context/ProductsContext"

export default function FeaturesProducts() {

  // const [featuresProducts, setFeaturesProducts]= useState(null)
  // const [isLoading, setIsLoading]= useState(true)
  // const [isError, setIsError]= useState(false)

  //  async function fetchFeaturesProducts(){
  //       try {
  //         setIsLoading(true)
  //          const response = await getProducts()
  //          if(response.success){
  //             setIsLoading(false)
  //             setFeaturesProducts(response.data.data)
  //          }
           
  //       } catch (error) {
  //         isError(true)
  //         setIsLoading(false)
          
  //       }
  
  //     }

  //     useEffect(()=>{
  //             fetchFeaturesProducts()
  //         },[])

  const {isLoading, isError, Products, error} = useContext(ProductsContext)
      
          if(isLoading){
              return <Loading/>
          }


  return (
    <>
      <section>
        <div className="container">
            <h2 className="text-2xl font-bold mb-4">Features products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {Products.map((product)=> <ProductCard productInfo={product} key={product.id}/>)}
            </div>
        </div>
      </section>
    </>
  )
}
