/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Modal,
  Platform,
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  Alert,
} from 'react-native';
//import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {createUser} from '../../store/actions/userActions';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas
import DatePicker from 'react-native-datepicker';
import TextInputMask from 'react-native-text-input-mask';

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

class AddProfile extends Component {
  state = {
    ...initialState,
  };

  changeDate = (valor) => {
    this.setState({
      dtnascimento: valor,
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
          sangue: this.state.sangue,
          senha: this.state.senha,
          obs: this.state.obs,
          adm: false,
        });

        this.setState({
          imagem: null,
          nome: null,
          cpf: null,
          sus: null,
          email: null,
          dtnascimento: null,
          sangue: null,
          obs: null,
        });
        this.props.onCancel();
        Actions.home();
      }
    }
  };

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType={'slide'}>
        <KeyboardAvoidingView style={styles.background}>
          <TouchableWithoutFeedback onPress={this.props.onCancel}>
            <View style={styles.backgtoundFundo} />
          </TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={styles.header}>Novo Usuário</Text>
            <ScrollView style={styles.scroll}>
              <View style={styles.containerImagem}>
                <Image source={this.state.imagem} style={styles.imagem} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={(nome) => this.setState({nome})}
                value={this.state.nome}
              />
              <TextInputMask
                style={styles.input}
                keyboardType="numeric"
                mask={'[000] . [000] . [000] - [00]'}
                placeholder="CPF"
                onChangeText={(cpf) => this.setState({cpf})}
                value={this.state.cpf}
              />
              <TextInputMask
                style={styles.input}
                keyboardType="numeric"
                mask={'[00000000000] [0000] [0]'}
                placeholder="N° SUS"
                onChangeText={(sus) => this.setState({sus})}
                value={this.state.sus}
              />
              <TextInputMask
                style={styles.input}
                keyboardType="email-address"
                placeholder="EMAIL"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
              <View style={styles.linha}>
                <Text style={styles.texto}>Dt Nasc.</Text>
                <DatePicker
                  format="DD/MM/YYYY"
                  style={styles.dateComponente}
                  date={this.state.dtnascimento}
                  onDateChange={this.changeDate}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Sangue"
                onChangeText={(sangue) => this.setState({sangue})}
                value={this.state.sangue}
              />
              <TextInput
                style={styles.input}
                placeholder="OBS"
                onChangeText={(obs) => this.setState({obs})}
                value={this.state.obs}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={this.state.senha}
                onChangeText={(senha) => this.setState({senha})}
              />
            </ScrollView>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.insert} onPress={this.pickImage}>
                <Text style={styles.button}>Escolha a foto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delete}
                onPress={this.props.onCancel}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.insert}
                onPress={() => {
                  this.save();
                }}>
                <Text style={styles.button}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={this.props.onCancel}>
            <View style={styles.backgtoundFundo} />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backgtoundFundo: {
    flex: 0.1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  background: {
    //KeyboardAvoidingView
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerImagem: {
    marginTop: 15,
    width: '40%',
    height: Dimensions.get('window').width / 3,
    backgroundColor: '#eee',
    marginLeft: '30%',
  },
  imagem: {
    width: '100%',
    height: Dimensions.get('window').width / 3,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
  },
  header: {
    backgroundColor: '#35AAFF',
    textAlign: 'center',
    color: '#fff',
    padding: 15,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#35AAFF',
    height: 40,
    margin: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontSize: 17,
  },
  insert: {
    backgroundColor: '#35AAFF',
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 10,
    flexDirection: 'row',
  },
  delete: {
    backgroundColor: 'red',
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  dateComponente: {
    width: 230,
    margin: 15,
  },
  dateComponenteMaior: {
    width: 220,
    margin: 15,
  },
  texto: {
    marginLeft: 15,
    fontSize: 15,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

//const mapStateToProps = ({user}) => {
//  return {
//    email: user.email,
//    nome : user.nome,
//  };
//};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateUser: (user) => dispatch(createUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AddProfile);
