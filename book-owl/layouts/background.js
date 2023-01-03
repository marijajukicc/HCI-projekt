const Background = ({children}) => {
    return ( 
        <div className="w-full h-60 bg-[url('../public/background.webp')] bg-center flex justify-evenly items-center">
            {children}
        </div> 
    );
};

export default Background;