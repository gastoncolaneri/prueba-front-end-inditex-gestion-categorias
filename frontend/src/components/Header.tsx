import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full h-[60px] flex items-center p-4 bg-white">
      <img src={logo} alt="logo" className="h-full" />
    </div>
  );
};

export { Header };
