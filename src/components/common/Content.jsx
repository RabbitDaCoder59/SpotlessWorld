import React from "react";
import "../../assets/styles/styles.css";
import { ServiceCards } from "../../data";

const Content = () => {
  return (
    <section className="w-full">
      {/* About Us */}
      <div className="w-full h-full font-poppins text-white bg-blue  pt-20 px-4 lg:px-9">
        <div className="flex">
          <div className="flex lg:flex-row flex-col">
            <div className="img ml-0 lg:ml-24"></div>
            <div className="desc w-full ml-0 lg:ml-36 py-14">
              <div className="text-5xl pb-8 font-dancing">About</div>
              <p className="pb-8 font-semibold">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
              </p>
              <p className="pb-9 font-semibold">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit.
              </p>

              <button className="capitalize w-36 h-11 text-blue font-poppins text-lg font-medium  bg-white">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* services title */}
      <section className="w-full h-72 bg-blue  text-white">
        <div className="w-full h-full flex flex-col items-center py-8 lg:py-24">
          <h1 className="lg:text-5xl text-4xl font-dancing font-extrabold mb-5">
            Services
          </h1>
          <div className="text-wrap px-3 lg:px-84 text-center">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec.
          </div>
        </div>
      </section>

      {/* Our service Cards */}
      <section className="w-full h-full bg-black text-white">
        <div className="grid gap-0 grid-cols-1 lg:grid-cols-4 overflow-hidden">
          {ServiceCards.map((Cards, index) => (
            <div key={index} className={`cards ${Cards.className}`}>
              <div className="anim-Image mb-4">
                <img src={Cards.icon} alt="animinateImage" />
              </div>
              <div className="title text-xl font-bold uppercase">
                {Cards.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* services title */}
      <section className="w-full h-72 bg-blue  text-white">
        <div className="w-full h-full flex flex-col items-center py-24">
          <h1 className="lg:text-5xl text-4xl  font-dancing font-extrabold mb-5">
            Why Choose Us
          </h1>
          <div className="text-wrap px-3 lg:px-84  text-center">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
      </section>
    </section>
  );
};

export default Content;
