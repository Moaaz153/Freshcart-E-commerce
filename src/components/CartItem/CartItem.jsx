import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import homeSlider from "../../assets/home-slider-1.png";
import Rating from '../Rating/Rating';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItem({productInfo}) {
  const {count, price, product} = productInfo
  const {id, imageCover, title, category, ratingsAverage} = product

  const {handelRemoveCartItems,handelUpdateQuantity} = useContext(CartContext)
  return (
    <>
      <div className="border-t p-5 border-gray-300/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={imageCover} alt="" className="w-16 h-16 rounded-md object-cover" />
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{category.name}</p>
            <div className='flex items-center mt-2'>
              <div className="text-yellow-500 text-sm">
                <Rating rating={ratingsAverage}/>
              </div>
              <span className='text-xs text-gray-500 ml-2'>{ratingsAverage}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 border border-gray-300/50 rounded-lg">
            <button onClick={()=> {
              handelUpdateQuantity({id, count: count - 1})
            }} className="px-2 py-1 border-e hover:bg-gray-100 border-gray-300/50">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{count}</span>
            <button onClick={()=> {
              handelUpdateQuantity({id, count: count + 1})
            }} className="px-2 py-1 border-s hover:bg-gray-100 border-gray-300/50">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div>
            <p className="font-semibold">{price * count} EGP</p>
            {/* <span className="line-through text-gray-400 text-sm">$10.08</span> */}
          </div>
          <button onClick={()=> {
            handelRemoveCartItems({id})
          }} className="text-red-500">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  )
}
