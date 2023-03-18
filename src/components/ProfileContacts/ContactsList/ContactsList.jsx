import React from "react";
import * as S from "./style";
import MobPhone from "../../../asserts/img/profileIcons/mobPhone.svg";
import MobPhoneExtra from "../../../asserts/img/profileIcons/mobPhoneExtra.svg";
import HomePhone from "../../../asserts/img/profileIcons/homePhone.svg";
import Email from "../../../asserts/img/profileIcons/email.svg";
import Site from "../../../asserts/img/profileIcons/site.svg";
import Job from "../../../asserts/img/profileIcons/job.svg";
import Home from "../../../asserts/img/profileIcons/home.svg";
import Birthday from "../../../asserts/img/profileIcons/birthday.svg";
import Education from "../../../asserts/img/profileIcons/education.svg";

function ContactsList() {
  return (
    <S.ContactsBlock>
      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={MobPhone} alt="моб тел" />
        +7 (000) 000-00-00
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={MobPhoneExtra} alt="доп моб тел" />
        +7 (000) 000-00-00
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={HomePhone} alt="дом тел" />
        +7 (000) 000-00-00
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={Email} alt="эл почта" />
        Popov@S7Airlines.ru
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={Site} alt="сайт" />
        s7.ru
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={Job} alt="работа" />
        S7 Airlines
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={Home} alt="адрес" />
        СПб, Аптекарская наб. 20
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={Birthday} alt="день рождения" />
        30.11.1993
      </S.ContactsBlockContent>

      <S.ContactsBlockContent>
        <S.ProfileContactsContacts src={Education} alt="звание/уч степень" />
        Звание/уч степень
      </S.ContactsBlockContent>
    </S.ContactsBlock>
  );
}

export default ContactsList;
