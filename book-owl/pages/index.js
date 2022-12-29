import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import Background from '../layouts/background';
import Books from '../components/books';

const Home = () => {
  return (
    <>
        <HeaderFooterLayout>
            <Background>
              <p className="uppercase text-3xl text-[#1e1e1e]/[.25]">Bored?</p>
              <p className="uppercase text-3xl text-center text-shingle-fawn">explore our page and <br></br> be entertained :)</p>
            </Background>

          <div className='mt-6 mb-20 flex flex-col items-center gap-10'>
            <p className='uppercase text-3xl text-shingle-fawn'>Sale</p>
            <Books />
          </div>

          <div className='mb-20 flex flex-col items-center gap-10'>
            <p className='uppercase text-3xl text-shingle-fawn'>Blogs</p>
            <Books />
          </div>

          <div className='mb-14 flex flex-col items-center gap-10'>
            <p className='uppercase text-3xl text-shingle-fawn'>Our bestsellers</p>
            <Books />
          </div>

        </HeaderFooterLayout>
    </>
  );
};

export default Home;