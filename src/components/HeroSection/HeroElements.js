import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 720px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(190deg, #ffffff 0%, rgba(0, 0, 0, 0.2) 100%),
      linear-gradient(190deg, #FFFFFF 0%, rgba(0, 0, 0, 0.2) 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 50px 40px 8px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  margin-top: 20px;
  color: rgb(47, 46, 65);
  font-size: 76px;
  font-weight: 700;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 56px;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
    font-size: 42px;
  }
`;

export const HeroP = styled.p`
  margin-top: -10px;
  color: rgb(0 0 0);
  text-shadow: 0 1 black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: -10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Btn = styled.div`
    padding: 22px 36px !important;
    color: #fff !important;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
