import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCodeCompare, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeSliderImg from "../../assets/home-slider-1.png"
import { calcDiscount } from "../../utils/dicount";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { getProducts } from "../../services/product-service";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCards/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/grid';

export default function RelatedProducts({ productDetails }) {
    const { category } = productDetails

    const [relatedProducts, setRelatedProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    async function fetchRelatedProducts() {
        try {
            setIsLoading(true)
            const response = await getProducts({ category: category._id })
            if (response.success) {
                setIsLoading(false)
                setRelatedProducts(response.data.data)
            }

        } catch (error) {
            isError(true)
            setIsLoading(false)

        }

    }

    useEffect(() => {
        fetchRelatedProducts()
    }, [])

    if (isLoading) {
        return <Loading />
    }



    return (
        <>
            <div className="container">
                <div className="p-4">
                    <h2 className="text-2xl font-bold">You may also like</h2>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    autoplay={{ delay: 3000 }}
                >
                {relatedProducts.map((product) => <SwiperSlide key={product.id}><ProductCard productInfo={product} /></SwiperSlide>)}

            </Swiper>

        </div >
        </>
    )
}
