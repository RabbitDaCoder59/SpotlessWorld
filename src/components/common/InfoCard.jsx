import React from "react";
import "../../assets/styles/styles.css";
import supportImg from "../../assets/supportImg.png";

const InfoCard = () => {
  return (
    <div className="lg:justify-normal justify-center flex">
      <div className="text-white font-poppins capitalize font-semibold relative top-0 lg:top-80 right-0 w-92 h-68 lg:w-150 lg:h-40 bg-blue mb-20 lg:mb-0 lg:justify-normal justify-center  flex items-center px-2 lg:px-8">
        <div className="flex lg:flex-row flex-col  items-center">
          <div className="lg:mr-3 mb-6">
            <img
              className="lg:w-20 w-28 "
              src={supportImg}
              alt="supportImage"
            />
          </div>
          <div className="text flex flex-col items-center">
            <div className="text-3xl pb-4 lg:pb-5">Contact us today</div>
            <div className="text-3xl">1 910-626-85255</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
