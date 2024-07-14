import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importing Images
import image1 from '../../assets/Images/img1.jpg';
import image2 from '../../assets/Images/img2.jpg';
import image3 from '../../assets/Images/img3.jpg';
import image4 from '../../assets/Images/img4.jpg';
import image5 from '../../assets/Images/img5.jpg';
import image6 from '../../assets/Images/img6.jpg';
import image7 from '../../assets/Images/img7.jpg';
import image8 from '../../assets/Images/img8.jpg';
import image9 from '../../assets/Images/img9.jpg';

const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { id: 1, title: 'Amos', imageUrl: image1 },
    { id: 2, title: 'Clare', imageUrl: image2 },
    { id: 3, title: 'Aroma', imageUrl: image3 },
    { id: 4, title: 'Nana', imageUrl: image4 },
    { id: 5, title: 'Arsen', imageUrl: image5 },
    { id: 6, title: 'Shebetty', imageUrl: image6 },
    { id: 7, title: 'Shalom', imageUrl: image7 },
    { id: 8, title: 'Isaac', imageUrl: image8 },
    { id: 9, title: 'Sumayiyah', imageUrl: image9 },
  ];

  return (
    <div className='w-full h-full lg:h-screen flex flex-col bg-[#000000] px-[5%]'>
      <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center my-10'>
        <div className='md:max-w-[30%] h-full flex flex-col justify-center gap-2'>
          {/* Main Title */}
          <h2 className='text-[#F2F2F2] text-4xl font-bold pb-5'>
            Transforming Aspiring Actors into Professionals.
          </h2>

          {/* Button */}
          <NavLink
            to="/contact"
            className="w-36 px-6 py-2 bg-transparent text-center text-[#f2f2f2] font-semibold border border-[#f2f2f2] hover:bg-[#f2f2f2] hover:text-[#f67d12] transition duration-300"
          >
            Join Us
          </NavLink>
        </div>

        {/* Image Slider */}
        <Slider {...settings} className='md:max-w-[650px] w-full mt-10'>
          {images.map((image) => (
            <div key={image.id} className='outline-none p-2'>
              <img src={image.imageUrl} alt={image.title} className="rounded-3xl w-full max-h-[370px] object-cover"/>
              <span className="text-base font-semibold justify-center flex text-center text-[#F2F2F2] italic mt-2">
                {image.title}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
