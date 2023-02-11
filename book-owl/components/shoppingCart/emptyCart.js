import Image from "next/image";
import Link from "next/link";

import emptyCart from "../../public/empty-cart.png";

const EmptyCart = () => {
    return (
        <div className="my-24 flex flex-col items-center">
            <Image 
                src={emptyCart}
                width={350}
                height={350}
                alt="Cart"
            />
            <h1 className="text-shingle-fawn text-3xl font-semibold mt-10 uppercase">No items in cart!</h1>
            <p className="text-shingle-fawn text-lg my-10">Let us help you find something to read.</p>
            <Link href="/shop" passHref>
                <button className="animate-pulse-slow hover:animate-none transition-colors duration-300 shadow-xl shadow-shingle-fawn-dark bg-swamp-green rounded-full px-7 py-4 uppercase text-xl hover:ring hover:ring-swamp-green hover:ring-offset-2 text-shingle-fawn-dark mt-4">Shop now</button>
            </Link>
        </div>
    );
};

export default EmptyCart;