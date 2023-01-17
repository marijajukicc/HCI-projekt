import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import { fetchEntries } from "../api/ContentfulAPI";
import Cart4 from "../../public/shopping-cart4.png";
import Package from "../../public/package.png";

const BookDetails = (props) => {
    const { fields } = props;
    const router = useRouter();
    const bookID = router.query.isbn;

    return (
        <HeaderFooterLayout>

            <div className="p-10 mx-20">
            {fields?.map((item) => {
               if(item.isbn == bookID) {
                return (
                    <div key={bookID}>
                        <Link href="/shop" passHref>
                            <p className="text-light-brown mb-8">Category {">"} {item.category} </p>
                        </Link>
                        <div className="grid grid-cols-2 grid-rows-5 items-center">
                            <Image
                                src={'https:' + item.coverImage.fields.file.url}
                                width={250}
                                height={250}
                                alt="Book"
                                className="row-span-5 place-self-center"
                            />
                            <h1 className="col-start-2 text-3xl text-shingle-fawn font-bold">{item.title}</h1>
                            <p className="col-start-2 text-xl text-light-brown">{item.author}</p>
                            <p className="col-start-2 text-2xl text-shingle-fawn-dark font-semibold">{item.price}$</p>
                            <button className='col-start-2 w-1/3 flex justify-evenly items-center  bg-light-brown/[.95] rounded-full p-3 uppercase text-base hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>
                                <Image 
                                    src={Cart4}
                                    width={30}
                                    height={30}
                                    alt="Cart"
                                />
                                Add to cart
                            </button>
                            <div className="col-start-2 flex">
                                <Image
                                    src={Package}
                                    width={30}
                                    height={30}
                                    alt="Package"
                                />
                                <p className="ml-2 text-lg text-shingle-fawn">It usually takes two days for our owls to deliver.</p>
                            </div>

                            <h2 className="place-self-center mt-28 mb-10 text-shingle-fawn-dark text-2xl font-semibold">More information about book</h2>

                            <div className="col-start-1 text-shingle-fawn-dark text-lg place-self-center">
                                <h3>ISBN</h3>
                                <h3>Publisher</h3>
                                <h3>Publish date</h3>
                                <h3>Language</h3>
                                <h3>Number of pages</h3>                 
                            </div>

                            <div className="col-start-2 text-shingle-fawn-dark text-lg">
                                <p>{item.isbn}</p>                  
                                <p>{item.publisher}</p>                  
                                <p>{item.published}</p>                  
                                <p>{item.language}</p>                  
                                <p>{item.numberOfPages}</p> 
                            </div>
                        </div>
                    </div>
                )           
            } 
            })}
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

export async function getStaticPaths() {
    return {
      paths: [
        // String variant:
        '/shop/1',
      ],
      fallback: true,
    }
  }

export default BookDetails;