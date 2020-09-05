/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas

import Profile from './Profile';
import {style} from './StyleListProfile';
import {ScrollView} from 'react-native-gesture-handler';

export default class ListProfile extends Component {
  state = {
    profiles: [
      {
        id: Math.random(),
        imagem: require('../../assets/pink.png'),
        nome: 'pink',
        cpf: '02676215078',
        sus: '102030',
        email: 'pink_feia@hotmail.com',
        dtnascimento: '14/11/1940',
        sangue: 'O-',
        obs: 'alienigena',
      },
      {
        id: Math.random(),
        imagem: require('../../assets/moto.jpg'),
        nome: 'Anderson',
        cpf: '02676215078',
        sus: '1512326487',
        email: 'anderson.rodrigues@hotmail.com',
        dtnascimento: '14/11/1998',
        sangue: 'O-',
        obs: 'astro',
      },
      {
        id: Math.random(),
        imagem: require('../../assets/keyte.jpg'),
        nome: 'Kayte',
        cpf: '0264658948',
        sus: '265854984',
        email: 'keyte_linda@hotmail.com',
        dtnascimento: '14/11/2019',
        sangue: 'O-',
        obs: 'gata',
      },
    ],
  };

  render() {
    return (
      <KeyboardAvoidingView style={style.background}>
        <ImageBackground
          source={require('../../assets/fundo.png')}
          style={style.image}>
          <ScrollView style={style.scroll}>
            <View style={style.containerLogo}>
              <Image
                source={require('../../assets/dados.png')}
                style={{width: 100, height: 95}}
              />
              <Text style={style.textTitulo}>Dados</Text>
            </View>

            <View style={style.containerAdministrador}>
              <View style={style.searchContainer}>
                <TextInput style={style.input} placeholder="CPF" />
                <Icon
                  style={style.searchIcon}
                  name="sistrix"
                  size={30}
                  color="#35AAFF"
                />
              </View>

              <TouchableOpacity
                style={style.btnRegister}
                onPress={() => Actions.createUser()}>
                <Text style={style.textRegister}>Adicionar Usuário</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={style.container}>
            <FlatList
              data={this.state.profiles}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({item}) => <Profile key={item.id} {...item} />}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
