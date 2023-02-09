import { useRef } from "react";
import Image from "next/image";

import Search from "/public/search.png"

const SearchBar = () => {
    const clickPoint = useRef();

    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

    return(
        <div className="items-center flex justify-start pr-5">
            <div className="relative flex-grow">
                <div className="mt-20 absolute top-3 left-3 items-center" ref={clickPoint}>
                    <Image
                    src={Search}
                    width={20}
                    height={20}
                    alt="Search logo"
                    />
                </div>
                <input
                    type="text"
                    className="mt-20 block p-2 pl-10 w-full text-shingle-fawn-dark bg-gray rounded-lg border-2 border-swamp-green focus:pl-3 focus:outline-swamp-green"
                    placeholder="Search here..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    );
};
     
export default SearchBar;
    