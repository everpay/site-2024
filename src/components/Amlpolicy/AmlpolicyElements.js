import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #ffffff;
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


export const H1 = styled.h1`
   align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
    max-width: 360px;
    width: 100%;
  color: "#1f1f30";
  font-size: 32px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 36px;
  text-align: left;
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

export const H4 = styled.h4`
   align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    max-width: 360px;
    width: 100%;
  color: "#1f1f30";
  font-size: 21px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 36px;
  text-align: left;
`;

export const P = styled.p`
   align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
  color: "#1f1f30";
  font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 32px;
  text-align: left;
`;

export const Text = styled.span`
  text-align: left;
  margin-top: 24px;
  color: #1f1f30;
  font-size: 14px;
`;

export const Cookies = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -20px;
`;

export const Safedata = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 55px 0;
`;
