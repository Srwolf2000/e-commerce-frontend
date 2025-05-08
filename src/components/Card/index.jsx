import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/16/solid'



const Card = (data) => {
    const context = useContext(ShoppingCartContext)
    // Function for show details product
    const showProduct = (productDetails) => {
        context.closeCheckoutMenu();
        context.openProductDetail(),
            context.setProductToShow(productDetails);
    }

    // Function to add products to the shopping cart  
    const addProductsToCart = (productsData) => {
        context.setCount(context.count + 1);
        context.setProductsCart([...context.productsCart, productsData]);
        context.closeProductDetail(),
        context.openCheckoutMenu();
    }

    //Function to render icon
    const renderIcon = (id) => {
        const isInCart = context.productsCart.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <button
                    className='absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 py-0.5 px-0.5 mt-1 mr-1 cursor-pointer'
                    onClick={(e) => { e.stopPropagation() }}>
                    <CheckCircleIcon
                        className='w-full h-full text-black' />
                </button>
            )
        } else {
            return (
                <button
                    className='absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 py-0.5 px-0.5 mt-1 mr-1 cursor-pointer'
                    onClick={(e) => { e.stopPropagation(); addProductsToCart(data.data) }}>
                    <PlusCircleIcon
                        className='w-full h-full text-white' />
                </button>
            )
        }
    }


    return (
        <div
            onClick={() => showProduct(data.data)}
            className='bg-white cursor-pointer w-56 h-60 '>
            <figure className='relative w-full h-4/5 '>
                <div className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs mb-1 ml-1 px-2 py-0.5'>{data.data.category.name}</div>
                <img
                    className='w-full h-full object-cover rounded-lg '
                    src={data?.data?.images?.[0] || data?.data?.category?.image}
                    alt={data.data.title} />
                {renderIcon(data.data.id)}

            </figure>
            <p className='flex justify-between items-center '>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )

}

export default Card