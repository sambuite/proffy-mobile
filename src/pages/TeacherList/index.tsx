import React, { useState } from 'react';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import {
  Container,
  StyledScrollView,
  SearchForm,
  Label,
  SearchInput,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const TeacherList = () => {
  const [isFiltersVisible, setFiltersVisible] = useState(false);

  const handleToggleFiltersVisible = () => {
    setFiltersVisible(!isFiltersVisible);
  };

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={30} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <SearchInput
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <SearchInput
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <SearchInput
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Pesquisar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>
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

export default TeacherList;
