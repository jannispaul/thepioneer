import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"
import { device } from "../theme/breakpoints"

const StyledPost = styled.a`
  position: relative;
  display: flex;
  text-decoration: none;
  background: white;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  padding: 0px 20px 20px;
  box-shadow: 0px 0px 0px 1px #e3e3e3;
  margin: 20px 0;
  /* @media ${device.tablet} {
  } */
`

const StyledImage = styled.img`
  height: 160px;
  width: calc(100% + 40px);
  max-height: 300px;
  object-fit: cover;
  margin: 0 -20px;
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
    height: 260px;
  }
`
const Meta = styled.p`
  font: 600 12px Poppins;
`
const Brand = styled.span`
  display: inline-block;
  background: #d3bdef;
  padding: 4px 6px;
  margin-right: 4px;
  font-weight: 600;
`
const Author = styled.span`
  display: inline-block;
  background: #ddd;
  padding: 4px 6px;
  font-weight: 600;
`

const Title = styled.h4`
  font: 700 1.125rem / 1.4 Poppins;
  margin: 16px 0 12px 0;
`
const Description = styled.p`
  font-size: 17px;
`
const TextContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`
const FlexContainer = styled.div``
const Button = styled.a`
  display: inline-block;
  padding: 10px;
  font: 600 14px Poppins;
  text-decoration: none;
  border: none;
  color: white;
  background: #6622c3;
  margin-top: 12px;
  margin-right: 10px;
  width: auto;
  border-radius: 4px;

  :before {
    display: inline-block;
    content: "";
    -webkit-font-smoothing: antialiased;
    font: 400 22px / 22px Icons;
    vertical-align: middle;
    transform: translate(0px, -5%);
    margin-right: 0.25em;
  }
`
const StyledDate = styled.p`
  display: inline-block;
  font: 600 14px Poppins;
  color: #8c8c8c;
  margin-bottom: 10px;
`
// const CardFooter = styled.div`
//   display: block;
//   & > div {
//     display: inline-block;
//   }
// `
const HeroVideo = (props) => (
  <StyledPost
    key={props.id}
    href={(() => {
      if (props.brand === null) {
        return (
          "https://www.thepioneer.de/originals/others/articles/" + props.slug
        )
      } else if (props.type === "ArticleReduced" && props.podcast === null) {
        return (
          "https://www.thepioneer.de/originals/" +
          props.brand.slug +
          "/articles/" +
          props.slug
        )
      } else if (props.type === "ArticleReduced" && props.podcast) {
        return (
          "https://www.thepioneer.de/originals/" +
          props.brand.slug +
          "/podcasts/" +
          props.slug
        )
      } else if (props.type === "NewsletterReduced") {
        return (
          "https://www.thepioneer.de/originals/" +
          props.brand.slug +
          "/briefings/" +
          props.slug
        )
      }
    })()}
  >
    <StyledImage src={props.image} alt={props.alt} />
    <TextContainer>
      <FlexContainer>
        <Meta>
          {props.brand !== null ? <Brand>{props.brand.title}</Brand> : ""} von{" "}
          &nbsp;
          <Author>{props.authors[0].name}</Author>
        </Meta>
        <Title
          dangerouslySetInnerHTML={{
            __html: props.title,
          }}
        ></Title>
        <Description
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        ></Description>
      </FlexContainer>
      <div>
        <Button href="">Jetzt lesen</Button>

        {/* {props.brand ? props.brand.title : ""}  */}
        <StyledDate>
          vom {props.createdAt.substring(8, 10)}.
          {props.createdAt.substring(5, 7)}.{props.createdAt.substring(0, 4)}{" "}
        </StyledDate>
      </div>
    </TextContainer>
  </StyledPost>
)

export default HeroVideo
