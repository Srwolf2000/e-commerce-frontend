import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../../Context/ShoppingCartContext';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import Layout from "../../components/Layout";
import OrderCard from '../../components/OrderCard';

function MyOrder() {

  const context = useContext(ShoppingCartContext);
  const { id } = useParams();
  console.log(context.order)
  console.log(context.productsCart)

  const showProducts = () => {
    try {
      // Initial context check
      if (!context) {
        console.error("Error:context not available");
        return [];
      }
  
      // Case 1: when coming from the cart (click true)
      if (context.click) {
        console.log("Context (modo click):", {
          click: context.click,
          orderCount: context.order?.length,
          currentId: id
        });
  
        // Check for orders
        if (!context.order || context.order.length === 0) {
          console.warn("Not orders available in the context");
          return [];
        }
  
        const lastOrder = context.order[context.order.length - 1];
        
        // Check if the last order has products 
        if (!lastOrder?.products) {
          console.warn("the last order has not products");
          return [];
        }
  
        return lastOrder.products;
      }
      // Case 2: When it comes from  MyOrders (click false)
      else {
        console.log("Context (modo normal):", {
          click: context.click,
          orderCount: context.order?.length,
          currentId: id
        });
  
        // Validation of the ID
        if (id === undefined || id === null) {
          console.error("Error: ID no provided");
          return [];
        }
  
        const orderIndex = parseInt(id);
        
        // Numerical index validation
        if (isNaN(orderIndex)) {
          console.error("Error: ID is not a valid number", id);
          return [];
        }
  
        // Validation of available orders
        if (!context.order || context.order.length === 0) {
          console.warn("Not orders available");
          return [];
        }
  
        // Validation of de index range 
        if (orderIndex < 0 || orderIndex >= context.order.length) {
          console.error(`Error: Index ${orderIndex} outside of rage . there are ${context.order.length} orders`);
          return [];
        }
  
        const selectedOrder = context.order[orderIndex];
        
        // Final product validation  
        if (!selectedOrder?.products) {
          console.warn(`order ${orderIndex} contains not products`);
          return [];
        }
  
        return selectedOrder.products;
      }
    } catch (error) {
      console.error("Critical Error in  showProducts:", error);
      return [];
    }
  };

  return (
    <Layout>
      <div className='relative flex flex-row w-80 items-center justify-center py-2'>
        <NavLink
          to='/my-orders'
          className='absolute w-8 h-8 left-0' >
          <ChevronLeftIcon />
        </NavLink>
        <h2>My Order</h2>
      </div>

      <div className=' flex flex-col w-90 items-center'>
        {showProducts().map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imgUrl={product.images}
              price={product.price}

            />


          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder