import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;
  height: 360px;
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
  max-width: 1100px;
  position: absolute;
  padding: 40px 40px 8px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  margin-top: 2px;
  color: rgb(47, 46, 65);
  font-size: 46px;
  font-weight: 700;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 42px;
    margin-top: 2px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 2px;
    font-size: 36px;
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

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #fefefe;
`;

export const Logo = styled.div`
  margin-left: -41px;
  margin-top: 1px;
`;


export const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: #1f1f30;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;


export const H2 = styled.h2`
   align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
    max-width: 360px;
    width: 100%;
  color: "#1f1f30";
  font-size: 26px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 36px;
  text-align: left;
`;

export const Text = styled.span`
  text-align: left;
  margin-top: 24px;
  color: #1f1f30;
  font-size: 14px;
`;
