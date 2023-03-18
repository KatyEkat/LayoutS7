import React from "react";
import ArrowLeft from "../../asserts/img/Arrow1.svg";
import ArrowRight from "../../asserts/img/Arrow2.svg";
import * as S from "./styles";

function Header() {
  return (
    <S.HeaderBlock>
      <S.HeaderArrows>
        <S.HeaderArrow src={ArrowLeft} alt="стрелка влево" />
        <S.HeaderArrow src={ArrowRight} alt="стрелка влево" />
      </S.HeaderArrows>

      <S.HeaderContentText>
        <S.H1>о сотруднике</S.H1>
        <S.H1>о компании</S.H1>
      </S.HeaderContentText>
    </S.HeaderBlock>
  );
}

export default Header;
