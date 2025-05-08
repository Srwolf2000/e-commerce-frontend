import { XMarkIcon } from '@heroicons/react/16/solid';
import { useContext } from 'react';
import {ShoppingCartContext} from '../../Context/ShoppingCartContext' 

const ProductDetails = () => {
    const context =useContext(ShoppingCartContext)
            
    return (
        <aside 
            className={`${context.isProductDetailOpen ?'flex ':'hidden '}fixed  flex-col w-[360px] h-[calc(100vh-44px)] top-[44px] right-0 border border-black rounded-lg bg-white`}>
            <div className='flex items-center justify-between p-6'>
                <h2 className='text-xl font-medium'>Details</h2>
                <button 
                onClick={() =>context.closeProductDetail()}
                className='w-6 h-6 rounded-full '>
                    <XMarkIcon className='text-black/70 cursor-pointer' />
                </button>
            </div>
            <div className='w-full justify-items-center'>
                <figure className='flex items-center w-5/6 h-[200px] mb-4 '>
                    <img  
                    className='w-full h-full object-cover rounded-lg'
                    src={context.productToShow?.images?.[0]||context.productToShow?.category?.image} 
                    alt={context.productToShow.title} />

                </figure>
                <p className='flex flex-col w-5/6 justify-items-start'>
                <span className='font-medium text-lg'>${context.productToShow.price}</span>
                <span className=' font-medium text-base'>{context.productToShow.title}</span>
                <span className=' text-sm'>{context.productToShow.description}</span>
                </p>
            </div>
        </aside>

    )
}

export default ProductDetails;