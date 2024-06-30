import NavBar from '../1.Navigation/1.navbar.jsx'
import Hero from './2.Hero.jsx'

const HomePage = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      {/* Navigation Bar */}
      <NavBar />

      {/* Page Sections */}
      <div className='w-full h-full flex flex-col space-y-0'>
        <Hero />
      </div>
    </div>
  )
}

export default HomePage