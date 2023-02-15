import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useState } from "react";

import Cart4 from "../../public/shopping-cart4.png";
import { addToCart } from "../../redux/cart.slice";

const Book = ({...item}) => {
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);

    return (
        <div className="flex flex-col">
            <Link href={`/shop/${item.isbn}`} key={item.isbn} passHref>
                <Image 
                    src={'https:' + item.coverImage.fields.file.url}
                    width={200}
                    height={200}
                    alt="Book"
                    className="hover:scale-105 w-75 h-50 object-cover rounded-md"
                />
            </Link>
            <p className="mt-2 mb-2 text-2xl text-shingle-fawn font-bold">{item.title}</p>
            <p className="mb-8 text-sm text-light-brown">{item.author}</p>
            <div className="mt-auto">
                {item.sale &&
                    <>
                        <p className="text-2xl text-shingle-fawn-dark line-through">${item.oldPrice}</p>
                        <p className="text-2xl text-red-600 font-semibold">${item.price}</p>
                    </>
                }
                {!item.sale &&
                    <p className="text-2xl text-shingle-fawn-dark font-semibold">${item.price}</p>
                }
                    <button onClick={() => {dispatch(addToCart(item)); setClicked(true); setTimeout(() => {setClicked(false);}, 2000);}} 
                        className={`mt-6 flex justify-evenly items-center bg-light-brown/[.95] rounded-full p-3 uppercase text-sm md:text-base hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark
                        ${clicked ? 'hidden' : ''}`}>
                        <Image 
                            src={Cart4}
                            width={30}
                            height={30}
                            alt="Cart"
                        />
                        Add to cart
                    </button>
                    {clicked && (
                        <p className="mt-6 text-shingle-fawn-dark"><span className="font-extrabold ">{item.title}</span> <span className="text-swamp-green font-bold">successfully</span> added to cart!</p>
                    )}
            </div> 
    </div>

    );
};

export default Book;

