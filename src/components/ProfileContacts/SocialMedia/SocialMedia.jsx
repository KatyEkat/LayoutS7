import React from "react";
import * as S from "./styles";
import Share from "../../../asserts//img/share.svg";
import Telegram from "../../../asserts/img/sotialMediaIcons/tg.svg";
import Viber from "../../../asserts/img/sotialMediaIcons/viber.svg";
import WhatsUp from "../../../asserts/img/sotialMediaIcons/whatsUp.svg";
import Inst from "../../../asserts/img/sotialMediaIcons/ig.svg";
import Vk from "../../../asserts/img/sotialMediaIcons/vk.svg";
import FaceBook from "../../../asserts/img/sotialMediaIcons/fb.svg";
import YouTube from "../../../asserts/img/sotialMediaIcons/yt.svg";
import Ok from "../../../asserts/img/sotialMediaIcons/ok.svg";
import Star from "../../../asserts/img/sotialMediaIcons/star.svg";
import TikTok from "../../../asserts/img/sotialMediaIcons/tt.svg";
import Linkedin from "../../../asserts/img/sotialMediaIcons/linkedin.svg";

function ContactsList() {
  return (
    <S.SocialMediaBlock>
      <S.SocialMediaIcons src={Share} alt="поделиться" />

      <S.SocialMediaIcons src={Telegram} alt="телеграмм" />

      <S.SocialMediaIcons src={Viber} alt="вайбер" />

      <S.SocialMediaIcons src={WhatsUp} alt="вотсап" />

      <S.SocialMediaIcons src={Inst} alt="инстаграмм" />

      <S.SocialMediaIcons src={Vk} alt="вк" />

      <S.SocialMediaIcons src={FaceBook} alt="фейсбук" />

      <S.SocialMediaIcons src={YouTube} alt="ютуб" />

      <S.SocialMediaIcons src={Ok} alt="одноклассники" />

      <S.SocialMediaIcons src={Star} alt="звезда" />

      <S.SocialMediaIcons src={TikTok} alt="тикток" />

      <S.SocialMediaIcons src={Linkedin} alt="линкедин" />
    </S.SocialMediaBlock>
  );
}

export default ContactsList;
