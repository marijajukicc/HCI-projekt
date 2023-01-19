import Image from "next/image";
import Link from "next/link";

import Book from "../../public/book.jpg";
import Delete from "../../public/delete.png";
import Logo from "../../public/Logo.png";
import Money from "../../public/money.png";

const Cart = () => {
    return (
        <div className="flex justify-around my-16">
            <div className="grid grid-cols-2 gap-y-20 gap-x-36 justify-items-center">
                <div className="flex gap-10">
                    <Image 
                        src={Book}
                        width={200}
                        height={200}
                        alt="Book"
                    />
                    <div className="flex flex-col justify-around">
                        <p className="text-shingle-fawn text-xl">Defy the Night</p>
                        <p className="text-light-brown text-lg">Brigid Kemmerer</p>
                        <p className="text-shingle-fawn-dark font-semibold text-3xl">12.79$</p>
                        <div className="flex justify-between px-5 py-2 text-shingle-fawn-dark font-bold rounded-full bg-grey">
                            <button className="hover:scale-105">&lt;</button>
                            <p>1</p>
                            <button className="hover:scale-105">&gt;</button>
                        </div>
                        <button className="flex justify-evenly items-center rounded-full text-base text-swamp-green p-2 hover:text-shingle-fawn hover:underline">
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
                
            <aside className="border-l-2 border-shingle-fawn pl-5">
                <div className="sticky top-0 grid grid-row-6 gap-x-5 gap-y-5 mt-5 text-shingle-fawn-dark">
                    <Image
                        src={Logo}
                        width={90}
                        height={90}
                        alt="Logo"
                        className="mt-5 col-span-2 place-self-center"
                    />
                    <p className="row-start-2 text-lg">Number of items:</p>
                    <p className="row-start-2 text-lg">1</p>
                    <h2 className="row-start-3 text-2xl">Total:</h2>
                    <p className="row-start-3 text-2xl font-bold">12.79$</p>
                    <Link href="/checkout" className="col-span-2 row-start-4 mt-5" passHref>
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
                    <p className="col-span-2 place-self-center row-start-5 text-xl">or</p>
                    <Link href="/shop" className="col-span-2" passHref>
                        <button className="w-full bg-swamp-green/[.5] rounded-full p-2 text-lg hover:bg-swamp-green/[.8] hover:ring hover:ring-swamp-green/[.8] hover:ring-offset-2 text-shingle-fawn-dark">Continue shoping</button>
                    </Link>
                </div>
            </aside>
                            
        </div>
    );
};

export default Cart;