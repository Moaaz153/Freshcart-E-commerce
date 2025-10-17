import { createContext } from "react";
import { getProducts } from "../services/product-service";

import { useEffect, useState } from "react";

export const ProductsContext = createContext(null)

export default function ProductsProvider({ children, value }) {

     const [Products, setProducts]= useState(null)
      const [isLoading, setIsLoading]= useState(true)
      const [isError, setIsError]= useState(false)
      const [error, setError] = useState(null);
    
       async function fetchProducts(){
            try {
              setIsLoading(true)
               const response = await getProducts()
               if(response.success){
                  setIsLoading(false)
                  setProducts(response.data.data)
               }
               
            } catch (error) {
              setIsError(true)
              setIsLoading(false)
              setError(error)
              
            }
      
          }
    
          useEffect(()=>{
                  fetchProducts()
              },[])

  return (
    <ProductsContext.Provider value={{isLoading, isError, Products, error}}>
      {children}
    </ProductsContext.Provider>
  );
}