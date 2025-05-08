import { useContext, } from 'react'

import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetails from '../../components/Productdetails'

function Home() {
  const context = useContext(ShoppingCartContext);


  
  const getInputValue = () => {
    if (context.searchByTitle === '') {
      return "";
    } else {
      return context.searchByTitle;
    }

  }


  const render = () => {
    if (context.isloading) {
      return <div>Cargando productos...</div>;

    }
    if (context.filteredProducts.length > 0) {
      return (
        context.filteredProducts?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div> sorry,not available</div>
      )
    }
  }

  return (
    <Layout>
      <h1 className='my-5 font-medium text-xl'>Exclusive Products </h1>
      <input
        type='text'
        placeholder='Search a product '
        className='w-80 rounded-lg border border-black mb-6 p-2 focus:outline-none'
        onChange={(event) => {  context.setSearchByTitle(event.target.value);}}
        value={getInputValue()}
      />
      <section className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg justify-items-center'>
        {
          render()
        }
      </section>
      <ProductDetails />

    </Layout>

  )
}

export default Home