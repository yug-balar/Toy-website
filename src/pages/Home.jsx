import React from "react";
import InfoRow from "../componants/InfoRows/InfoRow";
import { homeAboutUsRowData, homeOurJourneyRowData } from "../data/HomePageData";
import Carousel from "../componants/carousel/Carousel"
import CardRow from "../componants/home/card/CardRow";
import Faqrows from "../componants/home/faqsRow/FaqsRow"
import Contact from "../pages/Contact"
import Reviews from "../componants/Reviews/Reviews";
import Products from "./Products";


function Home() {
  return (
    <>
      <Carousel />
      {/* <Profile
        f1="Hello,"
        name="WE ARE YUG AND DEEP..."
        std="Web Developer"
        from="From Surat"
      /> */}
      <InfoRow
        src={homeAboutUsRowData.src}
        title={homeAboutUsRowData.title}
        cont={homeAboutUsRowData.cont}
        desc={homeAboutUsRowData.desc}
      />
      <InfoRow
        src={homeOurJourneyRowData.src}
        title={homeOurJourneyRowData.title}
        cont={homeOurJourneyRowData.cont}
        desc={homeAboutUsRowData.desc}

        contentFirst
      />
      <CardRow />
      <Products />
      <Faqrows />
      <Reviews />
      <Contact />
    </>
  );
}

export default Home;
