import { faCreditCard, faEye, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCreditCardAlt, faHeart, faMapMarkerAlt, faRedo, faSearch, faShoppingBag, faSignOutAlt, faTachometerAlt, faTimes, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export default function AccountLayout({ sidebarOpen, setSidebarOpen }) {
    const { userInfo } = useContext(AuthContext)
    return (
        <>
            <div className="flex gap-5 min-h-screen py-5 container">
                {/* Mobile overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div className={`fixed inset-y-40 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                    <div className="bg-white p-5 shadow-lg ">
                        {/* Mobile close button */}
                        <div className="lg:hidden flex justify-end p-4">
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center">
                                <div className="w-10 h-10 p-4 bg-primary-100 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faUser} className="text-primary-500 text-sm" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="font-semibold text-gray-900">{userInfo.name || "User"}</h3>
                                    <p className="text-sm text-gray-500">{userInfo.email || "user@example.com"}</p>
                                </div>
                            </div>
                        </div>

                        <nav className="mt-6">
                            <div className="px-3">
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/account/dashboard"}>
                                    <FontAwesomeIcon icon={faTachometerAlt} className="w-5 h-5 mr-3" />
                                    Dashboard
                                </NavLink>
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/account/orders"}>
                                    <FontAwesomeIcon icon={faShoppingBag} className="w-5 h-5 mr-3" />
                                    Orders
                                </NavLink>
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/account/wishlist"}>
                                    <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mr-3" />
                                    Wishlist
                                </NavLink>
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/account/favorites"}>
                                    <FontAwesomeIcon icon={faHeart} className="w-5 h-5 mr-3" />
                                    Favorites
                                </NavLink>
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/account/addresses"}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 mr-3" />
                                    Addresses
                                </NavLink>
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/account/payment-methods"}>
                                    <FontAwesomeIcon icon={faCreditCardAlt} className="w-5 h-5 mr-3" />
                                    Payment Methods
                                </NavLink>
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/account/account-details"}>
                                    <FontAwesomeIcon icon={faUserCog} className="w-5 h-5 mr-3" />
                                    Account Details
                                </NavLink>
                                <NavLink className={({ isActive }) => {
                                    return `${isActive ? 'text-primary-600 bg-primary-100' : ""}  gap-2 flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 mb-1`
                                }} to={"/"}>
                                    <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-3" />
                                    Logout
                                </NavLink>
                            </div>
                        </nav>
                    </div>

                </div>

                {/* Main Content */}
                <div className="flex-1 lg:ml-0 bg-white">
                        <Outlet />
                </div>
            </div>
        </>
    )
}
