import { faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import freshCartLogo from "../../assets/freshcart-logo.svg"
import freshCartMiniLogo from "../../assets/mini-logo.png"
export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-white border-t border-gray-300/20">
        <div className="container">
          <div className=" grid md:grid-cols-2 xl:grid-cols-5 gap-6 py-5">
          <div className=" xl:col-span-2 space-y-3">
            <img src={freshCartLogo} alt="frish cart logo" />
            <p>FreshCart is a versatile e-commerce platform offering a wide range of products, from clothing to electronics. It provides a user-friendly experience for seamless shopping across diverse categories.</p>
            <ul className="flex items-center gap-3 *:text-gray-500 text-lg *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xg mb-4">Categories</h2>
            <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={""}>
                   Men's Fashion
                </Link>
              </li>
              <li>
                <Link to={""}>
                   Women's Fashions
                </Link>
              </li>
              <li>
                <Link to={""}>
                   Baby & Toyes
                </Link>
              </li>
              <li>
                <Link to={""}>
                   Beuty & Health
                </Link>
              </li>
              <li>
                <Link to={""}>
                   Electronics
                </Link>
              </li>
            </ul>
          </div>
           <div>
            <h2 className="font-bold text-xg mb-4">Quick Links</h2>
            <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={"/about"}>
                   About Us
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                   Contact Us
                </Link>
              </li>
              <li>
                <Link to={"/privecy-policy"}>
                   Privecy Policy
                </Link>
              </li>
              <li>
                <Link to={"/terms"}>
                   Terms of service
                </Link>
              </li>
              <li>
                <Link to={"/shipping-policy"}>
                   Shipping policy
                </Link>
              </li>
            </ul>
          </div>
           <div>
            <h2 className="font-bold text-xg mb-4">Customer Service</h2>
            <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to={"/account"}>
                   My Account
                </Link>
              </li>
              <li>
                <Link to={"/orders"}>
                   My Orders
                </Link>
              </li>
              <li>
                <Link to={"/wishlist"}>
                   Wishlist
                </Link>
              </li>
              <li>
                <Link to={"/returns-and-refunds"}>
                   Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to={"/help-center"}>
                   Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center py-5 border-t border-gray-300/20">
          <p>&copy; {new Date().getFullYear()} Freshcart. All rights reserved </p>
          <img src={freshCartMiniLogo} className="w-6" alt="fresh cart mini logo" />
        </div>
        </div>
      </footer>
    </>
  )
}
