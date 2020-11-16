/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Modal,Platform,Image, View, StyleSheet, TouchableWithoutFeedback,Text,TouchableOpacity,TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addCampanha} from '../../store/actions/campanha';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas

const initialState = {imagem:null,nome:'',texto:'',dtInicio:null,dtCadastro:''};

class AddCampanha extends Component {

  state = {
    ...initialState,
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

  save = () => {
    this.props.onAddCampanha({
      id: Math.random(),
      imagem: this.state.imagem,
      nome : this.state.nome,
      texto: this.state.texto,
      dtInicio: this.state.dtInicio,
      dtCadastro: this.state.dtCadastro,
    });

    this.setState({imagem: null, nome: null, texto: null, dtInicio:null, dtCadastro: ''});
    Actions.listaCampanha();
  };

  render(){
    return (
      <Modal transparent={true} visible={this.props.isVisible}
      onRequestClose= {this.props.onCancel}
      animationType= {'slide'}>
      <KeyboardAvoidingView style={styles.background}>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.backgtoundFundo} />
        </TouchableWithoutFeedback>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Text style={styles.header}>Nova Data</Text>
            <View style={styles.containerImagem}>
                <Image source={this.state.imagem} style={styles.imagem}/>
            </View>
            <TextInput style={styles.input}
              placeholder="Nome da Vacina"
              onChangeText={nome => this.setState({nome})}
              value={this.state.nome}/>
            <TextInput style={styles.input}
              placeholder="Informação sobre a Vacina"
              onChangeText={texto => this.setState({texto})}
              value={this.state.texto}/>
            <TextInput style={styles.input}
              placeholder="Data de Inicio"
              onChangeText={dtInicio => this.setState({dtInicio})}
              value={this.state.dtInicio}/>
              <TextInput style={styles.input}
              placeholder="Data de Cadastro"
              onChangeText={dtCadastro => this.setState({dtCadastro})}
              value={this.state.dtCadastro}/>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.insert} onPress={this.pickImage}>
                  <Text style={styles.button}>Escolha a foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delete} onPress={this.props.onCancel}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.insert}onPress={this.save}>
                <Text style={styles.button}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
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
    width:'100%',
  },
  container: {
    backgroundColor: '#FFF',
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

});

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    nome : user.nome,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCampanha: campanha => dispatch(addCampanha(campanha)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddCampanha);
