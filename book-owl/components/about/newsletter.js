const Newsletter = () => {
    return (
        <div className="w-full lg:w-2/3 mx-auto relative p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-gradient-to-r from-[#799633] to-swamp-green p-6 md:p-10 lg:p-[60px] rounded-2xl">
                <div>
                <h3 className="text-white text-xl md:text-3xl font-semibold">Sign up for our newsletter</h3>

                <p className="text-base md:text-xl text-white mt-4">
                    Get the best news on weelky basis! Join now and don&#39;t miss it.
                </p>
                </div>

                <div>
                    <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-stretch">
                        <input
                        type="email"
                        placeholder="Enter your email"
                        className="placeholder-gray bg-transparent appearance-none border-b-2 focus:outline-none px-4 w-full shadow-sm "
                    />

                        <button className="bg-light-brown/[.8]  text-shingle-fawn-dark md:py-2 md:px-4 rounded-full font-semibold md:ml-4 border-2 border-light-brown/[.8] hover:border-shingle-fawn-dark">
                        Subscribe
                        </button>
                    </div>

                    <p className="text-white mt-2 text-xs md:text-sm">
                        We care about your data in our <a href="#" className="underline">privacy policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;