import React from "react";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
  ImageBg,
} from "./HeroElements";
import { BrowserView, MobileView } from "react-device-detect";

import Video from "../../videos/video.mp4";
import HeroImg from "../../images/heroImg.jpg";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <BrowserView>

        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
      </BrowserView>
      <MobileView>

        <HeroBg>
          <ImageBg src={HeroImg} />
        </HeroBg>
      </MobileView>

      <HeroContent>
        <HeroH1>ЯрКава - яркое кофе для новых вершин!</HeroH1>
        <HeroP>
          Зарегестрируйтесь в нашем приложении и получите Cappuccino XL
          бесплатно!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="/signin"
          >
            Зарегестрироватся {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
