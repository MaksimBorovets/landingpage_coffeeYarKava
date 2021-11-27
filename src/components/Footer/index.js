import React from "react";
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterSection";

const Footer = () => {
  const toggleTop = () => {
    scroll.scrollToTop()
  }
  return (

    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              {/* <FooterLinkTitle>About Us</FooterLinkTitle> */}
              <FooterLink to="/signin">О нас</FooterLink>
              <FooterLink to="/signin">Наши кофейни</FooterLink>
              <FooterLink to="/signin">Топ продаж</FooterLink>
              <FooterLink to="/signin">Вакансии </FooterLink>
              <SocialIconLink href="https://www.linkedin.com/in/maksim-borovets-846681207/" target="_blank" > С вязатся с разработчиком</SocialIconLink>
            </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleTop}> ЯрКава </SocialLogo>
            <WebsiteRights >
              ЯрКава {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
