import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Notfound from "./pages/Notfound/Notfound"
import WishList from "./pages/WishList/WishList"
import Cart from "./pages/Cart/Cart"
import Favourites from "./pages/Favourites/Favourites"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import Signup from "./pages/Signup/Signup"
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import SearchProducts from "./pages/SearchProducts/SearchProducts"
import Orders from "./pages/Orders/Orders"
import Checkout from "./pages/Checkout/Checkout"
import Categories from "./pages/Categories/Categories"
import Brands from "./pages/Brands/Brands"
import { ToastContainer } from "react-toastify"
import ProductsProvider from "./context/ProductsContext"
import CategoriesProvider from "./context/CategoriesContext"
import AuthProvider from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import CartProvider from "./context/CartContext"
import AccountLayout from "./components/AccountLayout/AccountLayout"
import { useState } from "react"
import OflineScreen from "./components/OflineScreen/OflineScreen"


function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "brands",
          element: <Brands />
        },
        {
          path: "account",
          element: <ProtectedRoute>
            <AccountLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </ProtectedRoute>,
          children: [
            {
              path: "orders",
              element: <ProtectedRoute>
                <Orders setSidebarOpen={setSidebarOpen} />
              </ProtectedRoute>
            },
            {
              path: "wishlist",
              element: <ProtectedRoute>
                <WishList />
              </ProtectedRoute>
            },
          ]
        },
        {
          path: "categories",
          element: <Categories />
        },
        {
          path: "checkout",
          element: <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        },

        {
          path: "search-products",
          element: <SearchProducts />
        },
        {
          path: "product/:id",
          element: <ProductDetails />
        },
        {
          path: "verfiy-email",
          element: <VerifyEmail />
        },
        {
          path: "signup",
          element: <Signup />
        },
        {
          path: "forget-password",
          element: <ForgetPassword />
        },
        {
          path: "favourites",
          element: <ProtectedRoute>
            <Favourites />
          </ProtectedRoute>
        },
        {
          path: "cart",
          element: <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        },

        {
          path: "*",
          element: <Notfound />
        }
      ]
    }


  ])

  return (
    <>
      <OflineScreen>
        <AuthProvider>
          <CartProvider>
            <ProductsProvider>
              <CategoriesProvider>
                <RouterProvider router={router} />
                <ToastContainer autoClose={3000} closeButton={false} closeOnClick={true} />
              </CategoriesProvider>
            </ProductsProvider>
          </CartProvider>
        </AuthProvider>
      </OflineScreen>
    </>
  )
}

export default App
