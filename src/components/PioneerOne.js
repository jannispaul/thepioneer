import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerHeadline from "./PioneerHeadline"
import ScrollContainer from "react-indiana-drag-scroll"
import PioneerOneGraphic from "../components/ImageComponents/PioneerOneGraphic"
import PioneerButton from "./PioneerButton"

const StyledSection = styled.section`
  background: #fff;
  max-width: 100%;
  padding: 60px 0 80px 0;
  overflow: hidden;
  @media ${device.tablet} {
    padding: 80px 0 100px 0;
  }

  & p {
    margin-bottom: 32px;
    @media ${device.tablet} {
      margin-bottom: 0;
      padding: 0 16px;
    }
  }
`
const ContentContainer = styled.div`
  padding: 16px;
  margin-bottom: 20px;
`
const PioneerOne = () => (
  <StyledSection>
    <ContentContainer>
      <PioneerHeadline color="black">One</PioneerHeadline>
      <h2>Live-Journalismus im Herzen der Hauptstadt</h2>
      <p>
        Herzlich Willkommen auf ThePioneer One. An Bord des ersten
        Redaktionsschiffs der Welt begeben wir uns auf eine Expedition in die
        Erkenntnis und suchen gemeinsam nach unbequemen Wahrheiten. Bei mehreren
        Live-Events pro Woche diskutieren wir gemeinsam mit Ihnen – und
        verwandeln den schwimmenden Newsroom so zum demokratischsten Ort des
        Landes.
      </p>
      <PioneerButton subline></PioneerButton>
    </ContentContainer>
    <ScrollContainer vertical="false">
      <PioneerOneGraphic></PioneerOneGraphic>
    </ScrollContainer>
  </StyledSection>
)

export default PioneerOne
