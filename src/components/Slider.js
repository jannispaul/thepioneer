import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import "../theme/carousel.css"

//check https://github.com/brainhubeu/react-carousel/issues/287 and update if available

const SimpleSlider = class extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          centered
          infinite
          dots
          draggable
          slidesPerPage={4}
          breakpoints={{
            1300: { slidesPerPage: 3 },
            1000: { slidesPerPage: 3.5 },
            900: { slidesPerPage: 3.5, centered: true },
            750: { slidesPerPage: 3, centered: true },
            630: { slidesPerPage: 2, centered: true },
            450: { slidesPerPage: 1.5, centered: false },
            350: { slidesPerPage: 1.3, centered: false },
          }}
        >
          {this.props.children}
        </Carousel>
      </div>
    )
  }
}

export default SimpleSlider
