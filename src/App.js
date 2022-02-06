import React from 'react';
import Layout from './components/layout';

const App = () => {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/32560743?v=4" alt="Avatar User's Profile" />
          <h1>Lucas S. Oliveira</h1>
          <h3>Username: </h3><span>Lucas S</span>
          <div>
            <div>
              <h4>Followers:</h4>
              <span>59</span>
            </div>
            <div>
              <h4>Starreds:</h4>
              <span>12</span>
            </div>
            <div>
              <h4>Followings:</h4>
              <span>102</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>
    </main>
  );
}

export default App;
