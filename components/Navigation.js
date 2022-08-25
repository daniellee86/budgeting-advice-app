import { useRouter } from 'next/router'

const Navigation = ({currentQuestion}) => {
  const router = useRouter();

  const isResultsPage = router?.pathname == '/results';

  return (
      <div id="questions-wrapper" className="flex z-50 space-x-3 md:space-x-6 lg:space-x-8 xl:space-x-8 text-sm md:text-base lg:text-sm xl:text-base font-normal fixed bottom-0 left-0 right-0 justify-center lg:relative bg-[#1F2D45] lg:bg-transparent p-4 pt-2 pb-4 lg:p-0">
        <div id="question-one" className={`question 
        ${currentQuestion + 1 === 1 ? 'border-monzo-red' : 'border-white/25'} 
        ${currentQuestion + 1 > 1 ? 'border-monzo-results-green' : ''}
        2xl:w-24 text-center`}>
        <p className={`transition duration-500 ease-in-out ${currentQuestion + 1 === 1 ? 'text-white' : (currentQuestion + 1 > 1 ? 'text-white/60' : 'text-white/25')} `}>Q<span>uestion</span> 1</p>
        </div>
        <div id="question-two" className={`question  
        ${currentQuestion + 1 === 2 ? 'border-monzo-red' : 'border-white/25'} 
        ${currentQuestion + 1 > 2 ? 'border-monzo-results-green' : ''}
        2xl:w-24 text-center`}>
        <p className={`transition duration-500 ease-in-out ${currentQuestion + 1 === 2 ? 'text-white' : (currentQuestion + 1 > 2 ? 'text-white/60' : 'text-white/25') } } `}>Q<span>uestion</span> 2</p>
        </div>
        <div id="question-three" className={`question 
        ${currentQuestion + 1 === 3 ? 'border-monzo-red' : 'border-white/25'} 
        ${currentQuestion + 1 > 3 ? 'border-monzo-results-green' : ''}
        2xl:w-24 text-center`}>
        <p className={`transition duration-500 ease-in-out ${currentQuestion + 1 === 3 ? 'text-white' : (currentQuestion + 1 > 3? 'text-white/60' : 'text-white/25')} } `}>Q<span>uestion</span> 3</p>
        </div>
        <div id="question-four" className={`question 
        ${currentQuestion + 1 === 4 ? 'border-monzo-red' : 'border-white/25'} 
        ${currentQuestion + 1 > 4 ? 'border-monzo-results-green' : ''}
        2xl:w-24 text-center`}>
        <p className={`transition duration-500 ease-in-out ${currentQuestion + 1 === 4 ? 'text-white' : (currentQuestion + 1 > 4 ? 'text-white/60' : 'text-white/25') } `}>Q<span>uestion</span> 4</p>
        </div>
        <div id="question-five" className={`question 
        ${currentQuestion + 1 === 5 ? 'border-monzo-red' : 'border-white/25'} 
        ${currentQuestion + 1 > 5 ? 'border-monzo-results-green' : ''}
        2xl:w-24 text-center`}>
        <p className={`transition duration-500 ease-in-out ${currentQuestion + 1 === 5 ? 'text-white' : (currentQuestion + 1 > 5 ? 'text-white/60' : 'text-white/25')}  `}>Q<span>uestion</span> 5</p>
        </div>
        <div id="question-six" className={`question 
        ${(currentQuestion + 1 === 6 && !isResultsPage) ? 'border-monzo-red' : 'border-white/25'} 
        ${(currentQuestion + 1 >= 6 && isResultsPage) ? 'border-monzo-results-green' : ''}
        2xl:w-24 text-center`}>
        <p className={`transition duration-500 ease-in-out ${(currentQuestion + 1 === 6 && !isResultsPage) ? 'text-white' : (currentQuestion + 1 > 5 ? 'text-white/60' : 'text-white/25')} `}>Q<span>uestion</span> 6</p>
        </div>
        <div id="results" className={`question 
        ${isResultsPage ? 'border-monzo-red' : 'border-white/25'} 
        ${currentQuestion + 1 > 7 ? 'border-monzo-results-green' : ''}
        2xl:w-24 text-center`}>
        <p className={`transition duration-500 ease-in-out ${isResultsPage ? 'text-white' : 'text-white/25'} `}>Results</p>
      </div>
      </div>


  )
}

export default Navigation