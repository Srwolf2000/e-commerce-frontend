import { XMarkIcon } from '@heroicons/react/16/solid';

const OrderCard = props => {
    const{id, title, imgUrl, price, handleDelete}= props
    
    let renderXMarkIcon
    if(handleDelete){
        renderXMarkIcon=<XMarkIcon className='text-black/70 cursor-pointer' />
    }
    return (
        <div className='flex items-center justify-between w-80 my-6'>
            <div className='flex flex-row items-center gap-5'>
                <figure className='w-20 h-20 '>
                    <img
                        className='w-full h-full object-cover rounded-lg'
                        src={imgUrl}
                        alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex flex-row items-center gap-5'>
                <p className='text-lg font-medium'>${price}</p>
                <button 
                className='w-6 h-6 rounded-full '
                onClick={()=>handleDelete(id)}>
                    {renderXMarkIcon}
                </button>
            </div>
        </div>

    )
}

export default OrderCard