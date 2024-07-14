import React from "react";

// Import images
import charityEvent from "../../assets/Images/charity-event.jpg";
import michaelWawuyoJr from "../../assets/Images/michael-wawuyo-jr.jpg";
import moroccoOmari from "../../assets/Images/morocco-omari.jpg";
import sesseIslands from "../../assets/Images/sesse-islands.jpg";
import registrationNewActing from "../../assets/Images/registration-new-acting.jpg";
import actorProfileArtistry360 from "../../assets/Images/actor-profile-artistry360.jpg";
import backgroundImage from "../../assets/Images/background.jpg"; // Add the path to your background image here

const NewAndEvents = () => {
  const events = [
    {
      id: 1,
      image: charityEvent,
      title: "Charity Events - Giving back to the community",
      date: "May 15, 2024",
      description:
        "Our team recently participated in a series of charity events, giving back to the local community. It was a rewarding experience for all involved.",
    },
    {
      id: 2,
      image: michaelWawuyoJr,
      title: "Michael Wawuyo Jr Acting Master Class",
      date: "June 20, 2024",
      description:
        "We were honored to host a sold-out acting master class led by the acclaimed actor, Michael Wawuyo Jr. Participants gained invaluable insights and training.",
    },
    {
      id: 3,
      image: moroccoOmari,
      title: "Morocco Omari - Acting Master Class",
      date: "July 10, 2024",
      description:
        "In addition, we welcomed the talented Morocco Omari to lead an engaging acting master class for our students and community.",
    },
    {
      id: 4,
      image: sesseIslands,
      title: "Sesse Islands - Actors Camp",
      date: "September 6-9, 2024",
      description:
        "Join us for an immersive 4-day actor's camp on the beautiful Sesse Islands. This retreat will focus on honing performance skills in a tranquil, inspiring setting.",
    },
    {
      id: 5,
      image: registrationNewActing,
      title: "Registration for new acting intake",
      date: "August 1-15, 2024",
      description:
        "Register now for our latest acting program intake. This is your opportunity to embark on a transformative journey and develop your craft under the guidance of our esteemed faculty. Secure your spot today!",
    },
    {
      id: 6,
      image: actorProfileArtistry360,
      title: "Actors profiling at The Artistry360",
      date: "July 20-27, 2024",
      description:
        "Explore the depth of your artistry at our comprehensive actor profiling event hosted by The Artistry360. Over the course of a week, our team of industry experts will assess your unique talents and provide personalized guidance to help you reach new heights in your acting career.",
    },
  ];

  return (
    <div
      className="w-full h-full bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay to darken the background image for better text readability */}
      <div className="w-full h-full bg-black bg-opacity-50 pt-16">
        {/* News & Events */}
        <div className="w-full h-full flex flex-col justify-center">
          {/* Heading, Paragraph & images */}
          <div className="flex flex-col gap-5 justify-center items-center">
            {/* text heading */}
            <div className="flex flex-col gap-2 text-center">
              {/* sub text */}
              <h2 className="text-[#f67d12] lg:text-3xl font-bold">
                NEWS AND EVENTS
              </h2>
              {/* main text */}
              <h1 className="text-[#F2F2F2] text-3xl lg:text-5xl font-bold">
                What Is New!?
              </h1>
            </div>

            {/* paragraph */}
            <p className="text-[#F2F2F2] text-justify px-[5%]">
              The Artistry360 is thrilled to share the latest news and exciting
              events happening at our premier acting academy. Over the past few
              months, we have been busy expanding our world-class training
              programs, hosting renowned acting masters, and giving back to our
              community. Our mission to transform aspiring talents into
              consummate professionals continues with renewed energy and
              dedication. Read on to discover our latest news, upcoming
              workshops, and ongoing opportunities to get involved.
            </p>
          </div>

          {/* Events Section */}
          <div className="container mx-auto mt-14">
            {/* Section title */}
            <h2 className="text-3xl font-bold mb-8 text-center uppercase text-[#f67d12]">
              On Going & Out Going Events
            </h2>
            <div className="flex flex-wrap justify-center -mx-4">
              {events.map((event) => (
                // Event card container
                <div
                  key={event.id}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                >
                  <div className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-md rounded-xl overflow-hidden shadow-md h-full flex flex-col transform transition-transform duration-300 ">
                    {/* Event image */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* Event content */}
                    <div className="p-6 flex-grow text-[#F2F2F2]">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.date}</p>
                      <p>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Ongoing opportunities */}
            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-[#F2F2F2]">
                Ongoing Opportunities
              </h3>
              <ul className="list-disc pl-6 text-[#F2F2F2]">
                <li>Registration for new acting intake</li>
                <li>Actors profiling at The Artistry360</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAndEvents;
