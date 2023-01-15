import { useState } from "react";
import { useRouter } from "next/router";

import { filter } from "../../constants/filter";
import { sortingOptions } from "../../constants/filter";

const Filters = () => {
    const [author, setAuthor] = useState("all");
    const [price, setPrice] = useState({ min: 0, max: 200 });
    const [sale, setSale] = useState("all");
    const [sortby, setSortBy] = useState("");
    const router = useRouter();

    return(
        <div>
            <div className="md:flex-row justify-items-start md:block hidden">
                <h1 className="mt-20 mb-5 text-xl text-shingle-fawn-dark">Filters</h1>
            </div>
            <div>
                <div className="mr-5 mb-4 text-shingle-fawn-dark">
                    <select
                        name="author"
                        id="author"
                        className="w-full p-2 outline-swamp-green/[.6] rounded-full bg-grey"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    >
                        <option value={"all"} key={"all"}>
                        All Authors
                        </option>
                        {filter.author.items.map((option) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                </div>
                
                <div className="mr-5 mb-4 text-shingle-fawn-dark">
                    <select
                        name="sort"
                        id="sort"
                        className="w-full p-2 outline-swamp-green/[.6] rounded-full bg-grey"
                        onChange={(e) => setSortBy(e.target.value)}
                        value={sortby}
                    >
                        <option value={""} disabled hidden>
                        Sort By
                        </option>
                        {sortingOptions.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.title}
                        </option>
                        ))}
                    </select>
                </div>

                <div className="mr-5 text-shingle-fawn-dark">
                    <select
                        name="sale"
                        id="sale"
                        className="w-full p-2 outline-swamp-green/[.6] rounded-full bg-grey"
                        onChange={(e) => setSale(e.target.value)}
                        value={sale}
                    >
                        <option value={"all"} key={"all"}>
                        Sale/New Season
                        </option>
                        <option value={"sale"} key={"sale"}>
                        Sale
                        </option>
                        <option value={"new"} key={"new"}>
                        New Season
                        </option>
                    </select>
                </div>

                <button
                className="bg-swamp-green/[.8] rounded-full mt-8 px-5 py-2 text-base hover:bg-swamp-green hover:ring hover:ring-swamp-green hover:ring-offset-2 text-shingle-fawn-dark"
                >
                Apply
                </button>
      </div>
    
    </div>
        
    );
};

export default Filters;