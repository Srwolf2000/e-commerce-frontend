import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import NavBar from '../../components/Navbar'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-order/last', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/signin', element: <Signin /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}

const App = () => {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
