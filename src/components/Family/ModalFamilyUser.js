/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Modal,
  Platform,
  FlatList,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {fetchFamilia} from '../../store/actions/family';
import AddFamily from './AddFamily';
import Family from './Family';

class ModalFamilia extends Component {
  state = {
    showAddFamilia: false,
  };
  componentDidMount = () => {
    this.props.onFetchFamilia();
  };

  render() {
    const teste =
      this.props.familia !== null ? (
        <FlatList
          data={this.props.familia.filter(
            (x) => x.userId === this.props.userId,
          )}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => (
            <Family
              key={item.id}
              {...item}
              familiaEdt={item}
              familiaId={item.id}
              onCancel2={() => this.props.onCancel()}
            />
          )}
        />
      ) : (
        <Text>Nenhum Registro Cadastrado</Text>
      );

    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={() => this.props.onCancel()}
        animationType={'slide'}>
        <KeyboardAvoidingView style={styles.background}>
          <TouchableWithoutFeedback onPress={() => this.props.onCancel()}>
            <View style={styles.backgtoundFundo} />
          </TouchableWithoutFeedback>
          <View style={styles.container}>
            <AddFamily
              isVisible={this.state.showAddFamilia}
              userId={this.props.userId}
              onCancel={() => this.setState({showAddFamilia: false})}
            />
            <Text style={styles.header}>Familiares Usuário</Text>
            <ScrollView style={styles.scroll}>{teste}</ScrollView>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => this.props.onCancel()}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.insert}
                onPress={() => this.setState({showAddFamilia: true})}>
                <Text style={styles.button}>Adicionar</Text>
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
    flex: 0.4,
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
    flex: 3,
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

const mapStateToProps = ({user, familia}) => {
  return {
    email: user.email,
    nome: user.nome,
    familia: familia.familia,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFamilia: () => dispatch(fetchFamilia()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalFamilia);
