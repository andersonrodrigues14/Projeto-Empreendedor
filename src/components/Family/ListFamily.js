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
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Family from './Family';
import Menu from '../Main/Main';
import {style} from './StyleListFamily';


export default class ListFamily extends Component {
  state = {
    family: [{
      id: Math.random(),
      imagem: require('../../assets/teste.png'),
      nomeFamiliar : 'Primeiro Familiar',
      vacina: 'Gripe',
      dtAplicacao: '20/09/1998',
      dtRenovacao: '20/09/1999',
    },{
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nomeFamiliar : 'Segunda Familiar',
      vacina: 'Gripe 2',
      dtAplicacao: '20/09/1998',
      dtRenovacao: '20/09/1999',
    },
    {
      id:Math.random(),
        imagem: require('../../assets/ListCampanha.png'),
        nomeFamiliar : 'Terceira Familiar',
        vacina: 'Gripe 3',
        dtAplicacao: '20/09/1998',
        dtRenovacao: '20/09/1999',
      },
  ],
  }

  render(){
    return (
      <KeyboardAvoidingView style={style.background}>
      <ImageBackground
        source={require('../../assets/fundo.png')}
        style={style.image}>
      <ScrollView style={style.scroll}>
      <View style={style.containerLogo}>
        <Image
          source={require('../../assets/listFamily.png')}
          style={{width: 80, height: 75, resizeMode: 'contain'}}
        />
        <Text style={style.textTitulo}>Família</Text>
      </View>

      <View style={style.containerInfo}>
        <View style={style.searchContainer}>
                <TextInput style={style.input} placeholder="CPF" />
                <Icon
                  style={style.searchIcon}
                  name="sistrix"
                  size={30}
                  color="#35AAFF"
                />
        </View>
        <TouchableOpacity style={style.btnInsert}>
          <Text style={style.textInsert}>Adicionar Familiar</Text>
        </TouchableOpacity>

        <View style={style.InfoUser}>
         <Image source={require('../../assets/perfil.png') } style={{width:75,height:75,resizeMode: 'contain'}}/>
          <Text style={style.textTitulo}>Nome Usuário</Text>
        </View>

        </View>
      </ScrollView>
      <View style={style.container}>
      <FlatList  data={this.state.family}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Family key={item.id} {...item} />} />
      </View>
      <View>
        <Menu/>
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
