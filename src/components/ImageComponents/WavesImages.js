import React from "react"

import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"
import wave1 from "../../images/svgs/wave1.svg"
import wave2 from "../../images/svgs/wave2.svg"

const StyledContainer = styled.div`
  position: relative;
  margin: -10px -16px 20px;
  width: 100vw;
  height: 10px;
  div:first-of-type {
    background: url(${wave1}) repeat-x;
    background-size: contain;
    position: absolute;

    width: 640px;
    /* width: 6400px; */
    height: 100%;
    animation: wave1 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  div:last-of-type {
    background: url(${wave2}) repeat-x;
    background-size: contain;
    position: absolute;
    /* width: 6400px; */
    width: 640px;
    height: 100%;
    animation: wave1 15s reverse cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  @media ${device.laptop} {
  }

  @keyframes wave1 {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -160px;
    }
  }

  @keyframes wave2 {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`

const Waves = () => (
  <StyledContainer>
    <div></div>
    <div></div>
  </StyledContainer>
)
export default Waves
// const HeroPlaceHolderImage = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         myQuery: file(relativePath: { eq: "hero-ship.jpg" }) {
//           childImageSharp {
//             fluid(maxWidth: 1000, quality: 80) {
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       const image = data.myQuery.childImageSharp
//       return (
//         <StyledImage
//           fluid={image.fluid}
//           imgStyle={{ objectFit: "cover" }}
//           alt="Das Redaktionsschiff - Pioneer One"
//         />
//       )
//     }}
//   />
// )
// export default HeroPlaceHolderImage
/* 
.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
} */
