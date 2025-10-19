import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faShieldHalved, faShoppingCart, faTrash, faTruck } from "@fortawesome/free-solid-svg-icons";
import homeSlider from "../../assets/home-slider-1.png";
import Rating from "../../components/Rating/Rating";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";

export default function Cart() {
  const { cartInfo, isLoading } = useContext(CartContext)


  if (isLoading) {
    return <Loading />
  }
  const { numOfCartItems, data } = cartInfo
  const { products, totalCartPrice } = data
  return (
    <>
      <section className="py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left side */}
          <div className="lg:col-span-2 ">
            <div className="border border-gray-300/50 rounded-lg shadow">
              <div className="p-5">
                <h3 className="text-2xl font-semibold">Shopping Cart</h3>
                {products.length > 0 && <p className="text-sm text-gray-700">{numOfCartItems} items in your cart</p>}
              </div>
              {products.length > 0 ? products.map((product) => (<CartItem key={product.id} productInfo={product}/>)) 
              : <div className="text-center py-10 space-y-4">
                <p>Your cart is empty <FontAwesomeIcon icon={faShoppingCart} className="text-primary-600 ms-2" /></p>
                <p>you can continue shopping from <Link to="/" className="text-primary-600">here</Link></p>
                </div>}
            </div>

          </div>
          {/* right side */}
          <div className="border border-gray-300/50 rounded-lg shadow p-5">
            <h3 className="font xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal ({numOfCartItems} items) </span>
                <span className="text-gray-950">{totalCartPrice} EGP</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-primary-600">{products.length > 0 ? "50" : "0"} EGP</span>
              </div>
              {/* <div className="flex justify-between">
                <span>Discount (FRESH20)</span>
                <span className="text-primary-600">- $3.25</span>
              </div> */}
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-gray-950">{Math.trunc(totalCartPrice * 0.14)} EGP</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-gray-300/60 pt-2">
                <span>Total</span>
                <span>{Math.trunc(totalCartPrice + (products.length > 0 ? 70 : 0) + totalCartPrice * 0.14)}</span>
              </div>
            </div>
            <Link to="/checkout" className="btn w-full text-center bg-primary-600 hover:bg-primary-700 text-white py-2 mt-4 rounded">
              Proceed to Checkout
            </Link>
            <Link to="/" className="btn w-full border text-center border-gray-300/50 bg-white hover:bg-gray-300 py-2 mt-2 rounded">
              Continue Shopping
            </Link>
            <div className="mt-4 space-y-2">
              <div className="bg-gray-100 rounded p-4">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faTruck} className="text-primary-600" />
                  <h4 className="text-lg font-bold">Free Delivery</h4>
                </div>
                <p className="text-sm text-gray-600">Your order qualifies for free delivery. Estimated
                  delivery: 2-3 business days</p>
              </div>
              <div className="bg-primary-100 rounded p-4">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600" />
                  <h4 className="text-lg font-bold">Secure Checkout</h4>
                </div>
                <p className="text-sm text-gray-600">Your payment information is protected with 256-bit
                  SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

