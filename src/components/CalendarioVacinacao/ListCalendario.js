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

import Calendario from './Calendario';
import {style} from './StyleListCalendario';


export default class ListCalendario extends Component {
  state = {
    campanhas: [{
      id: Math.random(),
      imagem: require('../../assets/teste.png'),
      nome : 'Primeira Data Vacina',
      texto: 'Texto primeira Camapanha',
      dtVacina: '10/05/2020',
    },{
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Segunda Data Vacina',
      texto: 'Segunda primeira Camapanha',
      dtVacina: '10/05/2020',
    },
    {
      id:Math.random(),
        imagem: require('../../assets/ListCampanha.png'),
        nome : 'Terceira Data Vacina',
        texto: 'Terceira primeira Camapanha',
        dtVacina: '10/05/2020',
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
          source={require('../../assets/ListCalendario.png')}
          style={{width: 100, height: 95}}
        />
        <Text style={style.textTitulo}>Calendário de Vacinas</Text>
        </View>

        <View style={style.containerInfo}>
            <TouchableOpacity style={style.btnInsert}>
              <Text style={style.textInsert}>Adicionar Data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.btnFilter}>
              <Text style={style.textFilter}>Mês do Calendário</Text>
              <Icon
                name="angle-down"
                size={20}
                color="#020202"
              />
            </TouchableOpacity>
          </View>

      <View style={style.container}>
      <FlatList  data={this.state.campanhas}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Calendario key={item.id} {...item} />} />
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
