import React from "react";
import * as S from "./styled";
import { GoStar, GoRepoForked } from "react-icons/go";

const RepositoryItem = ({ name, linkToRepo, description, stargazers_count, forks_count }) => {
  
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      {/* <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
      </S.WrapperLink> */}
      <S.WrapperDescription>{description ? description.substring(0,180) : "- No Description -"}</S.WrapperDescription>
      <S.WrapperOthersInfo><span><GoRepoForked />{forks_count}</span><span><GoStar />{stargazers_count}</span></S.WrapperOthersInfo>          
    </S.Wrapper>
  );
};

export default RepositoryItem;
