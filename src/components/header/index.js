import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";

import * as S from "./styled";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return; 
    return getUser(usernameForSearch);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      submitGetUser();
    }
  }

  return (
    <header>
      <S.Wrapper>
        <input 
          type="text" 
          placeholder="Search Github User..." 
          onChange={(e) => setusernameForSearch(e.target.value)}
          onKeyDown={handleKeyDown}  
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
