import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import loginImg from "../../assets/login-img.png"
import { faClock, faLock, faPeopleGroup, faTruck } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { Link, useLocation, useNavigate } from "react-router"
import { faCircleQuestion, faStar } from "@fortawesome/free-regular-svg-icons"
import { use, useContext, useState } from "react"
import axios from "axios"
import * as yup from "yup"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { API_CONFIG } from "../../config"
import { sendDataToLogin } from "../../services/auth-service"
import { AuthContext } from "../../context/AuthContext"
export default function Login() {


  const location = useLocation()
  const from = location?.state?.from || "/"

  const {setToken} = useContext(AuthContext)

   const navigate = useNavigate()
  const [inCorrectMsg, setInCorrectMsg] = useState("")

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

  const validationSchema = yup.object({
    email: yup.string().required("Email is required").email("Email is invalide"),
    password: yup.string().required("Password is required").matches(passwordRegex, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character")
  })





  async function handelLogin(values){



    try{
      
      const response = await sendDataToLogin(values)

    if(response.success){
      toast.success("Welcome Back")
      setToken(response.data.token)
      if(values.rememberMe){ 
      localStorage.setItem("token", response.data.token)
      }
      else{ 
      sessionStorage.setItem("token", response.data.token)
      }

      setTimeout(()=> {
        navigate(from)
      }, 3000)
    }
    }  catch (error) {
      setInCorrectMsg(error.message)
   
  }
     
  }

  const formik = useFormik({
    initialValues: {
       email:"",
       password:"",
       rememberMe: false
    },
    validationSchema,
    onSubmit: handelLogin
    })

    function handelChange(e){
      setInCorrectMsg ("")
      formik.handleChange(e)
    }


  return (
    <>
      <main className="py-12">
        <div className="container grid lg:grid-cols-2 lg:gap-12">
          {/* left side */}
          <div className="space-y-8 py-10">
            <div>
              <img src={loginImg} className="rounded-2xl w-full h-96 object-cover shadow-lg" alt="Freshcart login image" />

            </div>

            <div className="title text-center">
              <h2 className='text-4xl font-bold'>Fresh Groceries Delivered</h2>
              <p className='text-lg mt-2 text-gray-600 '>Join thousands of happy customers who trust FreshCart for their <br className="xl:block hidden" />
                daily grocery needs</p>
            </div>
            <ul className="flex justify-between items-center *:flex *:gap-3 *:items-center">
              <li>
                <FontAwesomeIcon className="text-primary-500" icon={faTruck} />
                <span className='text-gray-500'>Free Delivery</span>
              </li>
              <li>
                <FontAwesomeIcon className="text-primary-500" icon={faCircleQuestion} />
                <span className='text-gray-500'>Secure Payment</span>
              </li>
              <li>
                <FontAwesomeIcon className="text-primary-500" icon={faClock} />
                <span className='text-gray-500'>24/7 Support</span>
              </li>
            </ul>
          </div>
          {/* right side */}
          <div className='p-10 space-y-8 bg-white shadow-xl rounded-xl'>
            <div className="text-center">
              <h2 className='text-4xl font-bold'><span className='text-primary-600'>Fresh</span>Cart</h2>
              <h2 className='text-4xl my-4 font-bold'>Welcome Back!</h2>
              <p className='text-lg text-gray-600 '>Sign in to continue your fresh shopping experience</p>
            </div>
            <div className='flex flex-col gap-3 *:flex *:gap-2 *:justify-center *:items-center *:w-full *:hover:bg-gray-100'>
              <button className='btn bg-transparent border border-gray-400/40 '>
                <FontAwesomeIcon icon={faGoogle} className='text-red-500' />
                <span>Google</span>
              </button>
              <button className='btn bg-transparent border border-gray-300/40'>
                <FontAwesomeIcon icon={faFacebook} className='text-blue-600' />
                <span>Facebook</span>
              </button>
            </div>
            <div className=' relative w-full h-0.5 bg-gray-300/30'>
              <span className=' absolute left-1/2 top-1/2 -translate-1/2 bg-white px-4'>OR CONTINUE WITH EMAIL</span>
            </div>
            <form className='space-y-7 ' onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email Address</label>
                <input className="form-control" type="email" name="email" id="email" placeholder="Enter Your Emial" value={formik.values.email} onChange={handelChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && (<p className='text-red-500'> {formik.errors.email} </p>) }
                
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <label htmlFor="password">Password</label>
                  <Link to={"/forget-password"} className='text-primary-600 underline'>Forgot Password?</Link>
                </div>
                <input className="form-control" type="password" name="password" id="passweord" placeholder="Enter your password" value={formik.values.password} onChange={handelChange} onBlur={formik.handleBlur} />
                {formik.touched.password && formik.errors.password && (<p className='text-red-500'> {formik.errors.password} </p>) }
              </div>
              <div className="flex items-center gap-2 ">
                <input type="checkbox" className=' accent-primary-600 size-4' name='rememberMe' id='rememberMe' value={formik.values.rememberMe} onChange={handelChange} onBlur={formik.handleBlur} />
                <label htmlFor="rememberMe">Keep me signed in</label>
              </div>
              {inCorrectMsg && <p className='text-red-500 text-center font-bold'>{inCorrectMsg}</p>}
              <button type='submit' className='btn text-white bg-primary-600  hover:bg-primary-700 w-full'>
                Sign In
              </button>
              
            </form>
            <div className="space-y-8 text-center xl:px-20 mt-10 border-t border-gray-300/30 pt-8">
              <p className="text-lg text-gray-600">New to FreshCart? <Link to={"/signup"} className='text-primary-600 underline'>Create an account</Link></p>
              <ul className="flex justify-between items-center *:flex *:gap-1 *:items-center">
                <li>
                  <FontAwesomeIcon icon={faLock} />
                  <span className='text-gray-500'>SSL Secured</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <span className='text-gray-500'>50K+ Users</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} />
                  <span className='text-gray-500'>4.9 Rating</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

    </>
  )
}
