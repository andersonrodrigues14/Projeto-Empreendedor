/* eslint-disable prettier/prettier */
//import
import React, {Component} from 'react';
import {View, KeyboardAvoidingView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity,Text} from 'react-native';

//Import Styles
import {style} from './StyleSenha';

//Criar o component
export default class Senha extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={style.background}>
      <ImageBackground
          source={require('../../assets/fundo.png')}
          style={style.image}>
      <ScrollView style={style.scroll}>
      <View style={style.containerLogo}>
        <Image source={require('../../assets/teste.png') } style={{width:100,height:95}}/>
        <Text style={style.textTitulo}>Carteira Digital de Vacinação</Text>
      </View>
      <View style={style.InfoUser}>
        <View style={style.editContainer}>
          <Image source={require('../../assets/perfil.png')} style={style.imageUser} />
        </View>

        <TextInput style={style.input} placeholder="EMAIL" editable={false}>
          {this.props.nome}
        </TextInput>
        <TextInput style={style.input} placeholder="codigo" editable={false}>
          {this.props.cpf}
        </TextInput>
        <TextInput style={style.input} placeholder="Nova Senha" editable={false}>
          {this.props.sus}
        </TextInput>
        <TextInput style={style.input} placeholder="Confirmar Nova Senha" editable={false}>
          {this.props.email}
        </TextInput>
        <TouchableOpacity style={style.btnInsert} onPress={() => this.setState({showAddVacina: true})}>
            <Text style={style.textInsert}>Salvar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
