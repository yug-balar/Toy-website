import React from 'react'
import InfoRow from "../componants/InfoRows/InfoRow"
import { homeAboutUsRowData, homeOurJourneyRowData } from "../data/HomePageData";


function About() {
    return (
        <>
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
        </>

    )
}

export default About;