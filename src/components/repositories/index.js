import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem name="Repo 1" linkToRepo="https://github.com/lucassousa25" fullName="lucassousa25/sistema_side" />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
      <RepositoryItem name="Repo 2" linkToRepo="https://github.com/lucassousa25" fullName="lucassousa25/sistema_side" />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
}

export default Repositories;
