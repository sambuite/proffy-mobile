import React, { useState } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setFavorited] = useState(favorited);

  const handleLinkToWhatsapp = () => {
    api.post('connections', {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  };

  const handleToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => teacherItem.id === teacher.id
      );

      favoritesArray.splice(favoriteIndex, 1);

      setFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  };

  return (
    <Container>
      <Profile>
        <PImage source={{ uri: teacher.avatar }} />
        <Info>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </Info>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/Hora {'   '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton onPress={handleToggleFavorite} favorite={isFavorited}>
            <Image source={!isFavorited ? heartOutlineIcon : unfavoriteIcon} />
          </FavoriteButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText onPress={handleLinkToWhatsapp}>
              Entrar em contato
            </ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
