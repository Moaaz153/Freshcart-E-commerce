import { faShieldHalved, faStar, faTruckFast, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import reviewAuthorImg from "../../assets/review-author.png"
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { API_CONFIG } from '../../config'
import { sendDataToSignUp } from '../../services/auth-service'
import { checkPasswordStrength } from '../../utils/password-strength'


export default function Signup() {

  const navigate = useNavigate()
  const [isExistError, setIsExistError] = useState(null)

  const phonRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

  const validationSchema = yup.object({
    name : yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is invalide"),
    password: yup.string().required("Password is required").matches(passwordRegex, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    rePassword: yup.string().required("confirm password must be required").oneOf([yup.ref('password')] , "Password should be the same"),
    phone: yup.string().required("Phone number is required").matches(phonRegex , "Phone number is invalide"),
    terms : yup.boolean().oneOf([true],"You have to agree")
  })





  async function handelSignup(values){

    try{
     
      const response = await sendDataToSignUp(values)

    if(response.success){
      toast.success("Your account has been created")
      setTimeout(()=> {
        navigate("/login")
      }, 3000)
    }
    }  catch (error) {
      setIsExistError(error.message)
   
  }
     
  }

  const formik = useFormik({
    initialValues: {
       name: "",
       email:"",
       password:"",
       rePassword:"",
       phone:"",
       terms : false
    },
    validationSchema,
    onSubmit: handelSignup
    })

    const passwordFeedback = checkPasswordStrength(formik.values.password)

  return (
    <>
      <main className='py-12'>
        <div className="container grid lg:grid-cols-2 lg:gap-12">
          {/* left side */}
          <div className='space-y-8 py-10'>
            <div className="welcome-msg">
              <h2 className='text-4xl font-bold'>Welcome to <span className='text-primary-600'>FreshCart</span></h2>
              <p className='text-lg mt-2'>Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.</p>
            </div>
            <ul className='space-y-5 *:flex *:items-center *:gap-3'>
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-500">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="content">
                  <h2 className='font-semibold'>Premium Quality</h2>
                  <p className='text-gray-500'>Premium quality products sourced from trusted suppilers</p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-500">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div className="content">
                  <h2 className='font-semibold'>Fast delivery</h2>
                  <p className='text-gray-500'>Same-day delivery available in most areas</p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-500">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div className="content">
                  <h2 className='font-semibold'>Secure Shopping</h2>
                  <p className='text-gray-500'>Your data and paymate are completely secure</p>
                </div>
              </li>
            </ul>
            <div className="review p-6 rounded-xl bg-white shadow-md">
              <div className='flex items-center gap-3'>
                <img src={reviewAuthorImg} className='size-12 rounded-full' alt="Sarah Johnson profile img" />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="rating ">
                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-400' />
                  </div>
                </div>
              </div>
              <blockquote className='text-gray-700 italic mt-4'>
                <p>"FreshCart has completely changed how I shop for groceries. The
                  quality is amazing and delivery is always on time!"</p>
              </blockquote>
            </div>
          </div>
          {/* right side */}
          <div className='p-10 space-y-8 bg-white shadow-xl rounded-xl'>
            <div className='text-center'>
              <h2 className='font-semibold text-3xl'>Creat your account</h2>
              <p className='mt-1'>Start your fresh journey with us today</p>
            </div>
            <div className='flex gap-2 *:flex *:gap-2 *:justify-center *:items-center *:w-full *:hover:bg-gray-100'>
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
              <span className=' absolute left-1/2 top-1/2 -translate-1/2 bg-white px-4'>or</span>
            </div>
            <form className='space-y-7' onSubmit={formik.handleSubmit}>
              <div className="name flex flex-col gap-1">
                <label htmlFor="name">Name*</label>
                <input className=' form-control' type="text" id='name' name='name' placeholder='Moaaz' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name && (<p className='text-red-500'> {formik.errors.name} </p>) }
              </div>
              <div className="email flex flex-col gap-1">
                <label htmlFor="email">Email*</label>
                <input className=' form-control' type="email" id='email' name='email' placeholder='moaaz@gmail.com' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && (<p className='text-red-500'> {formik.errors.email} </p>) }
                {isExistError && <p className='text-red-500'>{isExistError}</p>}
              </div>
              <div className="phone flex flex-col gap-1">
                <label htmlFor="phone">Phone*</label>
                <input className=' form-control' type="tel" id='phone' name='phone' placeholder='01006449498' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.phone && formik.errors.phone && (<p className='text-red-500'> {formik.errors.phone} </p>) }
              </div>
              <div className="password flex flex-col gap-1">
                <label htmlFor="password">Password*</label>
                <input className=' form-control' type="password" id='password' name='password' placeholder='creat a strong password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                
                {formik.values.password && (<div className="password-strenght flex gap-2 items-center">
                  <div className="bar w-full h-1 bg-gray-200 rounded-xl overflow-hidden">
                    <div className= {`progress ${passwordFeedback.background} ${passwordFeedback.width} h-full`} ></div>
                  </div>
                    <span className='w-28 text-center text-nowrap'>{passwordFeedback.text}</span>
                </div>)}

                {(formik.touched.password && formik.errors.password) ? <p className='text-red-500'> {formik.errors.password} </p> : "" }
              </div>
              <div className="repassword flex flex-col gap-1">
                <label htmlFor="repassword">Confirm password*</label>
                <input className=' form-control' type="password" id='repassword' name='rePassword' placeholder='confirm your password' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.rePassword && formik.errors.rePassword && (<p className='text-red-500'> {formik.errors.rePassword} </p>) }
              </div>
              <div className="terms flex gap-2 items-center">
                <input type="checkbox" className=' accent-primary-600 size-4' name='terms' id='terms' value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <label htmlFor="terms">
                  I agree to the <Link to={'/terms'} className='text-primary-600 underline'>terms of service</Link> and <Link to={'/privacy-policy'} className='text-primary-600 underline'>privacy policy</Link>
                </label>
                {formik.touched.terms && formik.errors.terms && (<p className='text-red-500'> {formik.errors.terms} </p>) }
              </div>
              <button type='submit' className='btn text-white bg-primary-600 flex gap-2 justify-center items-center hover:bg-primary-700 w-full'>
                 <FontAwesomeIcon icon={faUserPlus} />
                 <span>Creat my account</span>
              </button>
            </form>
            <p className='text-center border-t border-gray-300/50 pt-8'>Alerdy have an account? <Link to={'/login'} className='text-primary-600 underline'>Sign In</Link></p>
          </div>
        </div>
      </main>
    </>
  )
}
