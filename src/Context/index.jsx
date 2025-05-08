import { useLocation } from 'react-router-dom';
import { useState, useEffect, } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext'



export const ShoppingCartProvider = ({ children }) => {

    // Page Loading
    const [isloading, setIsLoading] = useState(true)

    // Get Products
    const [product, setProduct] = useState([])

    // Shopping Cart * count ++
    const [count, setCount] = useState(0);

    // Shopping Cart * Add to cart
    const [productsCart, setProductsCart] = useState([])

    // Shopping Cart * Order
    const [order, setOrder] = useState([])

    // Product Detail * Open and Close Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail * Show Product
    const [productToShow, setProductToShow] = useState({});

    // Checkout Products * Open and Close Checkout
    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

    // Checkout Products * Get index from My Orders
    const [index, setIndex] = useState(0);

    // Checkout Products * Get clicked location
    const [click, setClick] = useState(true)

    // Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState("")

    //Save Products By Title
    const [filteredProducts, setFilteredProducts] = useState([])




    const location = useLocation();
    

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true);

            try {
                let apiUrl = '';
                const currentPath = location.pathname.split('/')[1];



                switch (currentPath) {

                    case 'clothes':
                        apiUrl = ' https://api.escuelajs.co/api/v1/products/?categoryId=1';

                        break;

                    case 'electronics':
                        apiUrl = ' https://api.escuelajs.co/api/v1/products/?categoryId=2';

                        break;

                    case 'furnitures':
                        apiUrl = ' https://api.escuelajs.co/api/v1/products/?categoryId=3';

                        break;

                    case 'toys':
                        apiUrl = ' https://api.escuelajs.co/api/v1/products/?categoryId=4';

                        break;

                    case 'others':
                        apiUrl = ' https://api.escuelajs.co/api/v1/products/?categoryId=5';

                        break;



                    default:
                        apiUrl = 'https://api.escuelajs.co/api/v1/products';

                }

                const response = await fetch(apiUrl);
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                console.log(err.message)
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [location.pathname]);






    useEffect(() => {
       if(location.pathname === '/' || location.pathname.startsWith('/clothes')|| location.pathname.startsWith('/electronics')|| location.pathname.startsWith('/furnitures')|| location.pathname.startsWith('/toys')|| location.pathname.startsWith('/toys'))
    {setSearchByTitle("")}
    
    
    }, [location.pathname]);

    useEffect(() => {
        if (searchByTitle && product) {
            const filtered = product.filter(item =>
                item?.title?.toLowerCase()?.includes(searchByTitle.toLowerCase())
            );
            setFilteredProducts(filtered);

        }
        else {
            setFilteredProducts(product || []);
            }
    


    }, [product, searchByTitle,location]);



    return (
        <ShoppingCartContext.Provider value={{

            isloading,
            setIsLoading,
            product,
            setProduct,
            count,
            setCount,
            productsCart,
            setProductsCart,
            order,
            setOrder,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            isCheckoutMenuOpen,
            openCheckoutMenu,
            closeCheckoutMenu,
            index,
            setIndex,
            click,
            setClick,
            searchByTitle,
            setSearchByTitle,
            filteredProducts,
            setFilteredProducts,


        }}>
            {children}
        </ShoppingCartContext.Provider>

    )
}