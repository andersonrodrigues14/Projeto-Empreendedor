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
import {addMinhasVacinas} from '../../store/actions/minhasVacinas';
import DatePicker from 'react-native-datepicker';

const initialState = {
  imagem: null,
  nome: '',
  texto: '',
  dtAplicacao: '',
  dtRenovacao: '',
};

class AddMinhasVacinas extends Component {
  state = {
    ...initialState,
  };

  changeDate = (valor) => {
    this.setState({
      dtAplicacao: valor,
    });
  };

  changeDate2 = (valor) => {
    this.setState({
      dtRenovacao: valor,
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
    } else if (!this.state.texto.trim()) {
      Alert.alert('Campo não preenchido !', 'Campo Informação é obrigatório!');
    } else if (!this.state.dtAplicacao.trim()) {
      Alert.alert(
        'Campo não preenchido !',
        'Campo Data Aplicação é obrigatório!',
      );
    } else if (!this.state.dtRenovacao.trim()) {
      Alert.alert(
        'Campo não preenchido !',
        'Campo Data Renovação é obrigatório!',
      );
    } else {
      var partesDataAplicacao = this.state.dtAplicacao.split('/');
      var dataAplicacao = new Date(
        partesDataAplicacao[2],
        partesDataAplicacao[1] - 1,
        partesDataAplicacao[0],
      );
      var partesDataRenovacao = this.state.dtRenovacao.split('/');
      var dataRenovacao = new Date(
        partesDataRenovacao[2],
        partesDataRenovacao[1] - 1,
        partesDataRenovacao[0],
      );

      if (dataAplicacao >= new Date()) {
        Alert.alert(
          'Campo preenchido incorretamente !',
          'Data Aplicação maior que data atual!',
        );
      } else if (dataRenovacao <= new Date()) {
        Alert.alert(
          'Campo preenchido incorretamente !',
          'Data Renovação menor que data atual!',
        );
      } else {
        this.props.onAddMinhasVacinas({
          userId: this.props.userId,
          imagem: this.state.imagem,
          nome: this.state.nome,
          texto: this.state.texto,
          dtAplicacao: this.state.dtAplicacao,
          dtRenovacao: this.state.dtRenovacao,
        });
        this.setState({
          imagem: null,
          nome: null,
          texto: null,
          dtAplicacao: '',
          dtRenovacao: '',
        });
        this.props.onCancel();
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
            <Text style={styles.header}>Nova Vacina</Text>
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
              <View style={styles.linha}>
                <Text style={styles.texto}>Data de Aplicação</Text>
                <DatePicker
                  format="DD/MM/YYYY"
                  style={styles.dateComponente}
                  date={this.state.dtAplicacao}
                  onDateChange={this.changeDate}
                />
              </View>
              <View style={styles.linha}>
                <Text style={styles.texto}>Data de Renovação</Text>
                <DatePicker
                  format="DD/MM/YYYY"
                  style={styles.dateComponenteMaior}
                  date={this.state.dtRenovacao}
                  onDateChange={this.changeDate2}
                />
              </View>
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
              <TouchableOpacity style={styles.insert} onPress={this.save}>
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
    flex: 0.21,
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
    backgroundColor: '#FFF',
    flex: 1,
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
    marginTop: 5,
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

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    nome: user.nome,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMinhasVacinas: (minhasVacinas) =>
      dispatch(addMinhasVacinas(minhasVacinas)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMinhasVacinas);
