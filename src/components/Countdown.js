// Countdown code from https://alligator.io/react/countdown-timer-react-hooks/
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerLogo from "./PioneerLogo"

const StyledSection = styled.section`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
  color: white;
  background: rgb(2, 0, 36);
  background-image: linear-gradient(90deg, #6622c3 0%, #a3065e 99%);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  flex-direction: column;
  @media ${device.tablet} {
    position: fixed;
    top: 0;
    flex-direction: row;
  }
`
const StyledGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`
const TimerCard = styled.div`
  font-size: 60px;
  line-height: 1;
  padding: 12px 0 12px 0;
  text-align: center;
  color: #1f1f1f;
  background: white;
  width: 30%;
  background: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 1.43px;
  @media ${device.tablet} {
    margin: 0 10px;
    padding-top: 4px;
    height: 64px;
    width: 60px;
    font-size: 42px;
  }

  & > span {
    display: block;
    font-size: 14px;
    color: #8c8c8c;
    letter-spacing: 1.17px;
    text-align: center;
    text-transform: uppercase;
  }
`
const Text = styled.p`
  font-family: "Poppins", "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif;
  font-weight: 600;
  margin-top: 12px;
  font-size: 21px;
  color: #fff;
  text-align: center;
  line-height: 1.18;
  & span {
    font-weight: 400;
  }
  & svg {
    max-width: 140px;
    width: 140px;
    vertical-align: middle;
    margin-bottom: 4px;
  }
  @media ${device.tablet} {
    margin-top: 0;
    margin-left: 24px;
    font-size: 32px;
  }
`
const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-06-21") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuten: Math.floor((difference / 1000 / 60) % 60),
        // Sekunden: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(<div>{timeLeft[interval]}</div>)
  })

  return (
    <StyledSection>
      {/* {timerComponents.length ? timerComponents : <span>Es ist soweit!</span>} */}
      <StyledGrid>
        <TimerCard>
          {timeLeft.tage}
          <span>Tage</span>
        </TimerCard>
        :
        <TimerCard>
          {timeLeft.stunden}
          <span>Std</span>
        </TimerCard>
        :
        <TimerCard>
          {timeLeft.minuten}
          <span>Min</span>
        </TimerCard>
      </StyledGrid>
      <Text>
        bis zur Ankunft von <PioneerLogo fill="#fff"></PioneerLogo>{" "}
        <span>One</span> in Berlin
      </Text>
    </StyledSection>
  )
}
export default Countdown
