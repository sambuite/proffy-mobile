import React from 'react';
import { Image } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Info,
  Name,
  Subject,
  PImage,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';

const TeacherItem = () => {
  return (
    <Container>
      <Profile>
        <PImage source={{ uri: 'https://github.com/sambuite.png' }} />
        <Info>
          <Name>Murilo Sambuite</Name>
          <Subject>Matamática</Subject>
        </Info>
      </Profile>

      <Bio>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        {'\n'}
        {'\n'}
        Beatae illum, ea ad optio corporis iste, est repellat error earum
        similique mollitia magni, ipsum neque aliquam. Blanditiis a dolores ea
        voluptatem.
      </Bio>

      <Footer>
        <Price>
          Preço/Hora {'   '}
          <PriceValue>R$ 20,00</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton favorite={false}>
            <Image source={!false ? heartOutlineIcon : unfavoriteIcon} />
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
