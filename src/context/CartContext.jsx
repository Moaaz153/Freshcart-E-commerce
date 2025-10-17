import { createContext, useEffect, useState } from "react";
import { addProductToCart, getCartItems, removeItemsFromCart, updetProductQuantity } from "../services/Cart-services";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function CartProvider({ children, value }) {
  const [cartInfo, setCartInfo] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handelAddingProductToCart({ id }) {
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id });
      if (response.success) {
        toast.success(response.data.message);
        setCartInfo(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }
  async function handelFetchCartItems() {
    try {
      setIsLoading(true);
      const response = await getCartItems();
      if (response.success) {
        toast.success(response.data.message);
        setCartInfo(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function handelUpdateQuantity({id,count}) {
    try {
      const toastId = toast.loading("Updating product quantity")
      const response = await updetProductQuantity({id,count})
      if (response.success) {
        toast.dismiss(toastId)
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  useEffect(() => {
    handelFetchCartItems()
  }, [])


  async function handelRemoveCartItems({id}) {
    try {
     const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      })
        if (result.isConfirmed) {
         const toastId= toast.loading("We Are deleting cart item")
          const response = await removeItemsFromCart({id})
          if(response.success){
            toast.dismiss(toastId)
            setCartInfo(response.data)
          }
        }
      
    } catch (error) {
     
    }
  }


  return (
    <CartContext.Provider value={{ cartInfo, isLoading, isError, error, handelAddingProductToCart, handelFetchCartItems, handelRemoveCartItems, handelUpdateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
