import React, { Component } from "react"
import Slider from "infinite-react-carousel"

const SimpleSlider = class extends React.Component {
  render() {
    const settings = {
      centerPadding: 0,
      slidesToShow: 5,
      centerMode: true,
      dots: true,
    }
    return (
      <div>
        <span>CustomSlider</span>
        <Slider {...settings}>{this.props.children}</Slider>
      </div>
    )
  }
}

export default SimpleSlider
