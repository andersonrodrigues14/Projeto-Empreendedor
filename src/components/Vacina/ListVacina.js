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

import Vacina from './Vacina';
import {style} from './StyleListVacina';
import Menu from '../Main/Main';
import AddVacina from './AddVacina';

export default class ListVacina extends Component {
  state = {
    showAddVacina: false,
    campanhas: [{
      id: Math.random(),
      imagem: require('../../assets/teste.png'),
      nome : 'Primeira Vacina',
      texto: 'Texto primeira Camapanha',
      tempoDuracao: '2 anos',
    },{
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Segunda Vacina',
      texto: 'Segunda primeira Camapanha',
      tempoDuracao: '2 anos',
    },
    {
      id:Math.random(),
        imagem: require('../../assets/ListCampanha.png'),
        nome : 'Terceira Vacina',
        texto: 'Terceira primeira Camapanha',
        tempoDuracao: '2 anos',
      },
  ],
  }

  render(){
    return (
      <KeyboardAvoidingView style={style.background}>
        <AddVacina isVisible={this.state.showAddVacina} onCancel={()=> this.setState({showAddVacina: false})}/>
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
      <View style={style.containerLogo}>
        <Image
          source={require('../../assets/listVacina.png')}
          style={{width: 100, height: 95}}
        />
        <Text style={style.textTitulo}>Lista de Vacinas</Text>
        </View>

        <View style={style.containerInfo}>
            <TouchableOpacity style={style.btnInsert} onPress={() => this.setState({showAddVacina: true})}>
              <Text style={style.textInsert}>Adicionar Vacina</Text>
            </TouchableOpacity>
          </View>

      <View style={style.container}>
      <FlatList  data={this.state.campanhas}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Vacina key={item.id} {...item} />} />
      </View>
      <View>
        <Menu/>
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
