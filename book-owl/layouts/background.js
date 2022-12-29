const Background = ({children}) => {
    return ( 
        <div className="w-full bg-[url('../public/background.webp')] bg-center h-60 flex justify-around items-center text-3xl">
            {children}
        </div> 
    );
};

export default Background;