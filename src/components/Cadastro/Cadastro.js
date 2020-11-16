/* eslint-disable prettier/prettier */
//import
import React, {Component} from 'react';
import {View, KeyboardAvoidingView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity,Text} from 'react-native';

//Import Styles
import {style} from './StyleCadastro';

//Criar o component
export default class Cadastro extends Component {
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
        <Text style={style.textTitulo}>Cadastro</Text>
        </View>

        <TextInput style={style.input} placeholder="Nome">
          {this.props.nome}
        </TextInput>
        <TextInput style={style.input} placeholder="CPF">
          {this.props.cpf}
        </TextInput>
        <TextInput style={style.input} placeholder="N SUS">
          {this.props.sus}
        </TextInput>
        <TextInput style={style.input} placeholder="Email">
          {this.props.email}
        </TextInput>
        <View style={style.editContainer2}>
          <TextInput style={style.input} placeholder="Dt Nasc.">
            {this.props.dtNascimento}
          </TextInput>
          <Text>    </Text>
          <TextInput style={style.input} placeholder="Sangue">
            {this.props.sangue}
          </TextInput>
        </View>
        <TextInput style={style.input} placeholder="Senha">
          {this.props.senha}
        </TextInput>
        <TextInput style={style.input} placeholder="Confirmar Senha">
          {this.props.confSenha}
        </TextInput>
        <TouchableOpacity style={style.btnInsert} onPress={() => this.setState({showAddVacina: true})}>
            <Text style={style.textInsert}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
