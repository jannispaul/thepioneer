import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { device } from "../theme/breakpoints"

const StyledPost = styled.div`
  background: white;
  /* width: 100%; */
  overflow: hidden;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 3fr;
    border-radius: 4px;
    margin: 20px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.1);
    transition: all 200ms;
    transform: translateY(0);
    :hover {
      box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
      transition: all 200ms;
      transform: translateY(-2px);
    }
  }
  @media ${device.laptop} {
    display: block;
    max-width: 300px;
  }
`

const StyledImage = styled(Img)`
  /* height: 100% !important; */
  width: 100% !important;
  @media ${device.tablet} {
    height: 100% !important;
    width: 100% !important;
  }
  @media ${device.laptop} {
    display: block;
    height: 200px !important;
    width: 300px !important;
  }
`
const TextContainer = styled.div`
  padding: 14px 20px 70px 20px;
  line-height: 1.3;
  grid-column: 2/3;
  position: relative;
  & p {
    font-size: 15px;
  }
  @media ${device.tablet} {
    padding: 20px 30px 80px 30px;
    & p {
      font-size: 17px;
    }
  }
  @media ${device.laptop} {
    position: inherit;
    display: block;
  }
`
const StyledDate = styled.p`
  text-transform: uppercase;
  opacity: 0.7;
  font-size: 13px;
  margin-bottom: 10px;
  @media ${device.mobileL} {
    font-size: 16px;
  }
`
const StyledLink = styled.a`
  position: absolute;
  bottom: 30px;
  text-decoration: none;
  padding-bottom: 3px;
  background: linear-gradient(to right, red 0%, blue 100%) bottom no-repeat;
  background-size: 100% 2px;
  display: inline-block;
`
const HeroVideo = props => (
  <StyledPost key={props.id}>
    <StyledImage resolutions={props.image} alt={props.alt} objectFit="cover" />

    <TextContainer>
      <StyledDate>{props.date}</StyledDate>
      <p
        dangerouslySetInnerHTML={{
          __html: props.title,
        }}
      ></p>
      <StyledLink href={props.link}>Weiterlesen →</StyledLink>
    </TextContainer>
  </StyledPost>
)

export default HeroVideo
