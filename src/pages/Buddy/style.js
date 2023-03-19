import styled from "styled-components";
import { Back } from "../../components/Button/styles";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 20px 0 20px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const Info = styled.div`
  display: flex;
  position: absolute;
  top: 195px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 265.88px;
  height: 149.99px;
  background: #fafafa;
  border-radius: 9.09px;
  border-color: black;

  @media screen and (max-width: 800px) {
    top: 175px;
  }
`;

export const ImgBlock = styled.div`
  width: 50%;
`;

export const Img = styled.img`
  border-radius: 9.09px;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7.02px;
`;

export const Name = styled.div`
  margin-top: 52.27px;
  margin-bottom: 9.85px;
  font-family: "Nimbus Sans L";
  font-style: normal;
  font-weight: 700;
  font-size: 12.12px;
  line-height: 16px;
  color: #000000;
`;

export const PersonalInfo = styled.div`
  font-family: "Nimbus Sans L";
  font-style: normal;
  font-weight: 400;
  font-size: 9.09px;
  line-height: 12px;
  letter-spacing: 0.01em;
  color: #000000;
  opacity: 0.55;
`;

export const Icon = styled.img``;

export const Text = styled.div`
  margin-bottom: 4.42px;
`;

export const SaveAbout = styled(Back)`
  width: 265.88px;
  height: 37.88px;
  background: #c4d600;
  border-radius: 9.09px;

  font-family: "Nimbus Sans L";
  font-style: normal;
  font-weight: 700;
  font-size: 12.12px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;
`;

export const SocialBlockContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialBlock = styled.div`
  margin-top: 10px;
`;

export const LinkArrow = styled.a``;
