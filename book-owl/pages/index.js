import React from 'react';
import Link from 'next/link';
import Swipe from "react-easy-swipe";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { getBooks } from './api/ContentfulAPI';
import { getBlogs } from './api/ContentfulAPI';

import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import Background from '../layouts/background';

import Book from '../components/shop/book';
import PostThird from '../components/blog/postThird';

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
              <p className="uppercase font-bold text-xl md:text-3xl text-[#1e1e1e]/[.25]">Bored?</p>
              <p className="uppercase text-xl md:text-3xl text-center text-shingle-fawn">explore our page and <br></br> be entertained :)</p>
            </Background>
            <head><meta name="description" content="This is the main page where you can find books which are on sale or bestsellers, as well as popular blog posts."></meta></head>
            {/* Mobile version */}
            <div className="sm:hidden relative z-0 mt-14">
              <p className='text-center font-bold uppercase text-3xl text-shingle-fawn mb-8'>Books on sale</p>
              <AiOutlineLeft
                onClick={handlePrevSlideS}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-shingle-fawn-dark z-10"
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
                      <div key={item.isbn} className='m-auto w-1/2'>
                        <Book key={item.isbn} {...item} />
                      </div>
                    )
                  }
                })}            
                </Swipe>
              </div>

              <AiOutlineRight
                onClick={handleNextSlideS}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-shingle-fawn-dark z-10"
              />
              <div className="relative z-10 flex justify-center p-2">
                {props.books.filter(book => book.sale).map((_, index, item) => {
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

              <div className='w-1/2 m-auto flex justify-center'>
                <Link href="/shop" passHref>
                  <button className='animate-[wiggle_1s_ease-in-out_infinite] bg-light-brown/[.67] rounded-full px-6 py-4 uppercase text-base hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
                </Link>
              </div>
            </div>

            {/* Desktop version */}
            <div className='hidden mt-14 mb-20 sm:grid grid-row-3 grid-cols-5 gap-10'>
              <p className='row-span-1 col-start-3 text-center font-bold uppercase text-3xl text-shingle-fawn'>Books on sale</p>
              <div className="row-span-2 col-start-2 col-end-5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 gap-y-20">
                  {props.books.map((item) => (
                    item.sale && (
                      <Book key={item.isbn} {...item}/>
                    )
                  ))}
                </div>
              </div>
              <Link href="/shop" passHref className='row-span-3 col-start-3 place-self-center'>
                <button className='animate-[wiggle_1s_ease-in-out_infinite] hover:animate-none bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
              </Link>
            </div>

            <div className='mt-20 mb-20 grid grid-row-3 grid-cols-5 gap-5'>
              <p className='row-span-1 col-start-3 place-self-center font-bold uppercase text-3xl text-shingle-fawn'>Blogs</p>
              <div className="row-span-2 col-start-2 col-end-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 gap-y-2">
                  {props.blogs.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex flex-wrap justify-between -mx-6">
                      <PostThird key={item.id} {...item} option/>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/blog" passHref className='row-span-3 md:col-start-3 md:col-span-1 col-span-5 place-self-center'>
                <button className='animate-[wiggle_1s_ease-in-out_infinite] hover:animate-none bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-base md:text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>More posts</button>
              </Link>
            </div>

            {/* Mobile version */}
            <div className="sm:hidden relative z-0 mb-14">
              <p className='text-center font-bold uppercase text-3xl text-shingle-fawn mb-8'>Bestsellers</p>
              <AiOutlineLeft
                onClick={handlePrevSlideB}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-shingle-fawn-dark z-10"
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
                        <div key={item.isbn} className='m-auto w-1/2'>
                          <Book key={item.isbn} {...item} />
                        </div>
                      )
                    }
                  })}            
                </Swipe>
              </div>
              <AiOutlineRight
                onClick={handleNextSlideB}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-shingle-fawn-dark z-10"
              />
              <div className="relative z-10 flex justify-center p-2">
                {props.books.filter(book => book.bestseller).map((_, index, item) => {
                    return ( 
                      <div
                        className={
                          index === currentSlideB
                            ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                            : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                        }
                        key={index}
                        onClick={() => {
                          setCurrentSlideB(index);
                        }}
                      />
                    );
                  
                })}
              </div> 

              <div className='w-1/2 m-auto flex justify-center'>
                <Link href="/shop" passHref>
                  <button className='animate-[wiggle_1s_ease-in-out_infinite] bg-light-brown/[.67] rounded-full px-6 py-4 uppercase text-base hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
                </Link>
              </div>
            </div>

            {/* Desktop version */}
            <div className='hidden mb-20 sm:grid grid-row-3 grid-cols-5 gap-10'>
                <p className='row-span-1 col-start-3 text-center font-bold uppercase text-3xl text-shingle-fawn'>Bestsellers</p>
                <div className="row-span-2 col-start-2 col-end-5">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 gap-y-20">
                    {props.books.map((item) => (
                      item.bestseller && (
                        <Book key={item.isbn} {...item}/>
                      )
                    ))}
                  </div>
                </div>
                <Link href="/shop" passHref className='row-span-3 col-start-3 place-self-center'>
                  <button className='animate-[wiggle_1s_ease-in-out_infinite] hover:animate-none bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Discover more</button>
                </Link>
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