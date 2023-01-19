import { useSelector } from 'react-redux';

import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import EmptyCart from "../components/shoppingCart/emptyCart";
import Cart from "../components/shoppingCart/cart";

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <HeaderFooterLayout>
            {cart.length === 0 ? (
                <EmptyCart /> 
                ) : (
                <Cart />
            )}
        </HeaderFooterLayout>

    );
};

export default ShoppingCart;