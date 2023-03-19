import React from "react";
import BuddyHeader from "../../components/BuddyHeader/BuddyHeader.jsx";
import SocialAbout from "../../components/ProfileContacts/CocialAbout/CocialAbout";

import * as S from "./style.js";

function About() {
  return (
    <S.Container>
      <BuddyHeader styled={{ position: "absolute" }}></BuddyHeader>

      <S.Block>
        <S.ArrowLink href="/">
          <S.Arrow>&#8249; Назад</S.Arrow>
        </S.ArrowLink>
      </S.Block>

      <S.Name>S7 Airlines </S.Name>
      <S.Info>
        Крупнейшая частная авиакомпания России с самым современным парком
        воздушных судов на российском рынке авиаперевозок. Широкая маршрутная
        сеть позволяет нашим пассажирам путешествовать в 181 город в 26 странах
        мира.
      </S.Info>
      <S.Info>
        {" "}
        S7 Airlines входит в тройку лучших авиакомпаний Восточной Европы в
        авторитетном международном рейтинге Skytrax. По результатам 2018 года S7
        Airlines стала самой пунктуальной российской авиакомпанией, заняв шестое
        место в европейском рейтинге пунктуальности авиакомпаний OAG Punctuality
        League 2019.
      </S.Info>
      <S.Info>
        S7 Airlines — один из самых экологичных авиаперевозчиков мира, по оценке
        экологической организации Atmosfair. Авиакомпания занимает 16 место в
        мировом рейтинге.
      </S.Info>
      <SocialAbout />
    </S.Container>
  );
}

export default About;
