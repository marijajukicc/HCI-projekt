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




        <section>
        <div className="flex">
        <div className='w-2/12 flex items-center'>
            <div className='w-full text-right'>
                <button className='p-3 rounded-full bg-white border border-gray-100 shadow-lg mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </button>
            </div>
        </div>
        <div id="sliderContainer" className='w-full'>
            <ul id="slider" className='flex w-full border border-red-500'>
                <li className='w-96 p-5'>
                <div className='border rounded-lg p-5'>
                {props.books.map((item) => (
                    item.sale && (
                      <Book key={item.isbn} {...item}/>
                    )
                  ))}
                </div>
                </li>
            </ul>
        </div>
        <div className='w-2/12 flex items-center'>
            <div className='w-full text-left'>
                <button className='p-3 rounded-full bg-white  border border-gray-100 shadow-lg mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </button>
            </div>
        </div>
        </div>
        </section>
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