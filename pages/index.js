//NEXT IMPORTS
import Link from "next/link";
//COMPONENTS
import Footer from "../components/Footer";

//FRAMER MOTION
import { motion } from "framer-motion"
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();


  return (
    <>
      <div
        id="home-container"
        className="relative text-white flex flex-col overflow-hidden flex-1 bg-monzo-black pt-0 pb-6 md:pt-4 md:pb-8 lg:pt-20 xl:pt-24 lg:pb-8"
        >
   
        {/* 12 COL GRID CONTAINING HOMEPAGE TITLE, COPY AND BUTTON, HIGHEST Z-INDEX ON TOP OF EVERYTIHNG */}
        <div
          id="home-content"
          className="relative flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12 justify-between max-w-[90%] lg:max-w-[94%] lg:w-[94%] 2xl:max-w-[1440px] mx-auto"
        >
          <div
            id="home-copy-wrapper"
            className="text-center lg:text-left lg:col-span-6 flex flex-col justify-center lg:items-start relative z-40"
          >
            <motion.h1 
             initial={{ opacity: 0, y: 20 }} 
             transition={{ ease: "easeOut", delay: 0.5, duration: 0.65 }} 
             whileInView={{ opacity: 1, y: 0}} 
             viewport={{ once: true }} 
            className="uppercase text-3xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl 4xl:text-7xl font-black leading-extra-tight mb-4 md:mb-5">
              Monzo budget management quiz
            </motion.h1>

            {/* DIV WITH 80% WIDTH-*/}
            <div className="w-full xl:w-11/12">
              <motion.p 
               initial={{ opacity: 0, y: 20 }} 
               transition={{ ease: "easeOut", delay: 0.5, duration: 0.65 }} 
               whileInView={{ opacity: 1, y: 0}} 
               viewport={{ once: true }} 
              className="md:text-lg lg:text-base xl:text-xl 3xl:text-xl opacity-90 3xl:w-12/12">
                Managing your finances can be challenging, no matter what
                your circumstances are. Take our quiz to put your spending
                habits and attitude towards money under the lens - and pick up
                some personalised tips along the way.
              </motion.p>
            </div>
            <Link href="/question-checkbox" as={typeof window !== 'undefined' ? window.location.href : '/'}>
              <motion.button
                  initial={{ opacity: 0, y: 0 }} 
                  transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }} 
                  whileInView={{ opacity: 1, y: 0}} 
                  viewport={{ once: true }} 
                  tabIndex="1"
                className="mt-6 md:mt-8 w-full md:w-auto uppercase text-lg font-bold tracking-widest bg-monzo-results-yellow transition duration-500 hover:bg-monzo-dark-grey px-8 block py-4">
                    Start quiz              
              </motion.button>
            </Link>
          </div>

          <div
            id="home-background"
            className="w-full flex pt-0 md:pt-2 3xl:pt-0 lg:col-span-6"
          >
            {/* this image is shown up to 3xl */}
            <motion.div
             initial={{ opacity: 0 }} 
             transition={{ ease: "easeInOut", delay: 0, duration: 1 }} 
             whileInView={{ opacity: 1}} 
             viewport={{ once: true }} 
              id="image-wrapper"
              className="flex justify-center lg:justify-end w-full 3xl:invisible"
            >
              <img
                src="homepage.jpg"
                className="h-auto w-full max-w-[265px] md:max-w-[450px] lg:max-w-full xl:max-w-max xl:max-h-[80vh] 3xl:max-h-[65vh] mb-4 lg:mb-0 rounded-3xl shadow-lg shadow-monzo-dark-black"
                alt="Woman laying down on carpet using contactless payment with her mobile phone"
              />
            </motion.div>

            {/* this image is shown at 3xl */}
            <motion.div
             initial={{ opacity: 0 }} 
             transition={{ ease: "easeInOut", delay: 0, duration: 1 }} 
             whileInView={{ opacity: 1}} 
             viewport={{ once: true }} 
              id="image-wrapper2"
              className="justify-center lg:justify-end w-full fixed top-0 right-0 hidden 3xl:flex z-30"
            >
              <img
                src="homepage.jpg"
                className="h-auto w-full 3xl:max-w-max 3xl:max-h-[80vh] rounded-3xl"
                alt="Woman laying down on carpet using contactless payment with her mobile phone"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
