import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = ({ isNavEnabled, currentQuestion }) => {
  return (
    <div
      id="header"
      className={`header z-50 px-[3%] py-4 xl:p-6 text-white/25 lg:fixed bottom-0 left-0 right-0 lg:top-0 lg:bottom-auto overflow-hidden transition duration-500 ${
        isNavEnabled ? "lg:bg-monzo-black" : ""
      }`}
    >
      <div
        id="nav-container"
        className="max-w-full mx-auto flex justify-center lg:justify-between items-center"
      >
        <Logo />
        {isNavEnabled && <Navigation currentQuestion={currentQuestion} />}
      </div>
    </div>
  );
};

export default Header;
