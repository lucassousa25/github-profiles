import React from 'react'

import loading from "../../img/spinner.svg";
import * as S from "./styled";

const Loading = () => {
  return (
    <S.WrapperLoader>
      <img src={loading} alt="Loading" />
    </S.WrapperLoader>
  )
}

export default Loading;