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
} from "./HeroElements";

import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>ЯрКава - яркое кофе для новых вершин!</HeroH1>
        <HeroP>
          Зарегестрируйтесь в нашем приложении и получите Cappuccino XL
          бесплатно!
        </HeroP>
        <HeroBtnWrapper >
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
