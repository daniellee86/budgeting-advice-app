const Logo = () => {
  return (
    <div id="logo-wrapper">
      <a rel="noreferrer" href="https://monzo.com/" tabIndex="20">
        <img
          className="mx-auto w-auto h-12 md:h-20 lg:h-16"
          src="nav-logo.svg"
          alt="Monzo logo"
        ></img>
      </a>
    </div>
  );
};

export default Logo;
