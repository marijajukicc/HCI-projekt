import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import Background from '../layouts/background';
import Book from '../components/shop/book';
import { fetchEntries } from './api/ContentfulAPI';

const Home = (props) => {
  const { fields } = props;

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
                <div className="grid grid-cols-4 gap-12 gap-y-20">
                  {fields.map((item) => (
                    item.sale && (
                      <Book key={item.isbn} {...item}/>
                    )
                  ))}
                </div>
              </div>
                <button className='row-span-3 col-start-3 place-self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
          </div>

          <div className='mt-6 mb-20 grid grid-row-3 grid-cols-5 gap-10'>
              <p className='row-span-1 col-start-3 place-self-center uppercase text-3xl text-shingle-fawn'>Blogs</p>
              <div className="row-span-2 col-start-2 col-end-5">
                <div className="grid grid-cols-4 gap-12 gap-y-20">
                  
                </div>
              </div>
                <button className='row-span-3 col-start-3 place-self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
          </div>

          <div className='mt-6 mb-20 grid grid-row-3 grid-cols-5 gap-10'>
              <p className='row-span-1 col-start-3 place-self-center uppercase text-3xl text-shingle-fawn'>Bestsellers</p>
              <div className="row-span-2 col-start-2 col-end-5">
                <div className="grid grid-cols-4 gap-12 gap-y-20">
                  {fields.map((item) => (
                    item.bestseller && (
                      <Book key={item.isbn} {...item}/>
                    )
                  ))}
                </div>
              </div>
                <button className='row-span-3 col-start-3 place-self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
          </div>

        </HeaderFooterLayout>
    </>
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
  };
};

export default Home;