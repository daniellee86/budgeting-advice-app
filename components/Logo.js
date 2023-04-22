const Logo = () => {
  return (
    <div id="logo-wrapper">
      <a rel="noreferrer" href="https://github.com/daniellee86" tabIndex="20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mx-auto w-auto h-12 md:h-20 lg:h-16"
          src="nav-logo.svg"
          alt="logo"
        ></img>
      </a>
    </div>
  );
};

export default Logo;
