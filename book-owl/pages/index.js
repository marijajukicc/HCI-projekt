import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import React from 'react';
import Link from 'next/link';
import Background from '../layouts/background';
import Book from '../components/shop/book';
import PostThird from '../components/blog/postThird';
import { getBooks } from './api/ContentfulAPI';
import { getBlogs } from './api/ContentfulAPI';
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Home = (props) => {
  const option = false;
  const [currentSlideS, setCurrentSlideS] = useState(0);

  const handleNextSlideS = () => {
    let newSlideS = currentSlideS === props.books.filter(book => book.sale).length - 1 ? 0 : currentSlideS + 1;
    setCurrentSlideS(newSlideS);
  };

  const handlePrevSlideS = () => {
    let newSlideS = currentSlideS === 0 ? props.books.filter(book => book.sale).length - 1 : currentSlideS - 1;
    setCurrentSlideS(newSlideS);
  };
  const [currentSlideB, setCurrentSlideB] = useState(0);

  const handleNextSlideB = () => {
    let newSlideB = currentSlideB === props.books.filter(book => book.bestseller).length - 1 ? 0 : currentSlideB + 1;
    setCurrentSlideB(newSlideB);
  };

  const handlePrevSlideB = () => {
    let newSlideB = currentSlideB === 0 ? props.books.filter(book => book.bestseller).length - 1 : currentSlideB - 1;
    setCurrentSlideB(newSlideB);
  };
  return (
    <>
        <HeaderFooterLayout title="BookOwl / Home">
            <Background>
              <p className="uppercase text-3xl text-[#1e1e1e]/[.25]">Bored?</p>
              <p className="uppercase text-3xl text-center text-shingle-fawn">explore our page and <br></br> be entertained :)</p>
            </Background>


            <div className="sm:hidden relative z-0 ">
            <p className='text-center justify-center items-center uppercase text-3xl text-shingle-fawn'>Sale</p>
            <AiOutlineLeft
            onClick={handlePrevSlideS}
            className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-10"
            />
          <div className="w-full flex overflow-hidden relative z-0 m-auto">
              <Swipe
                onSwipeLeft={handleNextSlideS}
                onSwipeRight={handlePrevSlideS}
                className="relative z-0 w-full h-full"
              >
                
                {props.books.filter(book => book.sale).map((item, index) =>{ 
                  if (index === currentSlideS) {
                    return (
                      <Book key={item.isbn} {...item} />
                    )
                  }
                })}            
                </Swipe>
            </div>
            <AiOutlineRight
            onClick={handleNextSlideS}
            className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-10"
            />
          <div className="relative z-10 flex justify-center p-2">
            {props.books.filter(book => book.sale).map((_, index, item) => {
                console.log(index);
                return ( 
                  <div
                    className={
                      index === currentSlideS
                        ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                      setCurrentSlideS(index);
                    }}
                  />
                );
              
            })}
          </div>
          <div>
          <button className='w-1/2 place-self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'><Link href="/shop" passHref>Discover more</Link></button>
          </div>
          </div>

          <div className='hidden sm:block mt-6 mb-20 sm:grid grid-row-3 grid-cols-5 gap-10'>
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
          <div className="sm:hidden relative z-0">
          <p className='flex justify-center items-center uppercase text-3xl text-shingle-fawn'>Bestsellers</p>
            <AiOutlineLeft
            onClick={handlePrevSlideB}
            className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-10"
            />
          <div className="w-full flex overflow-hidden relative z-0 m-auto">
              <Swipe
                onSwipeLeft={handleNextSlideB}
                onSwipeRight={handlePrevSlideB}
                className="relative z-0 w-full h-full"
              >
                
                {props.books.filter(book => book.bestseller).map((item, index) =>{ 
                  if (index === currentSlideB) {
                    return (
                      <Book key={item.isbn} {...item} />
                    )
                  }
                })}            
                </Swipe>
            </div>
            <AiOutlineRight
            onClick={handleNextSlideB}
            className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-10"
            />
          <div className="relative z-10 flex justify-center p-2">
            {props.books.filter(book => book.bestseller).map((_, index, item) => {
                console.log(index);
                return ( 
                  <div
                    className={
                      index === currentSlideB
                        ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                    }}
                  />
                );
              
            })}
          </div>
          
          </div>
          <div className='hidden sm:block mt-6 mb-20 sm:grid grid-row-3 grid-cols-5 gap-10'>
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