import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import Link from 'next/link';
import Background from '../layouts/background';
import Book from '../components/shop/book';
import PostThird from '../components/blog/postThird';
import { getBooks } from './api/ContentfulAPI';
import { getBlogs } from './api/ContentfulAPI';

const Home = (props) => {
  const option = false;

  return (
    <>
        <HeaderFooterLayout>
            <Background>
              <p className="uppercase text-3xl text-[#1e1e1e]/[.25]">Bored?</p>
              <p className="uppercase text-3xl text-center text-shingle-fawn">explore our page and <br></br> be entertained :)</p>
            </Background>


          <div className='mt-6 mb-20 grid grid-row-3 grid-cols-5 gap-10'>
              <p className='row-span-1 col-start-3 place-self-center uppercase text-3xl text-shingle-fawn'>Sale</p>
              <div className="row-span-2 col-start-2 col-end-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 gap-y-20">
                  {props.books.map((item) => (
                    item.sale && (
                      <Book key={item.isbn} {...item}/>
                    )
                  ))}
                </div>
              </div>
                <button className='row-span-3 col-start-3 place-self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'><Link href="/shop" passHref>Discover more</Link></button>
          </div>

          <div className='mt-6 mb-20 grid grid-row-3 grid-cols-5 gap-10'>
              <p className='row-span-1 col-start-3 place-self-center uppercase text-3xl text-shingle-fawn'>Blogs</p>
              <div className="row-span-2 col-start-2 col-end-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20">
                  {props.blogs.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex flex-wrap justify-between -mx-6">
                      <PostThird key={item.id} {...item} option/>
                    </div>
                  ))}
                </div>
              </div>
              <button className='row-span-3 col-start-3 place-self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'><Link href="/blog" passHref>More posts</Link></button>
          </div>

          <div className='mt-6 mb-20 grid grid-row-3 grid-cols-5 gap-10'>
              <p className='row-span-1 col-start-3 place-self-center uppercase text-3xl text-shingle-fawn'>Bestsellers</p>
              <div className="row-span-2 col-start-2 col-end-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 gap-y-20">
                  {props.books.map((item) => (
                    item.bestseller && (
                      <Book key={item.isbn} {...item}/>
                    )
                  ))}
                </div>
              </div>
                <button className='row-span-3 col-start-3 place-self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'><Link href="/shop" passHref>Discover more</Link></button>
          </div>

        </HeaderFooterLayout>
    </>
  );
};

export async function getStaticProps() {
  const entries = await getBooks();
  const entriesI = await getBlogs();

  let data = entries.filter(() => function() {
  return item.sys.contentType.sys.id === 'books'})

  let dataI = entriesI.filter(() => function() {
  return item.sys.contentType.sys.id === 'blogs'})

  const fields = data.map((item) => item.fields );
  const fieldsI = dataI.map((itemI) => itemI.fields );

  return {
    props: {
      books: fields, 
      blogs: fieldsI,
    },
  };

};


export default Home;