import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { 
    incrementQuantity,
    decrementQuantity,
    removeFromCart 
} from "../../redux/cart.slice";
import Delete from "../../public/delete.png";
import Logo from "../../public/big-logo.png";
import Money from "../../public/money.png";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price,
            0
        );
    }

    const getTotalQuantity = () => {
        return cart.reduce(
            (accumulator, item) => accumulator + item.quantity,
            0
        );
    }

    return (
        <div className="flex flex-wrap md:grid grid-col-2 my-10 sm:my-20 md:my-30 lg:my-40  mx-4">
            <div className="col-start-1 grid grid-cols-1 md:grid-cols-2 px-20 gap-14  items-center">
                {cart.map((item) => (
                    <div className="flex flex-wrap gap-x-5" key={item.isbn}>
                        <Image 
                        src={'https:' + item.coverImage.fields.file.url}
                        width={200}
                        height={200}
                        alt="Book"
                        className="object-contain"
                        />
                        <div className="grow flex flex-col justify-between">
                            <p className="text-shingle-fawn text-lg">{item.title}<br></br><span className="text-light-brown text-sm">{item.author}</span></p>
                            <p className="mt-auto text-shingle-fawn-dark text-xl">${item.price}</p>
                            <div>
                                <div className="mb-10 mt-8 w-2/3 flex justify-between px-5 py-2 text-shingle-fawn-dark font-bold rounded-full bg-gray">
                                    <button onClick={() => dispatch(decrementQuantity(item.isbn))} className="hover:scale-105">&lt;</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => dispatch(incrementQuantity(item.isbn))} className="hover:scale-105">&gt;</button>
                                </div>
                                <button onClick={() => dispatch(removeFromCart(item.isbn))} className="place-self-start flex gap-x-2 justify-evenly items-center rounded-full text-base text-swamp-green p-2 hover:text-shingle-fawn hover:underline">
                                    <Image 
                                        src={Delete}
                                        width={15}
                                        height={15}
                                        alt="X"
                                    />
                                    Delete item
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                      
            <aside className="col-start-2 md:border-l-2 border-shingle-fawn pl-5">
                <div className="sticky top-20 flex flex-col gap-5 text-shingle-fawn-dark">
                    <Image
                        src={Logo}
                        width={120}
                        height={120}
                        alt="Logo"
                        className="mt-5 col-span-2 place-self-center"
                    />
                    <div className="grid grid-cols-2 gap-y-5 items-center">
                        <p className="col-start-1 text-lg ">Number of items: </p>
                        <p className="col-start-2 ml-auto">{getTotalQuantity()}</p>
                        <h2 className="col-start-1 text-2xl ">Total:</h2>
                        <p className="col-start-2 ml-auto text-2xl font-bold underline">{getTotalPrice().toFixed(2)}$</p>
                    </div>

                    <Link href="/checkout" className=" mt-5" passHref>
                        <button className="w-full flex justify-evenly items-center bg-light-brown/[.95] rounded-full p-3 uppercase text-base hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark">
                            <Image 
                                src={Money}
                                width={30}
                                height={30}
                                alt="Money"
                                />
                            Checkout
                        </button>
                    </Link>
                    <p className=" place-self-center text-xl">or</p>
                    <Link href="/shop" className="" passHref>
                        <button className="w-full bg-swamp-green/[.5] rounded-full p-2 text-lg hover:bg-swamp-green/[.8] hover:ring hover:ring-swamp-green/[.8] hover:ring-offset-2 text-shingle-fawn-dark">Continue shopping</button>
                    </Link>
                </div>
            </aside>
                            
        </div>
    );
};

export default Cart;