import BookListItem from "./bookListItem";

const items = [
    { src: '../public/books/book1', ext: 'jpg', text: '10$' },
    { src: '../public/books/book2', ext: 'jpg', text: '10$' },
    { src: '../public/books/book3', ext: 'jpg', text: '10$' },
    { src: '../public/books/book4', ext: 'jpg', text: '10$' },
]

const Books = () => {
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex gap-16">
                {items.map((item) => (
                    <BookListItem key={item.src} {...item} />
                ))}
            </div>
            <button className='bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
        </div>
        
    );
};

export default Books;