import { FiThumbsUp } from "react-icons/fi";
import React from "react";

import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://user-images.githubusercontent.com/70165034/191575045-794e4c8f-07c5-4b87-8cc2-bf3e073320aa.png" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/70165034?v=4" />
          <div>
            <h4>Juan Soares</h4>
            <p>Há 11 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />
            21
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
