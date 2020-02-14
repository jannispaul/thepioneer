import React, { Component } from "react"
import Slider from "infinite-react-carousel"

const Slider = class extends React.Component {
  render() {
    const settings = {
      centerPadding: 60,
      slidesToShow: 4,
    }
    return (
      <div>
        <span>CustomSlider</span>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Slider
