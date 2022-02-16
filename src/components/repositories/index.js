import React, { useState, useEffect } from "react";
import useGithub from "../../hooks/github-hooks";

import Carousel from "react-elastic-carousel";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  const breakpoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ]

  useEffect(() => {
    if(!!githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(!!githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);
  

  return (
    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              <Carousel breakPoints={breakpoints} showEmptySlots>
                {githubState.repositories.map((item) => (
                  <RepositoryItem 
                    key={item.id} 
                    name={item.name} 
                    linkToRepo={item.html_url} 
                    description={item.description} 
                    stargazers_count={item.stargazers_count}
                    forks_count={item.forks_count} 
                  />
                ))}
              </Carousel>
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
            <Carousel breakPoints={breakpoints} showEmptySlots>
                {githubState.starred.map((item) => (
                  <RepositoryItem 
                    key={item.id} 
                    name={item.name} 
                    linkToRepo={item.html_url} 
                    description={item.description} 
                    stargazers_count={item.stargazers_count}
                    forks_count={item.forks_count} 
                  />
                ))}
            </Carousel>
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
}

export default Repositories;
