import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Background from "../layouts/background";
import BookListItem from "../components/bookListItem";
import SearchBar from '../components/shop/searchbar';
import Filters from '../components/shop/filters';
import Chategory from "../components/shop/chategory";

const Shop = () => {
    const items = [
        { src: '../public/books/book4', ext: 'jpg', text: '10$' },
        { src: '../public/books/book2', ext: 'jpg', text: '10$' },
        { src: '../public/books/book3', ext: 'jpg', text: '10$' },
        { src: '../public/books/book1', ext: 'jpg', text: '10$' },
        { src: '../public/books/book1', ext: 'jpg', text: '10$' },
        { src: '../public/books/book4', ext: 'jpg', text: '10$' },
        { src: '../public/books/book2', ext: 'jpg', text: '10$' },
        { src: '../public/books/book3', ext: 'jpg', text: '10$' },
        { src: '../public/books/book4', ext: 'jpg', text: '10$' },
    ]

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
                    <div className="grid grid-cols-5 gap-12 gap-y-20 ml-10 mt-16">
                        {items.map((item) => (
                        <BookListItem key={item.src} {...item} />
                    ))}
                    </div>
                </div>
            </div>

        </HeaderFooterLayout>
    );
};

export default Shop;