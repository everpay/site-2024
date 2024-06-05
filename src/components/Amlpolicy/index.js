import React from "react";
import { Link } from "react-router-dom";
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  Container,
  Wrap,
  Logo,
  Icon,
  Content,
  H1,
  Text,
} from "./AmlpolicyElements";

export const AmlPolicy = () => {
  return (
    <HeroContainer>
      <HeroBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Anti-Money Laundering Policy</HeroH1>
        <HeroP>
        We implemented best-of-class measures to combat financial crimes.
        </HeroP>
        <HeroBtnWrapper>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
    <Container>
        <Wrap>
    <Icon to="/"><Logo><img src='https://res.cloudinary.com/lmj6rf6tz/image/upload/v1681518139/img/LogoSqr.png' width={48} height={48} alt='Everpay'/></Logo>
            </Icon>
        <Content>
          <H1>AML Policy</H1>
            <Text>
              We take security very seriously{" "}
              <Link to="/signin" style={{ color: "#01bf71" }}>
                Login here
              </Link>
            </Text>
        </Content>
        </Wrap>
    </Container>
  );
};

export default AmlPolicy;
