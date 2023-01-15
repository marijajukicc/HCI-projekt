import Image from "next/image";

import Cart4 from "../../public/shopping-cart4.png";

const Book = ({author, title, price, coverImage}) => {
   
    return (
        <div className="flex flex-col gap-3">
            <Image 
                src={'https:' + coverImage.fields.file.url}
                width={200}
                height={200}
                alt="Book"
                className="hover:scale-105"
            />
            <p className="text-lg text-shingle-fawn font-bold">{title}</p>
            <p className="text-sm text-light-brown">{author}</p>
            <p className="my-5 text-xl text-shingle-fawn-dark font-semibold">{price}$</p>
            
            <button className='flex justify-evenly items-center mt-auto bg-light-brown/[.95] rounded-full p-3 uppercase text-base hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>
                <Image 
                    src={Cart4}
                    width={30}
                    height={30}
                    alt="Cart"
                />
                Add to cart
            </button>   
    </div>

    );
};

export default Book;

