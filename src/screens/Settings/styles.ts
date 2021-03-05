import {View} from 'react-native';
import styled from 'styled-components/native'
import Icones from 'react-native-vector-icons/FontAwesome'

let TextColor = {
 title:'#fdfdfd',
 Description:'#9A9A9C',
 backgroundContainer: '#1C1C1E'
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #010101;
  `;

export const Title = styled.Text`
  font-size: 30px;
  margin-top: 20px;
  color:#fdfdfd;
  margin-bottom: 15px;
  padding-left: 15px;
  font-weight: bold;
`;

export const Profile = styled.View`
 width: 100%;
 height: 89px;
 background-color: #1C1C1E;
 align-items: center;
 flex-direction: row;
 justify-content: space-around;

`;

export const ImageProfile = styled.Image`
  width:67px;
  height: 67px;
  border-radius: 33px;
`;

export const TextContainer = styled.View`
  justify-content: space-between;
  margin-top: 11px;
  margin: 10px 0px;
`;

export const Textname = styled.Text`
 color:${TextColor.title};
 font-size: 20px;
 `;

export const TextDescription = styled.Text`
 color: ${TextColor.Description};
 font-size:18px;
 `;

export const ButtonQr = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: #2C2C2C;
`;

export const ContainerStarWeb = styled.View`
  width: 100%;
  height: 89px;
  margin-top: 34px;
  background-color: ${TextColor.backgroundContainer};
  margin-bottom: 34px;
  `;

export const StarMessages = styled.View`

  height: 44px;
  align-items: center;
  flex-direction: row;
`;

export const WhatsAppWeb = styled.View`
  height: 44px;
  align-items: center;
  flex-direction: row;
  `;

export const TextStar = styled.Text`
  color: ${TextColor.title};
  font-size: 16px;
`;

export const TextWhatsWeb = styled.Text`
 color: ${TextColor.title};
 font-size: 16px;
`;

export const IconArrow = styled(Icones)`
  position: absolute;
  right: 20px;

`;


export const Middlecontainer = styled.View`
  height: 177px;
  background-color: ${TextColor.backgroundContainer};
`;

export const ContainerAccount = styled.View`
  height: 43px;
  align-items: center;
  flex-direction: row;
`;
export const TextAccount = styled.Text`
 color: ${TextColor.title};
 font-size: 16px;
`;

export const ContainerChats = styled.View`
 height: 43px;
 align-items: center;
  flex-direction: row;
`;

export const TextChats = styled.Text`
 color: ${TextColor.title};
 font-size: 16px;
`;

export const ContainerNotifications = styled.View`
 height: 43px;
 align-items: center;
  flex-direction: row;
`;

export const TextNotifications = styled.Text`
 color: ${TextColor.title};
 font-size: 16px;
`;

export const ContainerStorage = styled.View`
 height: 43px;
 align-items: center;
  flex-direction: row;
`;

export const TextStorage = styled.Text`
 color: ${TextColor.title};
 font-size: 16px;`;

export const IconMiddle = styled.Image``;
