import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Background from "../layouts/background";
import SearchBar from '../components/shop/searchbar';
import Filters from '../components/shop/filters';
import { fetchEntries } from "./api/ContentfulAPI";
import Book from "../components/shop/book";
import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { filter } from "../constants/filter";

const Shop = (props) => {
    const { fields } = props;
    const [chategory, setChategory] = useState("");

    function handleClick (i) {
        setChategory(i);
    }

    return (
        <HeaderFooterLayout>
            <Background>
                <p className="uppercase text-3xl text-center text-shingle-fawn">Shop</p>
            </Background>

            <div className="grid grid-cols-5 gap-8 p-20">
                <aside className="border-r-2 border-shingle-fawn -ml-10">
                    <div className="sticky top-0">
                        <SearchBar />
                        <Filters />
                    </div>
                </aside>

                <div className="col-start-2 col-end-6">
                    <ScrollContainer className="scroll-container flex ml-10 mb-10 gap-6 flex-nowrap scrollbar-hide text-shingle-fawn-dark select-none whitespace-nowrap overflow-x-auto last:mr-auto">
                        {filter.chategories.items.map((option) => (
                            <button onClick={(e) => handleClick(option)} className="bg-grey rounded-full px-10 py-2 text-base hover:bg-swamp-green/[.4] active:bg-swamp-green/[.6]">{option}</button>
                        ))}
                    </ScrollContainer>

                    <div className="grid grid-cols-4 gap-12 gap-y-20 ml-10 mt-16">                  
                        {fields.map((item) => {
                            if(item.chategory === chategory) {
                                return (
                                    <Book key={item.isbn} {...item}/>
                                )
                            }
                                
                            if(chategory === 'All books') {
                                return (
                                    <Book key={item.isbn} {...item}/>
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
    const entries = await fetchEntries();
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