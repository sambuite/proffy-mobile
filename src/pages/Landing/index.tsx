import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';

import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  ImageBanner,
  Title,
  TitleBold,
  ButtonsContainer,
  TouchableButton,
  ButtonText,
  TotalConnections,
} from './styles';

const Landing = () => {
  const { navigate } = useNavigation();

  const handleNavigateToGiveClassesPage = () => {
    navigate('GiveClasses');
  };

  const handleNavigateToStudyPages = () => {
    navigate('Study');
  };
  return (
    <Container>
      <ImageBanner source={landingImg} resizeMode="contain" />

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <TouchableButton onPress={handleNavigateToStudyPages} color="primary">
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </TouchableButton>

        <TouchableButton
          onPress={handleNavigateToGiveClassesPage}
          color="secondary"
        >
          <Image source={giveClassIcon} />
          <ButtonText>Ensinar</ButtonText>
        </TouchableButton>
      </ButtonsContainer>

      <TotalConnections>
        Total de 285 conexões já realizadas {/* prettier-ignore */}{' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
