import { useContext, } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import { totalPrice } from '../../utils'
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {

    const navigate = useNavigate();
    const context = useContext(ShoppingCartContext)

   

    // Delete product from Shopping Cart
    const handleDelete = (id) => {
        const filteredProducts = context.productsCart.filter(product => product.id != id);
        context.setProductsCart(filteredProducts)
        context.setCount(context.count - 1);
    }

    const handleCheckout = () => {
        const orderToAad = {
            date: new Date().toLocaleDateString(),
            products:  [...context.productsCart],
            totalProducts: context.productsCart.length,
            totalPrice: totalPrice(context.productsCart)
        }
        context.setOrder(prevOrders => [...prevOrders, orderToAad]);;
        context.setProductsCart([])
        context.setCount(0)
        context.setClick(true)
        context.closeCheckoutMenu();
    }
    

    return (
        <aside
            className={`${context.isCheckoutMenuOpen ? 'flex ' : 'hidden '}fixed items-center flex-col w-[360px] h-[calc(100vh-44px)] top-[44px] right-0 border border-black rounded-lg bg-white`}>
            <div className='flex items-center justify-between w-5/6 py-6'>
                <h2 className='text-xl font-medium'>My Order</h2>
                <button
                    onClick={() => context.closeCheckoutMenu()}
                    className='w-6 h-6 rounded-full '>
                    <XMarkIcon className='text-black/70 cursor-pointer' />
                </button>
            </div>
            <div className='overflow-y-scroll flex flex-col flex-1'>
                {
                    context.productsCart.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imgUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />


                    ))
                }
            </div>
            <div className='w-5/6'>
                <p className='flex w-full justify-between items-center'>
                    <span className='text-lg font-light'>Total:</span>
                    <span className='text-lg font-medium'>${totalPrice(context.productsCart)}</span>
                </p>

                <NavLink to='/my-order/last'>
                    <button 
                    className='w-full py-2 my-3 bg-black text-white rounded-lg cursor-pointer'
                    onClick={
                        () => {handleCheckout()
                            setTimeout(() => {
                                navigate('/my-order/last');
                            }, 100);
                            
                    }}
                        >Checkout
                        </button>
                </NavLink>
            </div>

        </aside>

    )
}

export default CheckoutSideMenu;