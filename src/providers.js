import React from 'react';
import { ResetCSS } from './global/resetCSS';

import GithubProvider from './components/providers/github-provider';
import App from './App';

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
