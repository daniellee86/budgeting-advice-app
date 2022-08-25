import Link from 'next/link'
const Logo = () => {

    return (
    <div id='logo-wrapper'>
      <Link href="/" tabIndex="20">
       <a>
        <img className='mx-auto w-auto h-12 md:h-20 lg:h-16' src='nav-logo.svg' alt='Monzo logo'></img>
       </a>
      </Link>
      
    </div>
    )
  }
  
  export default Logo