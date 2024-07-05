import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="w-full h-full bg-[#000000]">
      {/* text, paragraph & button */}
      <div className="px-[5%] flex flex-col lg:flex-row justify-center items-center gap-5 pb-[5%]">
        {/* text */}
        <div className="min-w-[50%] flex flex-col gap-1 lg:gap-5">
          {/* sub text */}
          <h2 className="text-[#f67d12] lg:text-3xl font-bold">ABOUT THE ARTISTRY360</h2>

          {/* main text */}
          <h1 className="text-[#F2F2F2] text-3xl lg:text-5xl font-bold">Welcome to The Artistry360</h1>
        </div>

        {/* paragraph & button  */}
        <div className="min-w-[40%] flex flex-col gap-4 justify-center">
          {/* paragraph */}
          <p className="text-[#F2F2F2] text-justify lg:mr-16">
            At The Artistry360, we believe that every individual possesses the
            potential to become a skilled and confident actor. Our mission is to
            nurture this potential, transforming aspiring talents into
            consummate professionals. With a commitment to excellence, we
            provide comprehensive training programs designed to instill
            strength, boldness, and confidence in every participant.
          </p>

          {/* button */}
          <NavLink to="/classes" className='text-[#F2F2F2] underline'>
            <span className="hover:text-[#f67d12]">Learn More</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
