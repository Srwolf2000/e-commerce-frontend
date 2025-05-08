import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { NavLink } from 'react-router-dom';

const OrdersCard = props => {
    const { data, totalPrice, totalProducts } = props


    return (
        <div className='flex  items-center justify-between w-80 my-3 border border-black-600 rounded-lg p-4'>
            <p className='flex flex-col text-sm font-normal font-black-600'>
                <span>{data}</span>
                <span>{totalProducts} Articles</span>
            </p>

            <p className='flex flex-row items-center'>
            <span className='text-lg font-bold'>${totalPrice}</span>
            <ChevronRightIcon className='w-6 h-6'/>
            </p>

        </div>

    )
}

export default OrdersCard;