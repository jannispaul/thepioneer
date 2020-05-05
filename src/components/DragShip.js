import ReactDOM from "react-dom"
import React, { useRef, useEffect } from "react"

import ScrollContainer from "react-indiana-drag-scroll"
import PioneerOneGraphic from "../components/ImageComponents/PioneerOneGraphic"

const DragShip = () => {
  const container = useRef(null)

  useEffect(() => {
    ReactDOM.findDOMNode(container.current).scrollTo(10000, 0)
  }, [])

  return (
    <div>
      <ScrollContainer className="container" ref={container}>
        <PioneerOneGraphic></PioneerOneGraphic>
      </ScrollContainer>
    </div>
  )
}

export default DragShip
