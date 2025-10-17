import { faClock, faCreditCard, faEye, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCheck, faCreditCardAlt, faHeart, faMapMarkerAlt, faRedo, faSearch, faShop, faShoppingBag, faSignOutAlt, faTachometerAlt, faTimes, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { getUserOrder } from "../../services/orders-service";
import Loading from "../../components/Loading/Loading";
export default function Orders({ setSidebarOpen }) {

  const { userInfo } = useContext(AuthContext)
  const [orders, setOrders] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function fetchOrders() {
    try {
      setIsLoading(true);
      const response = await getUserOrder({ userId: userInfo.id })
      if (response.success) {
        setOrders(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }


  useEffect(() => {
    fetchOrders()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className="flex-1 lg:ml-0 bg-white shadow-md">
        {/* Mobile header */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">My Orders</h1>
          <div></div>
        </div>

        <div className="p-4 lg:p-8 bg-white shadow-md">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <div className="flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
                <option>All Orders</option>
              </select>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden mb-6 space-y-4">
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white">
              <option>All Orders</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4 lg:space-y-6">
            {orders.length === 0 && <div className="flex flex-col items-center justify-center my-5">
              <FontAwesomeIcon icon={faShop} className="text-5xl text-gray-500 mb-3" />
              <p className="text-gray-500 font-semibold">No orders found</p>
              <p className="text-gray-400 font-semibold mb-3">You haven't placed any orders yet</p>
              <Link to="/" className="btn bg-primary-500 hover:bg-primary-600 text-white">
                Start shopping
              </Link>
            </div>}
            {/* Order 1 */}
            {orders.map((order) => <div className="bg-white rounded-lg shadow-md">
              <div key={order.id} className="bg-gray-100 lg:px-6 border-b border-gray-400/30 p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4  space-y-2 lg:space-y-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                    {order.isPaid ? <span className="px-3 py-1 ml-3 bg-primary-100 text-primary-800 rounded-full text-sm font-medium w-fit">
                      <FontAwesomeIcon icon={faCheck} className="mr-1" /> Paid</span>
                      : <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium w-fit">
                        <FontAwesomeIcon icon={faClock} className=" mr-1" /> UnPaid</span>}
                  </div>
                  <div className="flex items-center space-x-2 lg:space-x-3 text-sm lg:text-base">
                    <button className="flex items-center text-primary-600 hover:text-primary-700 text-sm">
                      <FontAwesomeIcon icon={faRedo} className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                      <span className="hidden sm:inline">Reorder</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-700 text-sm">
                      <FontAwesomeIcon icon={faEye} className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                      <span className="hidden sm:inline">View Details</span>
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Placed on Jan 10, 2023</p>
              </div>

              <div className=" grid lg:grid-cols-12 gap-6 space-y-4 lg:p-6 p-4 lg:space-y-0">
                <div className=" col-span-3">
                  <div className="flex">
                    {order.cartItems.slice(0, 5).map((item) => <div className="space-x-2">
                      <img src={item.product.imageCover} alt="product item" className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg border-2 border-white" />
                    </div>)}
                  </div>


                </div>
                <div className="col-span-2">
                  <p className="font-medium text-gray-600">Items</p>
                  <p className="font-semibold text-gray-800">{order.cartItems.length} items</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium text-gray-600">Total Amount</p>
                  <p className="font-semibold text-gray-800">{order.totalOrderPrice} EGP</p>
                </div>
                <div className="col-span-2">
                  <p className="font-medium text-gray-600">Delivered to</p>
                  <p className="font-semibold text-gray-800">{order.shippingAddress.city}</p>
                </div>
                <div className="col-span-3">
                  <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2">
                    {order.isPaid ? <>
                      <button className="flex-1 btn sm:flex-none px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm">Track Order</button>
                      <button className="flex-1 btn sm:flex-none px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm">Cancel order</button>
                    </> : <button className="flex-1 btn sm:flex-none px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm">Complete payment</button>}
                  </div>
                </div>
              </div>
            </div>)}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 lg:mt-8 space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-sm">Showing 1-4 of 12 orders</p>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 bg-primary-500 text-white rounded-lg text-sm">1</button>
              <button className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">2</button>
              <button className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">3</button>
              <button className="w-8 h-8 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">›</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
