import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, description }) => {
  
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      {/* <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
      </S.WrapperLink> */}
      <S.WrapperDescription>{description ? description.substring(0,170) : "- No Description -"}</S.WrapperDescription>          
    </S.Wrapper>
  );
};

export default RepositoryItem;
