//REACT IMPORT
import { useState } from "react";
//NEXT ROUTER
import { useRouter } from "next/router";
//DATA IMPORTS
import { imageData, imageAlt } from "../image-data";
//COMPONENTS
import Footer from "../components/Footer";
//FRAMER MOTION
import { motion } from "framer-motion";

export default function QuestionsPage({
  currentQuestion,
  questions,
  handleNext,
  handleAnswerOption,
}) {
  //STATE USED FOR CONDITIONAL CSS ON NAV QUESTION BAR
  const [activeAnswer, setActiveAnswer] = useState("");

  //FUNCTION TO USE USEROUTER AND "PUSH" TO SLIDERS PAGE
  const router = useRouter();

  // Navigate to the slider question page instead
  const loadSliderPage = (e) => {
    router.push(
      {
        pathname: "/question-slider",
      },
      `${router.asPath}/`
    );
  };

  //SCROLL TO TOP ON SUBMIT BUTTON CLICK
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //FUNCTION TO HANDLE QUESTION AND PAGE CHANGES
  const handlePage = () => {
    if (currentQuestion + 1 > 4) {
      loadSliderPage();
    } else {
      handleNext();
      setActiveAnswer("");
      goToTop();
    }
  };

  return (
    <>
      {/* A CONTAINER FOR CONTENT; QUESTIONS / ANSWERS / SUBMIT BUTTON / SIDE IMAGE */}
      <div
        id="content-container"
        className=" bg-monzo-black lg:pt-24 xl:pt-28 lg:pb-12 flex-1 overflow-hidden"
      >
        <div
          id="content-wrapper"
          className="lg:min-h-[500px] xl:min-h-[580px] 2xl:min-h-[600px] relative flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12 justify-between max-w-[90%] lg:max-w-[94%] lg:w-[94%] 2xl:max-w-[1440px] mx-auto"
        >
          {/* 12-COL GRID POSITIONED ABSOLUTE ON TOP OF EVERYTHING CONTAINING QUESTION, ANSWERS ANS SUBMIT BUTTON  */}
          <div
            id="grid-container"
            className="mx-auto md:grid md:grid-cols-12 md:gap-10 z-20 items-center lg:col-span-8"
          >
            <div
              id="inner-content-wrapper"
              className="col-span-12 space-y-6 md:space-y-8"
            >
              {/* QUESTION TEXT */}
              <div>
                <motion.h1
                  key={questions[currentQuestion].text}
                  initial={{ opacity: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.85 }}
                  animate={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-white text-center lg:text-left text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-extra-tight lg:pt-8"
                >
                  {questions[currentQuestion].text}
                </motion.h1>
                {questions[currentQuestion].subtext && (
                  <motion.p
                    key={questions[currentQuestion].subtext}
                    initial={{ opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.85 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-white pt-4 block text-sm md:text-base text-center lg:text-left"
                  >
                    {questions[currentQuestion].subtext}
                  </motion.p>
                )}
              </div>

              {/* QUESTIONS */}
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeInOut", delay: 0.3, duration: 0.85 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}
                id="questions-wrapper"
                className=" w-full space-y-6 md:space-y-10"
              >
                <div
                  id="top-questions"
                  className="grid grid-col-1 lg:grid-cols-2 gap-5 lg:gap-8 2xl:gap-8 text-sm md:text-base lg:text-sm xl:text-base text-left"
                >
                  {/* QUESTION ONE */}
                  <button
                    tabIndex="1"
                    onClick={(e) => {
                      handleAnswerOption(
                        questions[currentQuestion].answers[0].ref
                      );
                      setActiveAnswer("a");
                    }}
                    id="question-one"
                    className="text-left question-card flex items-center bg-white p-4 md:p-6 lg:p-5 xl:p-8 2xl:p-10 cursor-pointer rounded"
                  >
                    <div className="tick-wrapper mr-4">
                      <div
                        className={`tick-div min-h-[43px] min-w-[43px] rounded-full border-monzo-dark-grey/25 flex justify-center items-center ${
                          activeAnswer === "a"
                            ? "active-answer"
                            : "not-active-answer"
                        }`}
                      >
                        <img src="tick.svg" alt="active answer tick" />
                      </div>
                    </div>
                    <p
                      className={`${
                        activeAnswer === "a"
                          ? "text-black"
                          : "text-monzo-dark-grey/75"
                      }`}
                    >
                      {questions[currentQuestion].answers[0].answerText}
                    </p>
                  </button>
                  {/* QUESTION TWO */}
                  <button
                    tabIndex="2"
                    onClick={(e) => {
                      handleAnswerOption(
                        questions[currentQuestion].answers[1].ref
                      );
                      setActiveAnswer("b");
                    }}
                    id="question-two"
                    className="text-left question-card flex items-center bg-white p-4 md:p-6 lg:p-5 xl:p-8 2xl:p-10 cursor-pointer rounded"
                  >
                    <div className="tick-wrapper mr-4">
                      <div
                        className={`tick-div min-h-[43px] min-w-[43px] rounded-full border-monzo-dark-grey/25 flex justify-center items-center ${
                          activeAnswer === "b"
                            ? "active-answer"
                            : "not-active-answer"
                        }`}
                      >
                        <img src="tick.svg" alt="active answer tick" />
                      </div>
                    </div>
                    <p
                      className={`${
                        activeAnswer === "b"
                          ? "text-black"
                          : "text-monzo-dark-grey/75"
                      }`}
                    >
                      {questions[currentQuestion].answers[1].answerText}
                    </p>
                  </button>

                  {/* QUESTION THREE */}
                  <button
                    tabIndex="3"
                    onClick={(e) => {
                      handleAnswerOption(
                        questions[currentQuestion].answers[2].ref
                      );
                      setActiveAnswer("c");
                    }}
                    id="question-three"
                    className="text-left question-card flex items-center bg-white p-4 md:p-6 lg:p-5 xl:p-8 2xl:p-10 cursor-pointer rounded"
                  >
                    <div className="tick-wrapper mr-4">
                      <div
                        className={`tick-div min-h-[43px] min-w-[43px] rounded-full border-monzo-dark-grey/25 flex justify-center items-center ${
                          activeAnswer === "c"
                            ? "active-answer"
                            : "not-active-answer"
                        }`}
                      >
                        <img src="tick.svg" alt="active answer tick" />
                      </div>
                    </div>
                    <p
                      className={`${
                        activeAnswer === "c"
                          ? "text-black"
                          : "text-monzo-dark-grey/75"
                      }`}
                    >
                      {questions[currentQuestion].answers[2].answerText}
                    </p>
                  </button>
                  {/* QUESTION FOUR */}
                  <button
                    tabIndex="4"
                    onClick={(e) => {
                      handleAnswerOption(
                        questions[currentQuestion].answers[3].ref
                      );
                      setActiveAnswer("d");
                    }}
                    id="question-four"
                    className="text-left question-card flex items-center bg-white p-4 md:p-6 lg:p-5 xl:p-8 2xl:p-10 cursor-pointer rounded"
                  >
                    <div className="tick-wrapper mr-4">
                      <div
                        className={`tick-div min-h-[43px] min-w-[43px] rounded-full border-monzo-dark-grey/25 flex justify-center items-center ${
                          activeAnswer === "d"
                            ? "active-answer"
                            : "not-active-answer"
                        }`}
                      >
                        <img src="tick.svg" alt="active answer tick" />
                      </div>
                    </div>
                    <p
                      className={`${
                        activeAnswer === "d"
                          ? "text-black"
                          : "text-monzo-dark-grey/75"
                      }`}
                    >
                      {questions[currentQuestion].answers[3].answerText}
                    </p>
                  </button>
                </div>
              </motion.div>

              {/* NEXT QUESTION BUTTON */}
              <motion.button
                key={questions[currentQuestion].number}
                initial={{ opacity: 0 }}
                transition={{ ease: "easeInOut", delay: 0.3, duration: 0.4 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true }}
                tabIndex={activeAnswer == "" ? "5" : "1"}
                disabled={activeAnswer == "" ? true : false}
                onClick={(e) => {
                  handlePage();
                }}
                id="submit-answer-button"
                className={`w-full uppercase text-lg font-bold tracking-widest text-white bg-monzo-results-yellow transition duration-50 px-8 block py-4 ${
                  activeAnswer == ""
                    ? "opacity-50"
                    : "hover:bg-monzo-dark-grey hover:cursor-pointer"
                }`}
              >
                submit answer
              </motion.button>
            </div>
          </div>

          {/* SIDE IMAGE */}
          <motion.div
            key={imageData[currentQuestion]}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            id="image-wrapper"
            className="h-full hidden lg:block lg:col-span-4 relative overflow-hidden -mr-[11%] 3xl:mr-0"
          >
            <div className="absolute -bottom-14 -left-24 w-32 h-32 bg-red z-20 block bg-monzo-black transform rotate-[-35deg]">
              222
            </div>
            <div className="absolute hidden 3xl:block -top-14 -right-24 w-32 h-32 bg-red z-20 bg-monzo-black transform rotate-[-35deg]">
              222
            </div>
            <div className="image-placer absolute inset-0">
              <img
                src={imageData[currentQuestion]}
                alt={imageAlt[currentQuestion]}
                priority={true}
                className="h-full w-full object-cover"
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
