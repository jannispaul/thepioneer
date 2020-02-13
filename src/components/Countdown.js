// Countdown code from https://alligator.io/react/countdown-timer-react-hooks/
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StyledH3 = styled.h3`
  color: white;
  text-align: center;
`

const StyledSection = styled.section`
  padding: 10vh 16px;
  color: white;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`
const StyledGrid = styled.div`
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 120px);
  margin: auto;
`
const StyledCell = styled.div``

const TimerCard = styled.div`
  color: red;
  background: white;
  border-radius: 5px;
  height: 60px;
  width: 30px;
`

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-02-21") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minuten: Math.floor((difference / 1000 / 60) % 60),
        Sekunden: Math.floor((difference / 1000) % 60),
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

    timerComponents.push(
      <StyledCell>
        {interval}
        <TimerCard>{timeLeft[interval]}</TimerCard>
      </StyledCell>
    )
  })

  return (
    <StyledSection>
      <StyledGrid>
        {timerComponents.length ? timerComponents : <span>Es ist soweit!</span>}
      </StyledGrid>
      <StyledH3>Bis zum Start</StyledH3>
    </StyledSection>
  )
}
export default Countdown
