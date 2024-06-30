import NavBar from '../1.Navigation/1.navbar.jsx'
import Hero from './2.Hero.jsx'
import SliderSection from './3.SliderSection.jsx'

const HomePage = () => {
  return (
    <div className='relative w-full h-full overflow-x-hidden'>
      {/* Navigation Bar */}
      <NavBar />

      {/* Page Sections */}
      <div className='w-full h-full flex flex-col space-y-0'>
        <Hero />
        <SliderSection />
      </div>
    </div>
  )
}

export default HomePage