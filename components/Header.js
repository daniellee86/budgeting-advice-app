import Logo from "./Logo"
import Navigation from "./Navigation"

const Header = ({ 
    isNavEnabled, 
    currentQuestion, 
    setCurrentQuestion,
    setRangeValues,
    SetSelectedOptions,
    questions,
}) => {
    return (
        <div id="header" className={`header z-50 px-[3%] py-4 xl:p-6 text-white/25 lg:fixed bottom-0 left-0 right-0 lg:top-0 lg:bottom-auto overflow-hidden transition duration-500 ${isNavEnabled ? 'lg:bg-monzo-black' : ''}`}>
        <div id="nav-container" className="max-w-[1440px] mx-auto flex justify-center lg:justify-between items-center">
            <Logo setCurrentQuestion={setCurrentQuestion} setRangeValues={setRangeValues} SetSelectedOptions={SetSelectedOptions} questions={questions} />
            {isNavEnabled &&
                <Navigation currentQuestion={currentQuestion} />
            }
        </div>
        </div>
    )
}
    
export default Header