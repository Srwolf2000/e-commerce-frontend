import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../../Context/ShoppingCartContext';
import Layout from "../../components/Layout";
import OrdersCard from '../../components/OrdersCard';


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  const navigate = useNavigate();

  const handleClick = async (index) => {
    context.setClick(false);
    context.setIndex(index);
    await new Promise(resolve => setTimeout(resolve, 0));
    navigate(`/my-order/${index}`);
  };


  return (
    <Layout>
      <div>
        <h2>My Orders</h2>
      </div>

      <div className=' flex flex-col w-90 items-center'>
        {
          context.order?.map((product, index) => (
            <NavLink 
            key={index}
            to={`/my-order/${index}`}
            onClick={(e) => {
              e.preventDefault(); 
              handleClick(index);
            }}
          >
              <OrdersCard
                data={product.date}
                totalPrice={product.totalPrice}
                totalProducts={product.totalProducts}
              />
            </NavLink>

          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrders