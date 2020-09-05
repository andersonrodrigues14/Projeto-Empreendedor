/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Campanha from './CampanhaVacinacao';
import {style} from './StyleListCampanha';


export default class ListCamapanha extends Component {
  state = {
    campanhas: [{
      id: Math.random(),
      imagem: require('../../assets/dados.png'),
      nome : 'Primeira Campanha',
      texto: 'Texto primeira Camapanha',
      dtInicio: '10/10/2020',
      dtCadastro: '10/10/2222',
    },{
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Segunda Campanha',
      texto: 'Segunda primeira Camapanha',
      dtInicio: '10/10/2020',
      dtCadastro: '10/10/2222',
    },
    {
      id:Math.random(),
        imagem: require('../../assets/ListCampanha.png'),
        nome : 'teste',
        texto: 'Terceira primeira Camapanha',
        dtInicio: '10/10/2020',
        dtCadastro: '10/10/2222',
      },
  ],
  }

  render(){
    return (
      <KeyboardAvoidingView style={style.background}>
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
      <View style={style.containerLogo}>
        <Image
          source={require('../../assets/ListCampanha.png')}
          style={{width: 100, height: 95}}
        />
        <Text style={style.textTitulo}>Campanha de Vacinação</Text>
        </View>

        <View style={style.containerInfo}>
            <TouchableOpacity
              style={style.btnRegister}
             >
               <Icon
                name="globe"
                size={40}
                color="#fff"
              />
              <View style={style.containerInfoRow}>
              <Text style={style.textRegister}>Fique por dentro das</Text>
                <Text style={style.textRegister}>campanhas que estão</Text>
                <Text style={style.textRegister}>acontecendo!</Text>
              </View>
            </TouchableOpacity>
          </View>

      <View style={style.container}>
      <FlatList  data={this.state.campanhas}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Campanha key={item.id} {...item} />} />
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
