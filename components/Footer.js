const Footer = () => {
  return (
    <div
      id="footer-container"
      className="relative z-10 bg-monzo-dark-black  text-white p-6  lg:p-8 mt-6"
    >
      <div
        id="content-wrapper"
        className="flex flex-col-reverse md:flex-row justify-between items-center mx-auto max-w-[1440px]"
      >
        <p className="text-base">Copyright © 2022 - Daniel Clough</p>
        <img src="footer-logo.svg" alt="logo" className="h-11 mb-4 md:mb-0" />
      </div>
    </div>
  );
};

export default Footer;
