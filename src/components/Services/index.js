import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Icon1 from '../../images/latteAutor.jpg'
import Icon2 from '../../images/cappu.jpg'
import Icon3 from '../../images/latte.jpg'

const Services = () => {
  return (
    <ServicesContainer id="drinks">
      <ServicesH1>Топ продаж</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Авторское Латте </ServicesH2>
          <ServicesP> 35 грн</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Капучино</ServicesH2>
          <ServicesP>28 грн</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Латте</ServicesH2>
          <ServicesP>28 грн</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
