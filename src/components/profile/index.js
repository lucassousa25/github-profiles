import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled"

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <section>
      <S.WrapperImage 
        src={githubState.user.avatar_url}
        alt="Avatar User's Profile" 
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>
              Username: <a 
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
              >
                {githubState.user.login}
              </a>
            </h3>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>
              Company: <span>{githubState.user.company ? githubState.user.company : "Não informado"}</span>
            </h3>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>
              Location: <span>{githubState.user.location}</span>
            </h3>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>
              Blog: <a 
              href={githubState.user.blog}
              target="_blank"
              rel="noreferrer"
              >
                {githubState.user.blog ? githubState.user.blog : "Não informado"}
              </a>
            </h3>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
      </section>
    </S.Wrapper>
  );
}

export default Profile;