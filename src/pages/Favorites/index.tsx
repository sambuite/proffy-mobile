import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Container, StyledScrollView } from './styles';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const loadFavorite = () => {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  };

  useFocusEffect(() => {
    loadFavorite();
  });

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      <StyledScrollView
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: 14,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </StyledScrollView>
    </Container>
  );
};

export default Favorites;
