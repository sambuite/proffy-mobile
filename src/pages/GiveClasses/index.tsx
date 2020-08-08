import React from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import {
  Container,
  ImageBgContent,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const GiveClasses = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = () => {
    goBack();
  };

  return (
    <Container>
      <ImageBgContent resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </ImageBgContent>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo Bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default GiveClasses;
