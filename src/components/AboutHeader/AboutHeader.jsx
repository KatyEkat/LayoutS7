import React from "react";
import About from "../../pages/about/About";
import BackBtn from "../Button/BackBtn";
import LogoLight from "../logoLight/LogoLight";

import * as S from "./styles.js";

function AboutHeader() {
  return (
    <>
      <S.HeaderDark>
        <BackBtn />
        <LogoLight />
      </S.HeaderDark>
      <About />
    </>
  );
}

export default AboutHeader;
