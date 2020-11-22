/* eslint-disable prettier/prettier */
//import
import React, {Component} from 'react';
import {View, KeyboardAvoidingView, ScrollView, ImageBackground, Image, TextInput, TouchableOpacity,Text} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
//Import Styles
import {style} from './StyleCadastro';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {createUser} from '../../store/actions/userActions';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
const initialState = {imagem:null, nome:null, cpf:null, sus:null, email:null
  ,dtnascimento:'',senha:null,sangue:null,obs:null,adm:false};
//Criar o component
class Cadastro extends Component {
  state = {
    ...initialState,
  }

  save = () => {
    this.setState({imagem: null, nome: null, cpf: null, sus:null, email: null,dtnascimento:'null',sangue:null,obs:null});
    Actions.login();
  }

  changeDate = (valor) => {
    this.setState({
      dtnascimento: valor,
      adm:false,
    });
  }

  pickImage = () => {
    ImagePicker.showImagePicker({
      title: 'Escolha a imagem',
      maxHeight:600,
      maxWidth:800,
    }, res => {
      if (!res.didCancel){
        this.setState({imagem: {uri: res.uri, base64: res.data}});
      }
    });
  }
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
        <View style={style.containerImagem}>
          <Image source={this.state.imagem} style={style.imagem}/>
        </View>
        <TextInput style={style.input} placeholder="Nome"
        value={this.state.nome}
        onChangeText={nome => this.setState({nome})}
        />
        <TextInputMask style={style.input}
              keyboardType="numeric"
              mask={'[000] . [000] . [000] - [00]'}
              placeholder="CPF"
              onChangeText={cpf => this.setState({cpf})}
              value={this.state.cpf}/>
        <TextInputMask style={style.input}
              keyboardType="numeric"
              mask={'[00000000000] [0000] [0]'}
              placeholder="N° SUS"
              onChangeText={sus => this.setState({sus})}
              value={this.state.sus}/>
         <TextInputMask style={style.input}
              keyboardType="email-address"
              placeholder="EMAIL"
              onChangeText={email => this.setState({email})}
              value={this.state.email}/>
         <View style={style.linha}>
            <Text style= {style.texto}>Dt Nasc.</Text>
            <DatePicker
                format = "DD/MM/YYYY"
                style = {style.dateComponente}
                date = {this.state.dtnascimento}
                onDateChange = {this.changeDate}
              />
          </View>
          <TextInput style={style.input}
              placeholder="Sangue"
              onChangeText={sangue => this.setState({sangue})}
              value={this.state.sangue}/>
              <TextInput style={style.input}
              placeholder="OBS"
              onChangeText={obs => this.setState({obs})}
              value={this.state.obs}/>
        <TextInput style={style.input} placeholder="Senha"
        value={this.state.senha}
        onChangeText={senha => this.setState({senha})}/>
        <TouchableOpacity style={style.btnInsert} onPress={() => {this.props.onCreateUser(this.state); this.save();}}>
            <Text style={style.textInsert}>Cadastrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btnFoto} onPress={this.pickImage}>
            <Text style={style.textInsert}>Escolha a foto</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: user => dispatch(createUser(user)),
  };
};

export default connect(null,mapDispatchToProps)(Cadastro);
