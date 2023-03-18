import React from "react";
import * as S from "./styles";
import ProfilePhoto from "../../asserts/img/ProfilePhotoBig.jpg";
import LogoDark from "../LogoDark/LogoDark";
import ProfileContactsButtons from "./ProfileCircleButtons/ProfileCircleButtons";
import ContactsList from "./ContactsList/ContactsList";
import SocialMedia from "./SocialMedia/SocialMedia";

function ProfileContacts() {
  return (
    <S.ProfileContacts>
      <S.ProfileContactsLeft>
        <S.ProfilePhotoWithButtons>
          <ProfileContactsButtons />
          <S.ProfileContactsPhoto src={ProfilePhoto} alt="фото профиля" />
        </S.ProfilePhotoWithButtons>

        <S.ProfileContactsButton>Сохранить в контакты</S.ProfileContactsButton>
      </S.ProfileContactsLeft>

      <S.ProfileContactsRight>
        <LogoDark />
        <S.ProfileContactsHeader>
          Астахов Павел Александрович
        </S.ProfileContactsHeader>
        <S.ProfileContactsHeading>
          Директор по маркетингу
        </S.ProfileContactsHeading>
        <ContactsList />
        <SocialMedia />
      </S.ProfileContactsRight>
    </S.ProfileContacts>
  );
}

export default ProfileContacts;
