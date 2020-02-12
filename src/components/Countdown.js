// Countdown code from https://alligator.io/react/countdown-timer-react-hooks/
import React, { useEffect, useState } from "react"

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
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })

  return (
    <div>
      <h2>Timer!</h2>
      {timerComponents.length ? timerComponents : <span>Es ist soweit!</span>}
    </div>
  )
}
export default Countdown
