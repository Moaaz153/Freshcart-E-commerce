import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import homeSliderImg from "../../assets/home-slider-1.png"
import { useContext, useEffect, useState } from "react";
import { getAllCategories } from "../../services/categories-services";
import Loading from "../Loading/Loading";
import { CategoriesContext } from "../../context/CategoriesContext";

export default function HomeCategories() {

  //   const [categories, setCategories]= useState(null)
  //   const [isLoading, setIsLoading]= useState(true)

  //  async function fetchCategories(){
  //     try {
  //       setIsLoading(true)
  //        const response = await getAllCategories()
  //        if(response.success){
  //           setIsLoading(false)
  //           setCategories(response.data.data)
  //        }
         
  //     } catch (error) {
  //       setIsLoading(false)
        
  //     }

  //   }

  //   useEffect(()=>{
  //       fetchCategories()
  //   },[])
  const {isLoading, isError, categories, error} = useContext(CategoriesContext)

    if(isLoading){
        return <Loading/>
    }

  return (
    <>
      <section>
           <div className="container">
               <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Shop by Category</h2>
                    <Link to={'/categories/'} className="text-primary-600 hover:text-primary-700 transition-colors duration-300 flex gap-2 items-center">
                    <span>View All Categories</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 py-8">
                {categories.map((category)=>(
                    <Link key={category._id} to={`/categories/${category._id}`} className="card cursor-pointer p-4 rounded-xl shadow-md bg-white flex flex-col gap-2 items-center hover:shadow-lg transition-shadow duration-300">
                   <img className="size-16 rounded-full object-cover" src={category.image} alt="" />
                   <h3>{category.name}</h3>
                </Link>
                ))}
               </div>
           </div>
      </section> 
    </>
  )
}
