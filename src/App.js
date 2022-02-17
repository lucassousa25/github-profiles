import React from 'react';

import Layout from './components/layout';
import NoSearch from './components/no-search';
import Profile from './components/profile';
import Repositories from './components/repositories';
import Loading from './components/loading';

import useGithub from './hooks/github-hooks';

const App = () => {
  const { githubState } = useGithub();

  return (
    <>
      {githubState.hasUser ? (
        <Layout>
          <>
            {githubState.loading ? (
              <Loading />
            ) : (
              <>
                <Profile />
                <Repositories />
              </>
            )}
            </>
          </Layout>
        ) : (
          <NoSearch />
        )}
    </>
  );
}

export default App;
