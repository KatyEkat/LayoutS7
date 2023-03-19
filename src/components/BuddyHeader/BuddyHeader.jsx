import React from "react";
import LogoLight from "../LogoLight/LogoLight";
import * as S from "./styles.js";

function BuddyHeader() {
  return (
    <>
      <S.HeaderDark>
        <LogoLight />
      </S.HeaderDark>
    </>
  );
}

export default BuddyHeader;
