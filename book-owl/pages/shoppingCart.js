import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
//import EmptyCart from "../components/shoppingCart/emptyCart";
import Cart from "../components/shoppingCart/cart";

const ShoppingCart = () => {
    return (
        <HeaderFooterLayout>
            {/* <EmptyCart /> */}
            <Cart />
        </HeaderFooterLayout>

    );
};

export default ShoppingCart;