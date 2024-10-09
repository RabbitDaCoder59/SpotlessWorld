import React from "react";
import Header from "../components/common/Header";
import "./global.css";
import InfoCard from "../components/common/InfoCard";
import PageTitle from "../components/common/PageTitle";
import Content from "../components/common/Content";

const Home = () => {
  return (
    <div className="Home relative overflow-hidden lg:overflow-auto">
      <Header />
      <div className="flex flex-col lg:flex-row relative">
        <PageTitle
          title={"Professional home management services."}
          subTitle={"Always here for You"}
        />
        <InfoCard />
      </div>
      <Content />
    </div>
  );
};

export default Home;
