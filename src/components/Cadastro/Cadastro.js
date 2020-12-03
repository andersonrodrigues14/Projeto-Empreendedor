/* eslint-disable prettier/prettier */
//import
import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
//Import Styles
import {style} from './StyleCadastro';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {createUser} from '../../store/actions/userActions';
import DatePicker from 'react-native-datepicker';
import {Actions} from 'react-native-router-flux';

const initialState = {
  imagem: null,
  nome: '',
  cpf: '',
  sus: '',
  email: '',
  dtnascimento: '',
  senha: '',
  sangue: '',
  obs: '',
  adm: false,
};
//Criar o component
class Cadastro extends Component {
  state = {
    ...initialState,
  };

  save = () => {
    if (!this.state.imagem) {
      Alert.alert('Campo não preenchido !', 'Campo Imagem é obrigatório!');
    } else if (!this.state.nome.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo Nome é obrigatório!');
    } else if (!this.state.cpf.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo CPF é obrigatório!');
    } else if (!this.state.sus.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo SUS é obrigatório!');
    } else if (!this.state.email.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo Email é obrigatório!');
    } else if (!this.state.dtnascimento.trim()) {
      Alert.alert(
        'Campo não preenchido !',
        'Campo Data Nascimento é obrigatório!',
      );
    } else if (!this.state.senha.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo Senha é obrigatório!');
    } else {
      var count = this.state.senha.length;
      var countcpf = this.state.cpf.length;
      var countsus = this.state.sus.length;
      var partesData = this.state.dtnascimento.split('/');
      var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);

      if (data >= new Date()) {
        Alert.alert(
          'Campo preenchido incorretamente !',
          'Data Nascimento maior que data atual!',
        );
      } else if (countcpf < 20) {
        Alert.alert(
          'Campo preenchido incorretamente !',
          'Campo CPF preenchido incoretamente!',
        );
      } else if (countsus < 18) {
        Alert.alert(
          'Campo preenchido incorretamente !',
          'Campo SUS preenchido incoretamente!!',
        );
      } else if (count < 6) {
        Alert.alert(
          'Campo preenchido incorretamente !',
          'Senha deve ter no mínimo 6 caracteres!',
        );
      } else {
        this.props.onCreateUser({
          imagem: this.state.imagem,
          nome: this.state.nome,
          cpf: this.state.cpf,
          sus: this.state.sus,
          email: this.state.email,
          dtnascimento: this.state.dtnascimento,
          senha: this.state.senha,
          sangue: this.state.sangue,
          obs: this.state.obs,
          adm: false,
        });
        this.setState({
          imagem: null,
          nome: null,
          cpf: null,
          sus: null,
          email: null,
          dtnascimento: 'null',
          sangue: null,
          obs: null,
        });
        Actions.login();
      }
    }
  };

  changeDate = (valor) => {
    this.setState({
      dtnascimento: valor,
      adm: false,
    });
  };

  pickImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Escolha a imagem',
        maxHeight: 600,
        maxWidth: 800,
      },
      (res) => {
        if (!res.didCancel) {
          this.setState({imagem: {uri: res.uri, base64: res.data}});
        }
      },
    );
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
                source={require('../../assets/teste.png')}
                style={{width: 100, height: 95}}
              />
              <Text style={style.textTitulo}>
                Carteira Digital de Vacinação
              </Text>
            </View>
            <View style={style.InfoUser}>
              <View style={style.editContainer}>
                <Text style={style.textTitulo}>Cadastro</Text>
              </View>
              <View style={style.containerImagem}>
                <Image source={this.state.imagem} style={style.imagem} />
              </View>
              <TextInput
                style={style.input}
                placeholder="Nome"
                value={this.state.nome}
                onChangeText={(nome) => this.setState({nome})}
              />
              <TextInputMask
                style={style.input}
                keyboardType="numeric"
                mask={'[000] . [000] . [000] - [00]'}
                placeholder="CPF"
                onChangeText={(cpf) => this.setState({cpf})}
                value={this.state.cpf}
              />
              <TextInputMask
                style={style.input}
                keyboardType="numeric"
                mask={'[00000000000] [0000] [0]'}
                placeholder="N° SUS"
                onChangeText={(sus) => this.setState({sus})}
                value={this.state.sus}
              />
              <TextInputMask
                style={style.input}
                keyboardType="email-address"
                placeholder="EMAIL"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
              <View style={style.linha}>
                <Text style={style.texto}>Dt Nasc.</Text>
                <DatePicker
                  format="DD/MM/YYYY"
                  style={style.dateComponente}
                  date={this.state.dtnascimento}
                  onDateChange={this.changeDate}
                />
              </View>
              <TextInput
                style={style.input}
                placeholder="Sangue"
                onChangeText={(sangue) => this.setState({sangue})}
                value={this.state.sangue}
              />
              <TextInput
                style={style.input}
                placeholder="OBS"
                onChangeText={(obs) => this.setState({obs})}
                value={this.state.obs}
              />
              <TextInput
                style={style.input}
                placeholder="Senha"
                value={this.state.senha}
                onChangeText={(senha) => this.setState({senha})}
              />
              <TouchableOpacity
                style={style.btnInsert}
                onPress={() => {
                  this.save();
                }}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Cadastro);
