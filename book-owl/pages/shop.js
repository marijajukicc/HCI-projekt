import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Background from "../layouts/background";
import SearchBar from '../components/shop/searchbar';
import Filters from '../components/shop/filters';
import Chategory from "../components/shop/chategory";
import { fetchEntries } from "./api/ContentfulAPI";
import Book from "../components/shop/book";

const Shop = (props) => {
    const { fields } = props;

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
                    <Chategory />
                    <div className="grid grid-cols-4 gap-12 gap-y-20 ml-10 mt-16">                  
                        {fields.map((item) => (
                            <Book key={item.isbn} {...item}/>
                        ))}
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