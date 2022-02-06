import React from 'react';
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage 
        src="https://avatars.githubusercontent.com/u/32560743?v=4"
        alt="Avatar User's Profile" 
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Lucas S. Oliveira</h1>
          <S.WrapperUsername>
            <h3>
              Username: <a 
              href='https://github.com/lucassousa25'
              target='_blank'
              rel='noreferrer'
              >
                Lucas S
              </a>
            </h3>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>59</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>12</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>102</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;