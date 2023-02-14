import bg from "../public/background.webp";

const Background = ({ children }) => {
  return (
    <div
      style={{
        background: `url(${bg.src})`,
        backgroundPosition: "center",
        height: "15rem",
      }}
      className="flex md:flex-row flex-col justify-evenly items-center w-full"
    >
      {children}
    </div>
  );
};

export default Background;

