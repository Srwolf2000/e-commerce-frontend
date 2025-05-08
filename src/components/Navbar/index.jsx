import { NavLink } from "react-router-dom";
import {ShoppingCartContext} from '../../Context/ShoppingCartContext'
import { useContext } from 'react';
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

let menu1 = [
    {
        to: '/',
        text: 'All',
        className: ''
    },
    {
        to: '/clothes',
        text: 'Clothes',
        className: ''
    },
    {
        to: '/electronics',
        text: 'Electronics',
        className: ''
    },
    {
        to: '/furnitures',
        text: 'Furnitures',
        className: ''
    },
    {
        to: '/toys',
        text: 'Toys',
        className: ''
    },
    {
        to: '/others',
        text: 'Others',
        className: ''
    },

];

let menu2 = [
    {
        to: '/email',
        text: 'stiven@forexample.com',
        className: 'text-black/60'
    },
    {
        to: '/my-orders',
        text: 'My orders',
        className: ''
    },
    {
        to: '/my-account',
        text: 'My account',
        className: ''
    },
    {
        to: '/signin',
        text: 'Sign In',
        className: ''
    },
];

const NavBar = () => {
    const textDecoration = 'underline underline-offset-4';
    const context = useContext(ShoppingCartContext) ;

    return (
        <nav className="flex justify-between items-center fixed z-10 w-screen px-4 py-2 text-sm font-light top-0 bg-white">
            <ul className="flex items-center gap-4">
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                {menu1.map(link => (
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} className={({ isActive }) => isActive ? textDecoration : undefined}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}

            </ul>

            <ul className="flex items-center gap-4">
                {menu2.map(link => (
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} className={({ isActive }) => isActive  ? textDecoration : undefined}>
                            {link.text}
                        </NavLink>
                    </li>

                ))}
                <li 
                className='flex flex-row items-center'
                onClick={()=>context.openCheckoutMenu()}>
                    <ShoppingCartIcon className='w-5 h-5 text-black cursor-pointer'/> {context.count}
                </li>

            </ul>

        </nav>
    )
}

export default NavBar;