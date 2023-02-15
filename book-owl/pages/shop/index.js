import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import Background from "../../layouts/background";

import SearchBar from '../../components/shop/searchbar';
import Filters from '../../components/shop/filters';
import Book from "../../components/shop/book";

import { getBooks } from "../api/ContentfulAPI";

import { filter } from "../../constants/filter";

import { sortProducts } from "../../lib/sorting";
import { searchProducts } from "../../lib/search";
import { priceProducts } from "../../lib/price";
import { saleProducts } from "../../lib/sale";

const Shop = (props) => {
    const { fields } = props;

    const [category, setCategory] = useState("");
    const [clicked, setClicked] = useState(false);

    const [query, setQuery] = useState("");
    const [sortingOption, setSortingOption] = useState("");
    const [priceOption, setPriceOption] = useState("");
    const [saleOption, setSaleOption] = useState("");

    const [filtered, setFiltered] = useState(fields);

    useEffect(() => {
        setFiltered(searchProducts(query, fields));
    }, [query])

    useEffect(() => {
        setFiltered(saleProducts(saleOption, filtered, fields));
    }, [saleOption])

    useEffect(() => {
        setFiltered(priceProducts(priceOption, filtered, fields));
    }, [priceOption])

    
    const sorted = sortProducts(sortingOption, filtered);

    const handleClick = (i) => {
        setCategory(i);
        setClicked(true);
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    
    const handleSorting = (e) => {
        setSortingOption(e.target.value);
    }
    
    const handlePrice = (e) => {
        setPriceOption(e.target.value);
    }
    
    const handleSale = (e) => {
        setSaleOption(e.target.value);
    }

    const handleRemove = (e) => {
        setFiltered(fields);
        setSortingOption("");
        setPriceOption("");
        setSaleOption("");
    }
    
    return (
        <HeaderFooterLayout title="BookOwl / Shop" description="This is the shop page. Here you can see all the books we have. We have wide range of books including Teen and YA, Social Science...">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-4 md:gap-x-8 md:gap-y-8 p-1 sm:p-2 md:p-16">
                <main className="flex items-center justify-center mb-5 md:hidden ">
                    <div className="">
                        <SearchBar handleChange={handleChange}/>
                        <Filters handleSorting={handleSorting} handlePrice={handlePrice} handleRemove={handleRemove} handleSale={handleSale}
                        />
                    </div>
                </main>
                <aside className="hidden md:block border-r-2 border-shingle-fawn -ml-10">
                    <div className="sticky top-5">
                        <SearchBar handleChange={handleChange}/>
                        <Filters handleSorting={handleSorting} handlePrice={handlePrice} handleRemove={handleRemove} handleSale={handleSale}
                        />
                    </div>
                </aside>

                <div className="col-start-1 col-end-3 md:col-start-2 md:col-end-5 lg:col-start-2 lg:col-end-6 mb-8">
                    <ScrollContainer className="scroll-container flex ml-10 mb-10 gap-2 md:gap-6 flex-nowrap scrollbar-hide text-shingle-fawn-dark select-none whitespace-nowrap overflow-x-auto last:mr-auto">
                        {filter.categories.items.map((option) => (
                            <button onClick={(e) => handleClick(option)} key={option.title} className=
                            {`${category === option && clicked || (category === '' && option === 'All books') ? 'bg-swamp-green/[.8] font-bold' : 'bg-gray hover:bg-swamp-green/[.4]'}  rounded-full px-10 py-2 text-base`}>
                                {option}
                            </button>
                        ))}
                    </ScrollContainer>

                    <div className="mx-16 sm:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-0 md:gap-12 gap-y-12 md:gap-y-20 md:ml-10 mt-16">                  
                        {filtered?.map((item) => {
                            if(item.category === category) {
                                return (
                                    <Book key={item.isbn} {...item} />
                                )
                            }
                                
                            if(category === 'All books' || category === '') {
                                return (
                                    <Book key={item.isbn} {...item} />
                                )
                            }
                        })}
                    </div>
                </div>
                
            </div>

        </HeaderFooterLayout>
    );
};


export async function getStaticProps() {
    const entries = await getBooks();
    let data = entries.filter(() => function() {
    return item.sys.contentType.sys.id === 'books'})
    const fields = data.map((item) => item.fields );
    return {
        props: {
            fields: fields,
        }
    }

}

export default Shop;
