import React from "react";
import * as S from "./styles";
import Phone from "../../../asserts/img/SocialAbove/phone.svg";
import Email from "../../../asserts/img/SocialAbove/email.svg";
import Website from "../../../asserts/img/SocialAbove/browser.svg";
import Inst from "../../../asserts/img/SocialAbove/insta.svg";
import Twit from "../../../asserts/img/SocialAbove/twitter.svg";
import Teleg from "../../../asserts/img/SocialAbove/telegram.svg";
import WhatsUp from "../../../asserts/img/SocialAbove/whatsup.svg";
import WhatsUpCall from "../../../asserts/img/SocialAbove/wucall.svg";
import Vk from "../../../asserts/img/SocialAbove/vk.svg";
import FaceBook from "../../../asserts/img/SocialAbove/facebook.svg";

function SocialAbout() {
  return (
    <S.SocialMediaBlock>
      <S.SocialMediaIcons src={Phone} alt="телефон" />

      <S.SocialMediaIcons src={Email} alt="эмайл" />

      <S.SocialMediaIcons src={Website} alt="вебсайт" />

      <S.SocialMediaIcons src={Inst} alt="инстаграмм" />

      <S.SocialMediaIcons src={Twit} alt="твиттер" />

      <S.SocialMediaIcons src={Teleg} alt="телеграм" />

      <S.SocialMediaIcons src={WhatsUp} alt="вотсап" />

      <S.SocialMediaIcons src={WhatsUpCall} alt="вотсап звонок" />

      <S.SocialMediaIcons src={Vk} alt="вк" />

      <S.SocialMediaIcons src={FaceBook} alt="фейсбук" />
    </S.SocialMediaBlock>
  );
}

export default SocialAbout;
