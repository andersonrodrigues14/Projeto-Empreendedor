/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

import InformacaoDoenca from './InformacaoDoenca';
import {style} from './StyleListInformacaoDoenca';
import Menu from '../Main/Main';

export default class ListInformacaoDoenca extends Component {
  state = {
    doenca: [{
      id: Math.random(),
      imagem: require('../../assets/teste.png'),
      titulo : 'Titulo Informação 1',
      texto: 'Texto primeira informação',
      dataPublicacao: '14/11/1998',
    },{
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      titulo : 'Titulo Informação 2',
      texto: 'Texto segunda informação',
      dataPublicacao: '14/11/1998',
    },
    {
      id:Math.random(),
        imagem: require('../../assets/ListCampanha.png'),
        titulo : 'Titulo Informação 3',
        texto: 'Texto terceira informação',
        dataPublicacao: '14/11/1998',
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
          source={require('../../assets/listMinhasVacinas.png')}
          style={{width: 100, height: 95}}
        />
        <Text style={style.textTitulo}>Informações Sobre Doenças</Text>
        </View>

        <View style={style.containerInfo}>
            <TouchableOpacity style={style.btnInsert}>
              <Text style={style.textInsert}>Adicionar Informação</Text>
            </TouchableOpacity>
          </View>

      <View style={style.container}>
      <FlatList  data={this.state.doenca}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <InformacaoDoenca key={item.id} {...item} />} />
      </View>
      <View>
        <Menu/>
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
