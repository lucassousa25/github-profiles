import React from 'react';
import { ResetCSS } from './global/resetCSS';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import GithubProvider from './components/providers/github-provider';
import App from './App';

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
        <ToastContainer 
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={2}
        />
      </GithubProvider>
    </main>
  );
};

export default Providers;
