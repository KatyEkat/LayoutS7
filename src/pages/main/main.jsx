import React from "react";
import * as S from "./style";
import ProfileContacts from "../../components/ProfileContacts/ProfileContacts";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <S.Home>
      <S.Main>
        <Header />
        <ProfileContacts />
      </S.Main>
    </S.Home>
  );
}

export default Home;
