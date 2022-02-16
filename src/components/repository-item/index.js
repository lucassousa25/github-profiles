import React from "react";
import * as S from "./styled";
import { GoStar, GoRepoForked } from "react-icons/go";

const RepositoryItem = ({ name, linkToRepo, description }) => {
  
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      {/* <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
      </S.WrapperLink> */}
      <S.WrapperDescription>{description ? description.substring(0,180) : "- No Description -"}</S.WrapperDescription>
      <S.WrapperOthersInfo><span><GoRepoForked />4</span><span><GoStar />2</span></S.WrapperOthersInfo>          
    </S.Wrapper>
  );
};

export default RepositoryItem;
