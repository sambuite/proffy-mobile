import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonColorProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const ImageBanner = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: Poppins_400Regular;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const TouchableButton = styled(RectButton)<ButtonColorProps>`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;

  background-color: ${({ color }) =>
    color === 'primary'
      ? '#9871f5'
      : color === 'secondary'
      ? '#04d361'
      : '#333'};
`;

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
