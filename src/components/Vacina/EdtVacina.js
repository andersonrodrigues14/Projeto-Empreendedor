/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Modal,
  Alert,
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
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {edtVacina} from '../../store/actions/vacina';

class EdtVacina extends Component {
  state = {
    imagem: {uri: this.props.vacinaEdt.imagem},
    nome: this.props.vacinaEdt.nome,
    texto: this.props.vacinaEdt.texto,
    tempoDuracao: this.props.vacinaEdt.tempoDuracao,
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
    } else if (!this.state.texto.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo Informação é obrigatório!');
    } else if (!this.state.tempoDuracao.trim()) {
      Alert.alert(
        'Campo não preenchido !',
        'Campo Tempo Duração é obrigatório!',
      );
    } else {
      this.props.onEdtVacina({
        id: this.props.vacinaEdt.id,
        imagem: this.state.imagem,
        nome: this.state.nome,
        texto: this.state.texto,
        tempoDuracao: this.state.tempoDuracao,
      });

      this.setState({
        imagem: null,
        nome: null,
        texto: null,
        tempoDuracao: null,
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
          <TouchableWithoutFeedback onPress={() => this.props.onCancel()}>
            <View style={styles.backgtoundFundo} />
          </TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={styles.header}>Editar Vacina</Text>
            <ScrollView style={styles.scroll}>
              <View style={styles.containerImagem}>
                <Image source={this.state.imagem} style={styles.imagem} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nome da Vacina"
                onChangeText={(nome) => this.setState({nome})}
                value={this.state.nome}
              />
              <TextInput
                style={styles.input}
                placeholder="Informação sobre a Vacina"
                onChangeText={(texto) => this.setState({texto})}
                value={this.state.texto}
              />
              <TextInput
                style={styles.input}
                placeholder="Tempo de Duração"
                onChangeText={(tempoDuracao) => this.setState({tempoDuracao})}
                value={this.state.tempoDuracao}
              />
            </ScrollView>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.insert} onPress={this.pickImage}>
                <Text style={styles.button}>Escolha a foto</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => this.props.onCancel()}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.insert}
                onPress={() => this.save()}>
                <Text style={styles.button}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={() => this.props.onCancel()}>
            <View style={styles.backgtoundFundo} />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backgtoundFundo: {
    flex: 0.31,
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
    flex: 1.7,
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    onEdtVacina: (vacina) => dispatch(edtVacina(vacina)),
  };
};

export default connect(null, mapDispatchToProps)(EdtVacina);
