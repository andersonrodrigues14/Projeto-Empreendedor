/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Modal,
        Platform,
        Image,
        View,
        StyleSheet,
        TouchableWithoutFeedback,
        Text,TouchableOpacity,
        TextInput,
        KeyboardAvoidingView,
        Dimensions,
      } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {edtCampanha} from '../../store/actions/campanha';
import DatePicker from 'react-native-datepicker';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas


var dataAtual = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();

class EdtCampanha extends Component {

  state = {
    imagem:this.props.campanhaEdt.imagem,
    nome:this.props.campanhaEdt.nome,
    texto:this.props.campanhaEdt.texto,
    dtInicio:this.props.campanhaEdt.dtInicio,
    dtCadastro:dataAtual,
  }

  changeDate = (valor) => {
    this.setState({
      dtInicio: valor,
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

  save = () => {
    this.props.onEdtCampanha({
      id: Math.random(),
      imagem: this.state.imagem,
      nome : this.state.nome,
      texto: this.state.texto,
      dtInicio: this.state.dtInicio,
      dtCadastro: this.state.dtCadastro,
    });

    this.setState({imagem: null, nome: null, texto: null, dtInicio:'', dtCadastro: ''});
    this.props.onCancel();
    Actions.home();
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
                <Image source={{uri:this.state.imagem}} style={styles.imagem}/>
            </View>
            <TextInput style={styles.input}
              placeholder="Nome da Vacina"
              onChangeText={nome => this.setState({nome})}
              value={this.state.nome}/>
            <TextInput style={styles.input}
              placeholder="Informação sobre a Vacina"
              onChangeText={texto => this.setState({texto})}
              value={this.state.texto}/>
            <View style={styles.linha}>
            <Text style= {styles.texto}>Data de Inicio</Text>
            <DatePicker
              format = "DD/MM/YYYY"
              style = {styles.dateComponente}
              date = {this.state.dtInicio}
              onDateChange = {this.changeDate}
            />
            </View>
            <View style={styles.linha}>
              <Text style= {styles.texto}>Data de Cadastro: </Text>
              <Text> {this.state.dtCadastro}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.insert} onPress={this.pickImage}>
                  <Text style={styles.button}>Escolha a foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delete} onPress={this.props.onCancel}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.insert}onPress={console.log(this.props.vacina)}>
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
      flex: 0.26,
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
    marginTop:10,
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
    width:250,
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

const mapDispatchToProps = dispatch => {
  return {
    onEdtCampanha: campanha => dispatch(edtCampanha(campanha)),
  };
};

export default connect(null,mapDispatchToProps)(EdtCampanha);
