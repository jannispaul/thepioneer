// Countdown code from https://alligator.io/react/countdown-timer-react-hooks/
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: white;
  background: rgb(2, 0, 36);
  background-image: linear-gradient(90deg, #6622c3 0%, #a3065e 99%);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  flex-direction: column;
  @media ${device.tablet} {
    position: fixed;
    flex-direction: row;
  }
`
const StyledGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const TimerCard = styled.div`
  font-size: 36px;
  line-height: 1;
  padding-top: 2px;
  text-align: center;
  color: #1f1f1f;
  background: white;
  height: 54px;
  width: 50px;
  margin: 0 8px;
  @media ${device.tablet} {
    margin: 0 10px;
    padding-top: 4px;
    height: 64px;
    width: 60px;
    font-size: 42px;
  }

  & > p {
    font-size: 10px;
    color: #8c8c8c;
  }
`
const Text = styled.p`
  margin-top: 12px;
  font-size: 24px;
  color: #fff;
  text-align: center;
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
          <p>TAGE</p>
        </TimerCard>
        :
        <TimerCard>
          {timeLeft.stunden}
          <p>Stunden</p>
        </TimerCard>
        :
        <TimerCard>
          {timeLeft.minuten}
          <p>Minuten</p>
        </TimerCard>
      </StyledGrid>
      <Text>Bis wir in See stechen!</Text>
    </StyledSection>
  )
}
export default Countdown
