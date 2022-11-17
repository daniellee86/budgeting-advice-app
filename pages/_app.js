//
import Head from "next/head";
import { useRouter } from "next/router";
//
import "../styles/globals.css";
import { questions } from "../data/questions";
import { advice } from "../data/advice";
//
import { useState } from "react";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, SetSelectedOptions] = useState([]);
  const [rangeValues, setRangeValues] = useState(
    questions[5].answers.map(() => 0)
  );

  const router = useRouter();

  const handleNext = () => {
    const nextQues = currentQuestion + 1;

    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleAnswerOption = (answer) => {
    //question number determines place in array
    SetSelectedOptions([(selectedOptions[currentQuestion] = answer)]);

    SetSelectedOptions([...selectedOptions]);
  };

  // Nav is enabled everywhere apart from the index (home) page
  const isNavEnabled = router?.pathname == "/" ? false : true;

  return (
    <>
      <Head>
        <title>MONZO - Daniel Clough</title>
        <meta
          name="Monzo budget quiz app"
          content="Monzo budget management quiz"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="./fonts/ReplicaPro-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="./fonts/ReplicaPro-Heavy.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="./fonts/ReplicaPro-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="./fonts/ReplicaPro.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <Header currentQuestion={currentQuestion} isNavEnabled={isNavEnabled} />

      <div className="min-h-screen flex flex-col">
        <div className="home-background-left w-80 h-80 bg-white fixed -top-52 -left-52 lg:w-[300px] lg:h-[400px] lg:-top-[200px] lg:-left-[180px] z-50 opacity-5 pointer-events-none transform rotate-[36deg]"></div>
        <Component
          questions={questions}
          advice={advice}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          selectedOptions={selectedOptions}
          SetSelectedOptions={SetSelectedOptions}
          rangeValues={rangeValues}
          setRangeValues={setRangeValues}
          handleNext={handleNext}
          handleAnswerOption={handleAnswerOption}
          {...pageProps}
        />
      </div>
    </>
  );
}

export default MyApp;
