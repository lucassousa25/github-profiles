import React from "react";
import Header from "../header";
import * as S from "./styled"

const NoSearch = () => {
  return (
    <S.Wrapper>
      <S.WrapperAlign>
        <S.WrapperTitle>GitHub Perfis</S.WrapperTitle>
        <p>Faça uma busca dos perfis dos Devs e visulize seus repositórios</p>
        <Header />
      </S.WrapperAlign>
    </S.Wrapper>
  )
}

export default NoSearch;