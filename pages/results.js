// COMPONENT IMPORTS
import Footer from "../components/Footer";
import SpendBreakdown from "../components/SpendBreakdown";
//CHART.JS
import DoughnutChartOne from "../components/DoughnutChartOne";
// REACT IMPORTS
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//FRAMER MOTION
import { motion } from "framer-motion";
//COUNT-UP
import CountUp from "react-countup";
//VISSIBILITY SENSOR
import VisibilitySensor from "react-visibility-sensor";

import { getBreakdownCategory } from "../utils";

//CHART.JS
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(ArcElement, Filler, Title, Tooltip, Legend);

function arrayMatch(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

const ResultsPage = ({
  currentQuestion,
  questions,
  advice,
  selectedOptions,
  rangeValues,
}) => {
  const router = useRouter();

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    handleAnswers();
  }, []);

  //FUNCTIONS THAT ARE CALLED ON PAGE RENDER AND SET ANSWER AND ADVICE STATES
  //QUESTIONS
  const handleAnswers = () => {
    questions.map((question, index) => {
      return question.answers.map((answer, i) => {
        if (selectedOptions.includes(answer.ref)) {
          //SETS ANSWER IN ARRAY WITH SPECIFIC INDEX
          setAnswers([(answers[index] = answer.answerText)]);
          //SPREAD OPERATOR TO THEN SAVE ANSWER ALONG WITH ALL OTHER ANSWERS
          setAnswers([...answers]);
        }
      });
    });
  };

  return (
    <>
      {/* A 12-COL GRID CONTAINER FOR CONTENT; TITLE / COPY / CHART / CATEGORY SPEND/ ADVICE */}
      <div
        id="content-container"
        className=" bg-monzo-black lg:pt-28 lg:pb-12 flex-1"
      >
        <div
          id="content-wrapper"
          className="relative flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12 justify-between max-w-[90%] lg:max-w-[94%] lg:w-[94%] 2xl:max-w-[1440px] mx-auto"
        >
          {/* QUESTION TEXT */}
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full col-span-12 text-white text-center lg:text-left text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-extra-tight lg:pt-8"
          >
            Here are your results
          </motion.h1>

          {/* TWO COL OF TITLE COPY  */}
          <div
            id="title-copy-wrapper"
            className="w-full col-span-12 text-white text-sm md:text-base"
          >
            <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 py-8">
              <div id="copy-wrapper-left" className="lg:col-span-6">
                <p>
                  {" "}
                  Thanks for answering all those questions! Before you get
                  started reviewing your results, please keep in mind that our
                  customer base is very diverse and includes people of all ages
                  who have different circumstances, family lives and
                  backgrounds.{" "}
                </p>
              </div>
              <div id="copy-wrapper-right" className="lg:col-span-6">
                <p>
                  <span className="font-extrabold">
                    Our assessments are a guide only
                  </span>{" "}
                  and you might find that some answers don&apos;t apply to you.
                  We hope you&apos;ll be able to take some of our money advice
                  on board and you&apos;ll find this has been a helpful exercise
                  in assessing your relationship with money management.
                </p>
              </div>
            </div>
          </div>

          {/* WHITE CONTAINER FOR ALL RESULTS CONTENT */}
          <div
            id="chart-category-advice-container"
            className="col-span-12 bg-white"
          >
            {/* CHART AND SPEND CATEGORY SECTION */}

            <section
              id="chart-section"
              className="grid lg:grid-cols-12 gap-12 bg-monzo-off-white p-5 md:p-10 pb-10 md:pb-16"
            >
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div
                    id="chart-left"
                    className="lg:col-span-6 flex flex-col items-center md:space-y-4"
                  >
                    <div
                      id="spend-title"
                      className="flex flex-col items-center"
                    >
                      <h2 className="uppercase font-bold text-xs md:text-base text-center">
                        your approximate average monthly spend
                      </h2>
                      <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-snug">
                        £
                        {isVisible ? (
                          <CountUp
                            end={rangeValues.reduce((prev, current) => {
                              return prev + current;
                            }, 0)}
                          />
                        ) : (
                          <span className="">0</span>
                        )}
                      </h1>
                    </div>
                    <div id="chart" className="w-full relative">
                      {/* <img className='w-full' src='Donut.png'/> */}
                      <DoughnutChartOne
                        rangeValues={rangeValues}
                        labels={questions[5].answers.map((answer) => {
                          return answer.chartLabel;
                        })}
                      />
                    </div>
                  </div>
                )}
              </VisibilitySensor>

              {/* CHART RIGHT IS A COLUMN OF SPEND CATEGORIES AND RETURNED DATA FROM SLIDERS */}
              <div
                id="chart-right"
                className="lg:col-span-6 space-y-6 2xl:space-y-8 flex flex-col justify-start"
              >
                {/* Duplicate this and make a component */}
                {questions[5].answers.map((spendingCategory, i) => {
                  let breakdownType = getBreakdownCategory(
                    rangeValues[i],
                    spendingCategory.min,
                    spendingCategory.max
                  );
                  return (
                    <SpendBreakdown
                      text={breakdownType.text}
                      maxSpend={spendingCategory.max}
                      key={i}
                      monthlySpend={rangeValues[i]}
                      iconName={spendingCategory.icon}
                      title={spendingCategory.answerText}
                      spendType={breakdownType.name}
                      textColorName={breakdownType.color}
                    />
                  );
                })}
              </div>
            </section>

            {/* COPY */}
            <section id="copy-section" className="px-5 md:px-10 flex">
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 py-8 text-sm md:text-base">
                <div id="copy-wrapper-left" className="lg:col-span-6">
                  <p>
                    {" "}
                    Our pie chart shows your approximate average monthly spend
                    in our five main categories. We have labelled whether we
                    think this is a high, moderate or low spend – but please
                    keep in mind that{" "}
                    <span className="font-extrabold">
                      this is intended as a guide only and doesn&apos;t consider
                      your personal circumstances
                    </span>
                    .
                  </p>
                </div>
                <div id="copy-wrapper-right" className="lg:col-span-6">
                  <p>
                    {" "}
                    We&apos;ve matched your answers to the multiple-choice
                    questions with some personalised tips based on the answer
                    you selected. If you read any of your results and feel that
                    you would like to further explore the feedback you recieved,
                    you can{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="copy-link"
                      href="https://positivemoney.org/how-money-works/"
                    >
                      find details (and more guidance) on our &#39;How Money
                      Works&#39; blog{" "}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* ADVICE SECTION THAT WILL LIST A QUESTION, THE GIVEN ANSWER AND ALL APPROPRIATE ADVICE ITEMS BASED ON ANSWERS */}
            <section
              id="advice-section"
              className="bg-monzo-off-white p-5 md:p-10 space-y-10"
            >
              <div id="title-wraper" className=" w-full flex justify-center">
                <motion.h2
                  initial={{ opacity: 0, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-bold -mb-4"
                >
                  Tips based on your answers
                </motion.h2>
              </div>

              <div id="advice-container" className="bg-white ">
                {questions
                  .filter((quest) => {
                    return parseInt(quest.number) < 6;
                  })
                  .map((question, qI) => {
                    return (
                      <div
                        key={qI}
                        className="advice p-5 md:p-10 border-b-1 border-grey-500 grid lg:grid-cols-12 gap-5 lg:gap-12"
                      >
                        <div className="lg:col-span-6">
                          <h3 className="text-base md:text-xl font-bold ">
                            <span className="text-monzo-results-orange">
                              Q{question.number}.{" "}
                            </span>
                            {question.text}
                          </h3>
                          <p className="font-bold text-monzo-results-orange text-sm md:text-lg my-2 md:my-3">
                            Because you answered: -
                          </p>
                          <p className="opacity-80">{answers[qI]}</p>
                        </div>
                        <div className="lg:col-span-6 text-sm md:text-base">
                          {/* Filter down advice to be only the advice for this question */}
                          {advice
                            .filter((adv) => {
                              // Check that the advice was meant for the current question (adv.questionOutput)
                              // then check if any of the selected user answers match the possible answers to
                              // display this advice.
                              return (
                                parseInt(adv.questionOutput) ===
                                  parseInt(question.number) &&
                                arrayMatch(adv.possibleAnswers, selectedOptions)
                                  .length > 0
                              );
                            })
                            .map((adv, i) => {
                              // {adv.advice}
                              return (
                                <p
                                  key={i}
                                  className={`${i !== 0 ? "my-3" : ""}`}
                                  dangerouslySetInnerHTML={{
                                    __html: adv.advice,
                                  }}
                                ></p>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>

            {/* COPY */}
            <section
              id="closing-words"
              className="p-5 md:p-10 bg-monzo-results-yellow"
            >
              <motion.h3
                initial={{ opacity: 0, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold mb-4"
              >
                Moving forward and finding help
              </motion.h3>
              <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 text-sm md:text-base">
                <div id="copy-wrapper-left" className="lg:col-span-6">
                  <p className="text-lg md:text-xl font-medium ">
                    Thanks for taking some time to reflect on your money habits
                    and learn a little more about managing your money. We
                    recommend taking a screenshot or printing this page to refer
                    back to in future.
                  </p>
                </div>
                <div id="copy-wrapper-right" className="lg:col-span-6">
                  <p className="mb-4">
                    Your results will hopefully have given you a few ideas about
                    how you can approach managing your money in the future.
                    Remember, the results are a guide.
                  </p>
                  <p>
                    If you would like to find advice or seek support that takes
                    your personal circumstances into consideration, you can{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="tracking-normal underline text-monzo-red"
                      href="https://www.capitalone.com/learn-grow/money-management/money-management-tips/"
                    >
                      find information within our money advice pages on the
                      Munzo website
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResultsPage;
