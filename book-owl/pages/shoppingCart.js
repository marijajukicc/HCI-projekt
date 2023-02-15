import { useSelector } from 'react-redux';

import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import EmptyCart from "../components/shoppingCart/emptyCart";
import Cart from "../components/shoppingCart/cart";

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);

    return (
        <HeaderFooterLayout title="BookOwl / Shopping cart">
            <head><meta name="description" content="This is the shopping cart. It's empty if you don't put any books in it. So put some books."></meta></head>
            {cart.length === 0 ? (
                <EmptyCart /> 
                ) : (
                <Cart />
            )}
        </HeaderFooterLayout>

    );
};

export default ShoppingCart;