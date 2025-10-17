import { faArrowRight, faArrowRightLong, faChevronLeft, faCircleInfo, faCreditCard, faLock, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, useFormik } from "formik";
import { use, useContext } from "react";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { CartContext } from "../../context/CartContext";
import Loading from "../../components/Loading/Loading";
import { creatOrder } from "../../services/payment-services";
import { toast } from "react-toastify";

export default function Checkout() {

  const {cartInfo, isLoading} = useContext(CartContext)
  const navigate = useNavigate()

   const validationSchema = yup.object({
    paymentMethod: yup.string().required("Payment method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("Address details are required"),
      phone: yup.string().required("Phone number is required"),
      city: yup.string().required("City is required"),
    })
  })

  async function handelCreatingOrder(values) { 
    try {
      const response = await creatOrder({cartId, paymentMethod: values.paymentMethod, shippingAddress: values.shippingAddress})
     if (response.success){
      if(response.data.session){
        toast.loading("You will  be directed to stipe to copmlete yor payment process")
        setTimeout(() => {
          location.href = response.data.session.url
        } , 3000)
      }
      toast.success("Order created successfully")
       setTimeout(() => {
          navigate("/orders")
        } , 3000)
     }
    } catch (error) {
      
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: ""
      }
    },
    validationSchema,
    onSubmit: handelCreatingOrder
  })

  if (isLoading) { return <Loading/> }

  const {data, cartId, numOfCartItems } = cartInfo
  const { products, totalCartPrice } = data 

 



  return (
    <>
      <section>
        <div className="container max-w-6xl py-6">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="payment-method lg:col-span-8" >
                <div>
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <div className="payment-options bg-white shadow-sm p-6 rounded-lg mb-6">
                    <label htmlFor="cod" className={`${formik.values.paymentMethod === "cod" && "bg-primary-100 border-primary-500"} flex gap-4 items-center cursor-pointer border border-gray-200 hover:border-primary-600 transition-colors duration-300 rounded-lg p-4`}>
                      <input type="radio" id="cod" name="payment-method" value={`cod`} className="size-4" onChange={(e) => { formik.setFieldValue("paymentMethod", e.target.value) }} checked={formik.values.paymentMethod === "cod"}/>
                      <div className="w-full">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex gap-4 items-center">
                            <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-2xl text-primary-600" />
                            <div>
                              <h3 className="font-semibold">Cash on delivery</h3>
                              <p className="text-gray-600 text-sm">pay when your order arrives</p>
                            </div>
                          </div>
                          <span className="text-primary-600">No extra changes</span>
                        </div>
                        {formik.values.paymentMethod === "cod" && <div className="flex items-center border text-primary-600 p-2 mt-3 ml-10 border-primary-600/50 gap-2 rounded-md">
                          <FontAwesomeIcon icon={faCircleInfo} className="" />
                          <p className="text-sm">Please keep exact change ready for hassle-free delivery</p>
                        </div>}
                      </div>

                    </label>
                    <label htmlFor="online" className={`${formik.values.paymentMethod === "online" && "bg-primary-100 border-primary-500"} flex gap-4 items-center cursor-pointer border mt-3 border-gray-200 hover:border-primary-600 transition-colors duration-300 rounded-lg p-4`}>
                      <input type="radio" id="online" name="payment-method" value={`online`} className="size-4" onChange={(e) => { formik.setFieldValue("paymentMethod", e.target.value) }} checked={formik.values.paymentMethod === "online"}/>
                      <div className="w-full">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex gap-4 items-center">
                            <FontAwesomeIcon icon={faCreditCard} className="text-2xl text-primary-600" />
                            <div>
                              <h3 className="font-semibold">Online Payment</h3>
                              <p className="text-gray-600 text-sm">Pay securely with card or digital wallet</p>
                            </div>
                          </div>
                          <span className="text-primary-600">Recommended</span>
                        </div>
                        {formik.values.paymentMethod === "online" && <div className="flex items-center border text-blue-600 p-2 mt-3 ml-10 border-blue-600/50 gap-2 rounded-md">
                          <FontAwesomeIcon icon={faCircleInfo} />
                          <p className="text-sm">You will be redirected to secure payment gateway to
                            complete your transaction</p>
                        </div>}
                      </div>

                    </label>
                  </div>
                </div>

                <div className="shipping-address bg-white shadow-sm p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                  <div className="address flex flex-col gap-2">
                    <label htmlFor="addressDetails" className="text-sm">Address Details</label>
                    <textarea onBlur={formik.handleBlur} value={formik.values.shippingAddress.details} name="shippingAddress.details" onChange={formik.handleChange} placeholder="Enter Your Full Address Details" id="addresDetails" className="form-control min-h-28 max-h-60"></textarea>
                    {formik.touched.shippingAddress?.details && formik.errors.shippingAddress?.details ? <div className="text-sm text-red-600">{formik.errors.shippingAddress.details}</div> : null}
                  </div>
                  <div className="flex gap-3 *:grow-1 mt-3">
                    <div className="phone flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm">Phone Number</label>
                      <input type="tel" placeholder="Phone Number" id="phone" className="form-control" value={formik.values.shippingAddress.phone} name="shippingAddress.phone" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                      {formik.touched.shippingAddress?.phone && formik.errors.shippingAddress?.phone ? <div className="text-sm text-red-600">{formik.errors.shippingAddress.phone}</div> : null}
                    </div>
                    <div className="city flex flex-col gap-2">
                      <label htmlFor="city" className="text-sm">City</label>
                      <input type="text" placeholder="City" id="city" className="form-control" value={formik.values.shippingAddress.city} name="shippingAddress.city" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                      {formik.touched.shippingAddress?.city && formik.errors.shippingAddress?.city ? <div className="text-sm text-red-600">{formik.errors.shippingAddress.city}</div> : null}
                    </div>
                  </div>
                </div>

              </div>
              <div className="order-summary bg-white shadow-sm rounded-lg p-6 lg:col-span-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="card-items max-h-48 overflow-auto p-3 space-y-3 border-b border-gray-500/20 pb-3">
                { products.map((product) => (<Link to={`/product/${product.product.id}`} key={product._id} className="item flex gap-2 items-center">
                    <img src={product.product.imageCover} alt="" className="size-12 object-cover rounded-lg" />
                    <div>
                      <h3 className="text-sm"> {product.product.title} </h3>
                      <span className="text-xs text-gray-500">Qty: {product.count}</span>
                    </div>
                    <span className="ms-auto text-sm">{product.price} EGP</span>
                  </Link>))}
                  
                </div>
                <ul className="py-3 space-y-3 *:flex *:justify-between *:items-center">
                  <li>
                    <span>Subtotal</span>
                    <span>{totalCartPrice} EGP</span>
                  </li>
                  <li>
                    <span>Delivery</span>
                    <span>70 EGP</span>
                  </li>
                  <li>
                    <span>Tax</span>
                    <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                  </li>
                  <li className="font-semibold border-t border-gray-500/20 pt-3">
                    <span>Total</span>
                    <span>{Math.trunc(totalCartPrice + 70 + Math.trunc(totalCartPrice * 0.14))} EGP</span>
                  </li>
                </ul>
                <div className="btn-group space-y-4 my-5">
                  <button type="submit" className="btn rounded-md bg-primary-600 text-white flex gap-2 justify-center items-center w-full">
                    <span>Proceed to payment</span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                  <Link to="/cart" className="btn text-gray-600 flex gap-2 justify-center items-center w-full bg-white border border-gray-300/40 rounded-md">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Previous step</span>
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Secure checkout</h3>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faLock} className="text-primary-600" />
                    <p className="text-gray-600">Your payment information is secure</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
