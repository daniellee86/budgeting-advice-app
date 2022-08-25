//NEXT IMPORTS
import { useRouter } from 'next/router'

//COMPONENT IMPORTS
import Footer from '../components/Footer'

// REACT IMPORTS
import { useEffect, useState } from 'react';

//SLIDER IMPORTS
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

import 'rc-slider/assets/index.css';

//VARIABLES TO STYLE SLIDER
const monzoDarkGrey = "#144673"

//FRAMER MOTION
import { motion } from "framer-motion"



const SliderPage = ({ 
  currentQuestion, 
  rangeValues, 
  setRangeValues, 
  handleNext,
  questions
}) => {



  const router = useRouter()

  // When this page loads update the internal app state
  // note: if you do it before the page loads, there's a page flash. not ideal.
  useEffect(() => {
    handleNext();
  })

  //FUNCTION TO STORE SLIDER VALUES TO A SPECIFIC INDEX OF AN ARRAY FOR RETRIEVAL BY CHART AND RESULTS PAGE
  const handleRangeValues = (value, index) => {
    rangeValues[index] = value

    //SPREAD OPERATOR TO SAVE CURRENT AND ALL PREVIOUS VALUES TO STATE. 
    setRangeValues([...rangeValues])
  }

   //FUNCTION TO USE USEROUTER AND "PUSH" TO SLIDERS PAGE
   const handleNextPage = (e) => {
     router.push("/results", `${router.asPath}/`)
   }
 
   //FUNCTION TO HANDLE QUESTION AND PAGE CHANGES 
   const handlePage = () => {
     if (currentQuestion + 1 > 4){
       handleNextPage();
       handleNext();
     } else {
       handleNext()
     }
 
   } 

  const formatSliderTooltip = (tipText, maxValue) => {
    let suffix = '';

    // if max value add + to end
    if( parseInt(tipText) == maxValue )
      suffix = '+';

    return `£${tipText}${suffix}`
  }

  return (
    <>
          {/* A 12-COL GRID CONTAINER FOR CONTENT; TITLE / CATEGORY TEXT / SLIDERS / SUBMIT BUTTON */}
         <div id='content-container' className='bg-monzo-black lg:pt-28 lg:pb-12 flex-1'>

          <div id='content-wrapper' className='relative flex flex-col justify-between max-w-[90%] lg:max-w-[94%] lg:w-[94%] 2xl:max-w-[1440px] mx-auto'>


          {/* QUESTION TEXT */}
          <motion.h1 
              initial={{ opacity: 0, y: 0 }} 
              transition={{ ease: "easeInOut", duration: 0.5 }} 
              whileInView={{ opacity: 1, y: 0}} 
              viewport={{ once: true }} 
          className='text-white text-center lg:text-left text-xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-extra-tight lg:pt-8'>How much do you spend per month in these different areas (on average)?</motion.h1>

          <div id='slider-category-button-container' className='bg-white mt-6 md:mt-10'>
            {questions[currentQuestion].answers.map((answer, i) => (
              <div id='slider-one' key={i} className='flex flex-col lg:flex-row border-b-1 border-grey-500'>
               <div id='slider-one-left' className='w-full p-5 lg:w-1/2 lg:p-10'>
                 <h2
                  className='text-lg md:text-xl font-bold mb-2 md:mb-4 leading-tight'>{answer.answerText}</h2>
                 <p className='text-sm text-monzo-black text-opacity-80'>{answer.answerDescription}</p>
               </div>
               <div id='slider-one-right'className='w-full p-5 pt-1 lg:w-1/2 lg:p-10 h-24 lg:h-auto flex items-center rc-slider-custom-holder'>
                <SliderWithTooltip
                  tabIndex={i}
                  value={rangeValues[i]}
                  onChange={(value => {handleRangeValues(value, i)})}
                  min={answer.min}
                  defaultValue={0}
                  max={answer.max}
                  tipFormatter={(tipText) => formatSliderTooltip(tipText, answer.max)}
                  tipProps={{
                    visible:true
                  }}
                  trackStyle={{ 
                    backgroundColor: monzoDarkGrey,
                    marginTop: 10,
                  }}
                  railStyle={{
                    marginTop: 10,
                  }}
                  handleStyle={{
                    borderColor: 'white',
                    borderWidth: 2,
                    zIndex: 10,
                    height: 40,
                    width: 40,
                    backgroundColor: monzoDarkGrey,
                  }}
                  marks={{
                    [answer.min]: `£${answer.min}`,
                    [answer.max]: `£${answer.max}+`
                  }}
                  >
                </SliderWithTooltip>
               </div>
             </div>
            ))}
           
            <div id='button-div' className='p-5 lg:p-10'>
              <button 
                onClick={handlePage} 
                id='submit-answers-button' 
                className='w-full uppercase text-lg font-bold tracking-widest text-white bg-monzo-results-yellow transition duration-500 hover:bg-monzo-dark-grey px-8 block py-4'>Submit Answers
              </button>
            </div>

          </div>

      </div>

    </div>
        
    <Footer />
  </>
  );
}


export default SliderPage

