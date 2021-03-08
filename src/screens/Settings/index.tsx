import React from 'react'
import {   View,useWindowDimensions} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'

import {Container,Title,Profile,ImageProfile,TextContainer,Textname,TextDescription,
ButtonQr,ContainerStarWeb,ContainerIcons,StarMessages,WhatsAppWeb,TextStar,TextWhatsWeb,IconArrow,
Middlecontainer,ContainerAccount,ContainerChats,ContainerNotifications,ContainerStorage,
TextAccount,TextChats,TextNotifications,TextStorage,IconMiddle,ContainerHelpTell,
ContainerHelp,ContainerTell,TextInfo,TextTell,ContainerEnd,TextFrom,TextFacebook} from './styles'

import key from '../../assets/icons/Framekey.png';
import arrowUpDown from '../../assets/icons/Frame.png';
import notification from '../../assets/icons/notification.png';


export default function Settings(){
  return(
    <Container>
      <Title>Settings</Title>

      <Profile>
        <ImageProfile source={require('../../assets/my.jpg')} />
        <TextContainer>
           <Textname>Igor Amantino</Textname>
           <TextDescription>
              Eu nao sou ninguem mais{"\n"}
               ninguem jamais sera eu
           </TextDescription>
        </TextContainer>
         <ButtonQr>
            <Icons name='qrcode' size={20} color="#509AE1" />
        </ButtonQr>
      </Profile>

      <ContainerStarWeb>

      <ContainerIcons style={{justifyContent: 'space-around',width:30,alignItems:'center',marginHorizontal:5}}>

        <View style={{backgroundColor:'#FAC704',borderRadius:5,padding:3,}}>
          <Icons name='star' size={18} color="#fff" />
        </View>

        <View style={{backgroundColor:'#09ACA3',borderRadius:5,padding:3,}}>
          <Icons name='laptop' size={18} color="#fff" />
        </View>
        </ContainerIcons>


      <View style={{flex: 1,justifyContent: 'center',}}>
        <StarMessages>
          <TextStar>Starred Messages</TextStar>
          <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />
        </StarMessages>

        <View style={{borderWidth: 1, borderColor:"#323234",}} />

     <WhatsAppWeb>
       <TextWhatsWeb>Whatssap Web</TextWhatsWeb>
       <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />
     </WhatsAppWeb>
       </View>


      </ContainerStarWeb>

      <Middlecontainer>

        <ContainerIcons>
          <View style={{backgroundColor:'#1A82F8',borderRadius:5,padding:3}}>
            <IconMiddle source={key} style={{width:18,height:18}}/>
           </View>

           <View style={{backgroundColor:'#59D472',borderRadius:5,padding:3}}>
            <Icons name='whatsapp' size={18} color="#fff" />
           </View>

           <View style={{backgroundColor:'#F84949',borderRadius:5,padding:4}}>
             <IconMiddle source={notification} style={{width:17,height:17}}/>
           </View>

           <View style={{backgroundColor:'#45C767',borderRadius:5,padding:3}}>
              <IconMiddle source={arrowUpDown} style={{width:18,height:18}}/>
           </View>

        </ContainerIcons>

           <View style={{flex: 1,justifyContent: 'center'}}>

           <ContainerAccount>
             <TextAccount>Account</TextAccount>
            <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />
            </ContainerAccount>

            <View style={{borderWidth: 1, borderColor:"#323234",}} />

            <ContainerChats>


            <TextChats>Chats</TextChats>
            <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />
            </ContainerChats>

            <View style={{borderWidth: 1, borderColor:"#323234",}} />

            <ContainerNotifications>


              <TextNotifications>Notifications</TextNotifications>
              <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />

            </ContainerNotifications>

            <View style={{borderWidth: 1, borderColor:"#323234",}} />

            <ContainerStorage>



            <TextStorage>Storage and Data</TextStorage>
            <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />
            </ContainerStorage>

        </View>

      </Middlecontainer>

    <ContainerHelpTell>

      <ContainerHelp>
      <View style={{backgroundColor:'#1A82F8',borderRadius:5,paddingVertical:4,marginRight: 14,paddingHorizontal:9}}>
            <Icons name='info' size={17} color="#fff" />
           </View>

       <TextInfo>Help</TextInfo>
      <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />
      </ContainerHelp>

      <View style={{borderWidth: 0.5, borderColor:"#323234",}} />

      <ContainerTell>
      <View style={{backgroundColor:'#FF2D54',borderRadius:5,padding:4,marginRight: 14}}>
            <Icons name='heart' size={16} color="#fff" />
           </View>
        <TextTell>Tell a Friend</TextTell>
      <IconArrow name='chevron-right' size={12} color="#9A9A9C"  />
      </ContainerTell>
      </ContainerHelpTell>

      <ContainerEnd>
         <TextFrom>from</TextFrom>
         <TextFacebook>FACEBOOK</TextFacebook>
      </ContainerEnd>
    </Container>
  )
}
