import { faAddressCard, faEnvelope, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBabyCarriage, faBars, faBolt, faCartShopping, faChevronDown, faEllipsis, faMagnifyingGlass, faPerson, faPersonDress, faPhone, faRightFromBracket, faSpinner, faSuitcaseMedical, faUserPlus, faWifi, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import freshCartLogo from "../../assets/freshcart-logo.svg"
import { Link, NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { useOnlineStatus } from "../../hooks/UseOnlineStatues";

export default function Navbar() {

  const isOnline = useOnlineStatus()

  const { clearToken, token } = useContext(AuthContext)
  const { cartInfo, isLoading } = useContext(CartContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header>
        <div className="container ">
          {/* top navigation */}
          <div className=" hidden lg:flex text-sm  justify-between border-b border-gray-300/50 py-2">
            <ul className="flex gap-4 items-center *:flex *:gap-3 *:items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
              {isOnline && <li className="text-primary-500">
                <FontAwesomeIcon icon={faWifi} />
                <span>Online</span>
              </li>}

            </ul>
            <ul className="flex gap-4 items-center">
              <li className="flex gap-4">
                <Link to={'track-order'}>Track Order</Link>
                <Link to={'about'}>About</Link>
                <Link to={'contact'}>Contact</Link>
              </li>
              <li>
                <select>
                  <option>EGP</option>
                  <option>USD</option>
                  <option>SAR</option>
                </select>
              </li>
              <li>
                <select>
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                </select>
              </li>
            </ul>
          </div>
          {/* main navigation */}
          <nav className="flex justify-between items-center py-6">
            <h1>
              <Link to={"/"}>
                <img src={freshCartLogo} alt="freshcart logo" />
              </Link>
            </h1>
            <button className="btn lg:hidden bg-primary-600 text-white" onClick={toggleMenu}>
              {isMenuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
            <search className="relative hidden lg:block">
              <input className="form-control min-w-96" type="text" placeholder="search for product" />
              <FontAwesomeIcon className="absolute right-2 top-1/2 -translate-1/2" icon={faMagnifyingGlass} />
            </search>

            <ul className="hidden lg:flex gap-8 items-center">
              <li>
                <NavLink className={({ isActive }) => {
                  return `${isActive ? 'text-primary-600' : ""} flex flex-col hover:text-primary-600 transition-colors duration-200`
                }} to={"/wishlist"}>
                  <FontAwesomeIcon className=" text-lg" icon={faHeart} />
                  <span className="text-sm pt-2">Washlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => {
                  return `${isActive ? 'text-primary-600' : ""} flex flex-col hover:text-primary-600 transition-colors duration-200`
                }} to={"/cart"}>
                  <div className="relative">
                    <FontAwesomeIcon className=" text-lg" icon={faCartShopping} />
                    <span className=" absolute right-0 top-0 flex justify-center items-center -translate-y-1/2 size-5 rounded-full bg-primary-600 text-white text-sm">
                      {isLoading ? (<FontAwesomeIcon className=" text-lg" icon={faSpinner} spin />) : (cartInfo?.numOfCartItems)}
                    </span>
                  </div>
                  <span className="text-sm pt-2">Cartt</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => {
                  return `${isActive ? 'text-primary-600' : ""} flex flex-col hover:text-primary-600 transition-colors duration-200`
                }} to={"account"}>
                  <FontAwesomeIcon className=" text-lg" icon={faUser} />
                  <span className="text-sm pt-2">Account</span>
                </NavLink>
              </li>
              {!token ? <>
                <li>
                  <NavLink className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600' : ""} flex flex-col hover:text-primary-600 transition-colors duration-200`
                  }} to={"signup"}>
                    <FontAwesomeIcon className=" text-lg" icon={faUserPlus} />
                    <span className="text-sm pt-2">Signup</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600' : ""} flex flex-col hover:text-primary-600 transition-colors duration-200`
                  }} to={"login"}>
                    <FontAwesomeIcon className=" text-lg" icon={faAddressCard} />
                    <span className="text-sm pt-2">Login</span>
                  </NavLink>
                </li>
              </> : <li onClick={clearToken} className="flex flex-col hover:text-primary-600 transition-colors duration-200 cursor-pointer">
                <FontAwesomeIcon className="text-lg" icon={faRightFromBracket} />
                <span className="text-sm pt-2">Logout</span>
              </li>}


            </ul>
          </nav>
        </div>
        {/* category navigation */}
        <nav className="hidden lg:block bg-gray-100 py-4">
          <div className="container flex gap-8 items-center">

            <div className=" relative group">
              <button className="btn flex items-center gap-3 bg-primary-600 text-white hover:bg-primary-600/90">
                <FontAwesomeIcon icon={faBars} />
                <span>All categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className=" group-hover:block hidden absolute top-10 min-w-60 *:py-3 *:px-3 *:hover:bg-gray-100 rounded-lg bg-white shadow  divide-y-2 divide-gray-300/40">
                <li>
                  <Link className="flex gap-3 items-center">
                    <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faPerson} />
                    <span>Men's Fashions</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-3 items-center">
                    <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faPersonDress} />
                    <span>Women's Fashions</span>
                  </Link>

                </li>
                <li>
                  <Link className="flex gap-3 items-center">
                    <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faBabyCarriage} />
                    <span>Baby & Toyes</span>
                  </Link>

                </li>
                <li>
                  <Link className="flex gap-3 items-center">
                    <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faSuitcaseMedical} />
                    <span>Beuty & Health</span>
                  </Link>

                </li>
                <li>
                  <Link className="flex gap-3 items-center">
                    <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faBolt} />
                    <span>Electronics</span>
                  </Link>

                </li>
                <li>
                  <Link className="flex gap-3 items-center">
                    <FontAwesomeIcon className="text-primary-600 text-xl" fixedWidth icon={faEllipsis} />
                    <span>View all categories</span>
                  </Link>

                </li>
              </menu>
            </div>


            <ul className="flex gap-5">
              <li>
                <NavLink to={'/'}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'recently-added'}>
                  Recently added
                </NavLink>
              </li>
              <li>
                <NavLink to={'featured-products'}>
                  Featured products
                </NavLink>
              </li>
              <li>
                <NavLink to={'offers'}>
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink to={'brands'}>
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* offcanvas */}

        {isMenuOpen && <>
          <div className="background lg:hidden cursor-pointer fixed z-30 inset-0 bg-black/50 " onClick={toggleMenu}></div>
          <div className="canvas lg:hidden fixed z-40 top-0 bottom-0 bg-white p-5 space-y-5 animate-slide-in">
            <div className="flex justify-between items-center border-b border-gray-300/50 pb-4  ">
              <img src={freshCartLogo} alt="frech cart logo" />
              <button className="btn rounded-full" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <search className="relative ">
              <input className="form-control min-w-64" type="text" placeholder="search for product" />
              <FontAwesomeIcon className="absolute right-2 top-1/2 -translate-1/2" icon={faMagnifyingGlass} />
            </search>
            <div>
              <h2 className="text-xl font-bold">Main Menue</h2>
              <ul className=" *:hover:bg-gray-100 transition-colors duration-200 space-y-2 mt-3">
                <li>
                  <NavLink className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""} flex gap-2 items-center px-2 py-2`
                  }} to={"/wishlist"}>
                    <FontAwesomeIcon className=" text-lg" icon={faHeart} />
                    <span className="text-sm pt-2">Washlist</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""} flex gap-2 items-center px-2 py-2`
                  }} to={"cart"}>
                    <div className="relative">
                      <FontAwesomeIcon className=" text-lg" icon={faCartShopping} />
                      <span className=" absolute right-0 top-0 flex justify-center items-center -translate-y-1/2 size-5 rounded-full bg-primary-600 text-white text-sm">
                        {isLoading ? (<FontAwesomeIcon className=" text-lg" icon={faSpinner} spin />) : (cartInfo?.numOfCartItems)}
                      </span>
                    </div>
                    <span className="text-sm pt-2">Cartt</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""} flex gap-2 items-center px-2 py-2`
                  }} to={"account"}>
                    <FontAwesomeIcon className=" text-lg" icon={faUser} />
                    <span className="text-sm pt-2">Account</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="border-t border-gray-300/50 pt-5">
              <h2 className="text-xl font-bold">Account</h2>
              <ul className=" *:hover:bg-gray-100 transition-colors duration-200 space-y-2 mt-3">
                {!token ? <>
                  <li>
                    <NavLink className={({ isActive }) => {
                      return `${isActive ? 'text-primary-600 bg-primary-100' : ""} flex gap-2 items-center px-2 py-2`
                    }} to={"signup"}>
                      <FontAwesomeIcon className=" text-lg" icon={faUserPlus} />
                      <span className="text-sm pt-2">Signup</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) => {
                      return `${isActive ? 'text-primary-600 bg-primary-100' : ""} flex gap-2 items-center px-2 py-2`
                    }} to={"login"}>
                      <FontAwesomeIcon className=" text-lg" icon={faAddressCard} />
                      <span className="text-sm pt-2">Login</span>
                    </NavLink>
                  </li>
                </> : <li onClick={clearToken} className="flex gap-2 items-center px-2 py-2 cursor-pointer">
                  <FontAwesomeIcon className="text-lg" icon={faRightFromBracket} />
                  <span className="text-sm pt-2">Logout</span>
                </li>}
              </ul>
            </div>
          </div>
        </>}

      </header>
    </>
  )
}
