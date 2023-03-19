import React from "react";
import * as S from "./style.js";
import LogoPart from "../../asserts/img/SocialAbove/partLogo.svg";

function ButtonBlock() {
  return (
    <S.Container>
      <S.Logo src={LogoPart} />
      <S.Arrow>
        <S.TextDark>S7 Airlines</S.TextDark>
        <S.Text>
          Крупнейшая частная <br /> авиакомпания России
        </S.Text>
      </S.Arrow>
      <S.Arrow>&#8250;</S.Arrow>
    </S.Container>
  );
}

export default ButtonBlock;
