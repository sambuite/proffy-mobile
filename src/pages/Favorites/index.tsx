import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Container, StyledScrollView } from './styles';

const Favorites = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      <StyledScrollView
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: 14,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </StyledScrollView>
    </Container>
  );
};

export default Favorites;
