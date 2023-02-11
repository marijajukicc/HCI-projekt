import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import useAuth from '../../hooks/useAuth';

import { navigationItems } from "../../constants/navbar";
import Cart from "../../public/shopping-cart.png";
import CartActive from "../../public/shopping-cart2.png";
import Login from '../../public/account.png';
import LoginActive from '../../public/account2.png';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const router = useRouter();
    const currentPage = router.pathname;
    const { token } = useAuth();
    const cart = useSelector((state) => state.cart);

    const getTotalQuantity = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity,
            0
        );
    }
    
    return (
        <nav className='flex-grow flex justify-between text-shingle-fawn'>
            <div className='flex py-0.5 list-none'>
                {navigationItems.map(({ label, path }) => (
                    <Link href={path} key={label} passHref>
                        <li
                            key={label}
                            className={`px-5 text-xl uppercase whitespace-nowrap hover:font-bold hover:scale-110 cursor-pointer ${
                                currentPage === path || (currentPage === '/shop/[isbn]' && path === "/shop") || (currentPage === '/blog/[id]' && path === "/blog") ? 'font-bold underline decoration-2 scale-110' : ''
                            }`}
                            >
                            {label}
                        </li>
                    </Link>
                 ))}
            </div>
            <div className='inline-flex gap-5 items-center'>
                <span className={`flex gap-1 items-center hover:scale-110 ${ currentPage === '/shoppingCart' ? 'scale-110  rounded-md border-b-4 border-shingle-fawn' : '' }`}>
                    <Link href="/shoppingCart" key="shoppingCart" passHref>
                        <Image
                            src={ currentPage === '/shoppingCart' ? CartActive : Cart }
                            width={30}
                            height={30}
                            alt="Cart"
                        />
                    </Link>
                    <span className='text-xl text-shingle-fawn'>{getTotalQuantity()}</span>
                </span>
                <Link href={token ? "/self" : "/login"} key="login" passHref>
                    <Image
                        src={ token ? LoginActive : Login }
                        width={30}
                        height={30}
                        alt="Login"
                        className={`hover:scale-110 ${ currentPage === '/self'  ? 'scale-110 outline outline-2 outline-offset-2 rounded-md outline-shingle-fawn' : '' }`}
                    />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;