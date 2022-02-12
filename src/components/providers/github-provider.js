import React, { createContext, useCallback, useState } from "react";
import api from "../../services/api";

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: []
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({

    loading: false,
    hasUser: false,
    user: {
      id: undefined,
      login: undefined,
      name: undefined,
      avatar_url: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0
    },
    repositories: [],
    starred: []

  });

  const getUser = (username) => {

    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }));

    api.get(`users/${username}`)
    .then(({ data }) => {
      setGithubState(prevState => ({
        ...prevState,
        hasUser: true,
        user: {
          id: data.id,
          login: data.login,
          name: data.name,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          blog: data.blog,
          company: data.company,
          location: data.location,
          followers: data.followers,
          following: data.following,
          public_gists: data.public_gists,
          public_repos: data.public_repos
        }
      }))
    }).finally(() => {
      setGithubState((prevState) => ({
        ...prevState,
        loading: !prevState.loading
      }));
    });
  }

  const getUserRepos = () => {

    api.get(`users/${ githubState.user.login }/repos`)
    .then(({ data }) => {
      console.log('data: ' + JSON.stringify(data))
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data
      }));
    });
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback(() => getUserRepos(), []),
  }
  
  return (
    <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
  );
};

export default GithubProvider;
