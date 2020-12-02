/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Modal,Platform,FlatList, View, StyleSheet, TouchableWithoutFeedback,Text,TouchableOpacity,TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {addMinhasVacinas} from '../../store/actions/minhasVacinas';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas
import {fetchMinhasVacinas} from '../../store/actions/minhasVacinas';
import AddMinhasVacinas from './AddMinhasVacinas';
import MinhasVacina from '../MinhasVacinas/MinhasVacinas';

class ModalVacinas extends Component {
  state = {
    showAddMinhasVacinas: false,
  }
  componentDidMount = () => {
    this.props.onFetchMinhasVacinas();
  }

  render(){
    const teste = this.props.minhasVacinas !== null ?
    <FlatList  data={this.props.minhasVacinas.filter(x => x.userId === this.props.userId)}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <MinhasVacina key={item.id} {...item} minhasVacinasEdt={item} minhasVacinasId={item.id} onCancel={()=> this.setState({showAddMinhasVacinas: false})}/>} esconde = {() => this.props.onCancel} />
                :
    <Text>Nenhum Registro Cadastrado</Text>;

    return (
      <Modal transparent={true} visible={this.props.isVisible}
      onRequestClose= {this.props.onCancel}
      animationType= {'slide'}>
       <KeyboardAvoidingView style={styles.background}>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.backgtoundFundo} />
        </TouchableWithoutFeedback>
          <View style={styles.container}>
          <AddMinhasVacinas isVisible={this.state.showAddMinhasVacinas} userId={this.props.userId} onCancel={()=> this.setState({showAddMinhasVacinas: false})}/>
            <Text style={styles.header}>Vacinas Usuário</Text>
            <ScrollView style={styles.scroll}>
           {teste}

           </ScrollView>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.delete} onPress={this.props.onCancel}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.insert}onPress={() => this.setState({showAddMinhasVacinas: true})}>
                <Text style={styles.button}>Adicionar</Text>
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
    width:'100%',
  },
  container: {
    backgroundColor: '#FFF',
    flex:3,
  },
  containerImagem:{
    marginTop:15,
    width:'40%',
    height: Dimensions.get('window').width  / 3,
    backgroundColor: '#eee',
    marginLeft: '30%',
  },
  imagem:{
    width: '100%',
    height: Dimensions.get('window').width  / 3,
    alignItems:'center',
    justifyContent:'center',
    resizeMode: 'center',
  },
  header: {
    backgroundColor: '#35AAFF',
    textAlign: 'center',
    color: '#fff',
    padding: 15,
    fontSize:18,
  },
  input:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor:'#35AAFF',
    height: 40,
    margin: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,

  },
  buttons: {
    marginTop: 5,
    flexDirection:'row',
    justifyContent:'center',
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    color:'#FFF',
    fontSize:17,
  },
  insert:{
    backgroundColor: '#35AAFF',
    width: '30%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom:10,
    flexDirection: 'row',
  },
  delete:{
      backgroundColor: 'red',
      width: '30%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      flexDirection: 'row',
      marginHorizontal:10,
  },
  dateComponente:{
    width:230,
    margin: 15,
  },
  dateComponenteMaior:{
    width:220,
    margin: 15,
  },
  texto:{
    marginLeft:15,
    fontSize:15,
  },
  linha:{
    flexDirection: 'row',
    alignItems: 'center',
  },

});

const mapStateToProps = ({user,minhasVacinas}) => {
  return {
    email: user.email,
    nome : user.nome,
    minhasVacinas: minhasVacinas.minhasVacinas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddMinhasVacinas: minhasVacinas => dispatch(addMinhasVacinas(minhasVacinas)),
    onFetchMinhasVacinas: () => dispatch(fetchMinhasVacinas()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ModalVacinas);
