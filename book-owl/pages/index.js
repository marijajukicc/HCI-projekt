import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import Background from '../components/background';
import Books from '../components/books';

const Home = () => {
  return (
    <>
        <HeaderFooterLayout>
          <Background />

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