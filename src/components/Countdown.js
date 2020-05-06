// Countdown code from https://alligator.io/react/countdown-timer-react-hooks/
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerLogo from "./PioneerLogo"

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 16px;
  color: white;
  background: rgb(2, 0, 36);
  background-image: linear-gradient(90deg, #6622c3 0%, #a3065e 99%);
  flex-direction: column;
  @media ${device.tablet} {
  }
`
const StyledGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  max-width: 420px;
  @media ${device.tablet} {
  }
`
const TimerCard = styled.div`
  font-size: 45px;
  line-height: 1;
  padding: 12px 0 12px 0;
  text-align: center;
  color: #1f1f1f;
  background: white;
  width: 20%;
  background: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 1.43px;
  @media ${device.tablet} {
    font-size: 60px;
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

  @media ${device.tablet} {
    margin-top: 0;
    font-size: 22px;
  }
`
const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-05-18") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuten: Math.floor((difference / 1000 / 60) % 60),
        sekunden: Math.floor((difference / 1000) % 60),
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
        :
        <TimerCard>
          {timeLeft.sekunden}
          <span>Sek</span>
        </TimerCard>
      </StyledGrid>
      <Text>
        bis zur Ankunft von{" "}
        <PioneerLogo fill="#fff" width="120px"></PioneerLogo> <span>One</span>{" "}
        in Berlin
      </Text>
    </StyledSection>
  )
}
export default Countdown
