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
import {edtProfile} from '../../store/actions/profile';
import DatePicker from 'react-native-datepicker';
import TextInputMask from 'react-native-text-input-mask';

class EdtProfile extends Component {
  state = {
    imagem: this.props.profileEdt.imagem,
    nome: this.props.profileEdt.nome,
    cpf: this.props.profileEdt.cpf,
    sus: this.props.profileEdt.sus,
    email: this.props.profileEdt.email,
    dtnascimento: this.props.profileEdt.dtnascimento,
    senha: this.props.profileEdt.senha,
    sangue: this.props.profileEdt.sangue,
    obs: this.props.profileEdt.obs,
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
      this.props.onEdtUser({
        id: this.props.profileEdt.id,
        imagem: this.state.imagem,
        nome: this.state.nome,
        cpf: this.state.cpf,
        sus: this.state.sus,
        email: this.state.email,
        dtnascimento: this.state.dtnascimento,
        sangue: this.state.sangue,
        obs: this.state.obs,
        senha: this.state.senha,
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
            <Text style={styles.header}>Editar Usuário</Text>
            <ScrollView style={styles.scroll}>
              <View style={styles.containerImagem}>
                <Image
                  source={{uri: this.state.imagem}}
                  style={styles.imagem}
                />
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
              <TextInput
                style={styles.input}
                editable={false}
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
                editable={false}
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
                onPress={() => this.save()}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onEdtUser: (profile) => dispatch(edtProfile(profile)),
  };
};

export default connect(null, mapDispatchToProps)(EdtProfile);
