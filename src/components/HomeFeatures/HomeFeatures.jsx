import { faHeadphones, faRotateLeft, faShieldHalved, faTruck, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HomeFeatures() {
  return (
    <>
       <div className="bg-white">
           <div className="container py-16">
                <ul className="grid xl:grid-cols-4 lg:grid-cols-2 gap-5 *:flex *:items-center *:gap-3 *:border *:border-gray-100 *:rounded-md *:shadow *:py-6 *:px-7">
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
                    <li>
                        <FontAwesomeIcon className="size-14 py-4 rounded-full bg-primary-200 text-2xl flex justify-center items-center text-primary-600" icon={faShieldHalved} />
                        <div>
                            <h3 className="font-semibold">Secure Payment</h3>
                            <p className="text-gray-500">100% protected checkout</p>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon className="size-14 py-4 rounded-full bg-primary-200 text-2xl flex justify-center items-center text-primary-600" icon={faHeadphones} />
                        <div>
                            <h3 className="font-semibold">24/7 Support</h3>
                            <p className="text-gray-500">Ready to help anytime</p>
                        </div>
                    </li>
                </ul>
           </div>
       </div> 
    </>
  )
}
