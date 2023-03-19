import React from "react";
import * as S from "./style";
import ArrowSmallRight from "../../../asserts/img/arrowSmallRight.svg";
import ArrowSmallLeft from "../../../asserts/img/arrowSmallLeft.svg";

function ProfileContactsButtons() {
  return (
    <S.ProfileContactsCircle>
      <S.ProfileContactsCircleButtonsContainer>
        <S.ProfileContactsCircleButtons />
        <S.ProfileContactsCircleArrowRight src={ArrowSmallRight} alt="стрелка" />
      </S.ProfileContactsCircleButtonsContainer>

      <S.ProfileContactsCircleDotsContainer>
        <S.ProfileContactsCircleDots />
        <S.ProfileContactsCircleDots />
        <S.ProfileContactsCircleDots />
        <S.ProfileContactsCircleDots />
      </S.ProfileContactsCircleDotsContainer>

      <S.ProfileContactsCircleButtonsContainer>
        <S.ProfileContactsCircleButtons />
        <S.ProfileContactsCircleArrowLeft src={ArrowSmallLeft} alt="стрелка" />
      </S.ProfileContactsCircleButtonsContainer>

    </S.ProfileContactsCircle>
  );
}

export default ProfileContactsButtons;
