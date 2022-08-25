import Link from 'next/link'
const Logo = ({
  setCurrentQuestion,
  setRangeValues,
  SetSelectedOptions,
  questions
}) => {

 const logicReset = () => {
  setCurrentQuestion(0);
  setRangeValues(questions[5].answers.map(() => ( 0 )));
  SetSelectedOptions([])

 }

    return (
    <div id='logo-wrapper'>
      <Link href="/" tabIndex="20" onClick={logicReset()}>
       <a>
        <img className='mx-auto w-auto h-12 md:h-20 lg:h-16' src='nav-logo.svg' alt='Monzo logo'></img>
       </a>
      </Link>
      
    </div>
    )
  }
  
  export default Logo