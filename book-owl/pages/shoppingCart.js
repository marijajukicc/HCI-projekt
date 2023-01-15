import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Background from "../layouts/background";

const ShoppingCart = () => {
    return (
        <HeaderFooterLayout>
            <Background>
                <p className="uppercase text-3xl text-center text-shingle-fawn">Shopping Cart</p>
            </Background>
        </HeaderFooterLayout>
    );
};

export default ShoppingCart;