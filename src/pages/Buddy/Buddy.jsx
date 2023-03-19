import React from "react";
import BuddyHeader from "../../components/BuddyHeader/BuddyHeader";
import Image from "../../asserts/img/smiley-man-relaxing-outdoors 1.jpg";
import Man from "../../asserts/img/man.svg";
import MapIcon from "../../asserts/img/map.png";
import * as S from "./style.js";
import SocialAboutProfile from "../../components/ProfileContacts/SocialAboutProfile/SocialAboutProfile";
import ButtonBlock from "../../components/ButtonBlock/ButtonBlock";

function Buddy() {
  return (
    <S.Container>
      <BuddyHeader />

      <S.Info>
        <S.ImgBlock>
          <S.Img src={Image} alt="фото" />
        </S.ImgBlock>
        <S.AboutMe>
          <S.Name>Попов Дмитрий Александрович</S.Name>
          <S.PersonalInfo>
            <S.Text>
              <S.Icon src={Man} /> Директор
            </S.Text>
            <S.Text>
              <S.Icon src={MapIcon} />
              Санкт-Петербург, Аптекарская наб. 20
            </S.Text>
          </S.PersonalInfo>
        </S.AboutMe>
      </S.Info>

      <S.SocialBlockContainer>
        <S.SocialBlock>
          <S.SaveAbout>Сохранить контакт</S.SaveAbout>
        </S.SocialBlock>

        <S.SocialBlock>
          <SocialAboutProfile />
        </S.SocialBlock>
        <S.LinkArrow href="/about">
          <ButtonBlock />
        </S.LinkArrow>
      </S.SocialBlockContainer>
    </S.Container>
  );
}

export default Buddy;
