const Background = ({children}) => {
    return ( 
        <div className="flex justify-evenly items-center w-full h-60 bg-[url('../public/background.webp')] bg-center">
            {children}
        </div> 
    );
};

export default Background;