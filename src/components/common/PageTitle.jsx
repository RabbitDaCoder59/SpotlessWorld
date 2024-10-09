import React from "react";

const PageTitle = ({ title, subTitle }) => {
  return (
    <div className="pageTitle px-5 py-18 lg:py-32 lg:block flex flex-col items-center">
      <div className="text-white text-4xl lg:text-7xl text-center font-dancing font-extrabold capitalize pb-10">
        {title}
      </div>
      <div className="text-white text-2xl lg:text-4xl font-dancing font-extrabold capitalize pb-6">
        {subTitle}
      </div>
      <button className="button" onClick={() => (location.href = <Contact />)}>
        contact
      </button>
    </div>
  );
};

export default PageTitle;
