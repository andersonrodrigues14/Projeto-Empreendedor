/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Modal,Alert,Platform,Image, View, StyleSheet, TouchableWithoutFeedback,Text,TouchableOpacity,TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {edtMinhasVacinas} from '../../store/actions/minhasVacinas';
import DatePicker from 'react-native-datepicker';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas

class AddMinhasVacinas extends Component {

  state = {
    imagem:{uri:this.props.minhasVacinasEdt.imagem},
    nome:this.props.minhasVacinasEdt.nome,
    texto:this.props.minhasVacinasEdt.texto,
    dtAplicacao:this.props.minhasVacinasEdt.dtAplicacao,
    dtRenovacao:this.props.minhasVacinasEdt.dtRenovacao,
  }

  changeDate = (valor) => {
    this.setState({
      dtAplicacao: valor,
    });
  }

  changeDate2 = (valor) => {
    this.setState({
      dtRenovacao: valor,
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
    if (!this.state.imagem){
      Alert.alert('Campo não preenchido !',
            'Campo Imagem é obrigatório!');
    } else if (!this.state.nome.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Nome é obrigatório!');
    } else if (!this.state.texto.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Informação é obrigatório!');
    } else if (!this.state.dtAplicacao.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Data Aplicação é obrigatório!');
    } else if (!this.state.dtRenovacao.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Data Renovação é obrigatório!');
    } else {
    this.props.onEdtMinhasVacinas({
      id: this.props.minhasVacinasEdt.id,
      imagem: this.state.imagem,
      nome : this.state.nome,
      texto: this.state.texto,
      dtAplicacao: this.state.dtAplicacao,
      dtRenovacao: this.state.dtRenovacao,
    });
    this.setState({imagem: null, nome: null, texto: null, dtAplicacao:'', dtRenovacao: ''});
    this.props.onCancel();
    Actions.home();
  }
};

  render(){
    return (
      <Modal transparent={true} visible={this.props.isVisible}
      onRequestClose= {() => this.props.onCancel}
      animationType= {'slide'}>
       <KeyboardAvoidingView style={styles.background}>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.backgtoundFundo} />
        </TouchableWithoutFeedback>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Text style={styles.header}>Editar Vacina</Text>
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
            <View style={styles.linha}>
            <Text style= {styles.texto}>Data de Aplicação</Text>
            <DatePicker
              format = "DD/MM/YYYY"
              style = {styles.dateComponente}
              date = {this.state.dtAplicacao}
              onDateChange = {this.changeDate}
            />
            </View>
            <View style={styles.linha}>
            <Text style= {styles.texto}>Data de Renovação</Text>
            <DatePicker
              format = "DD/MM/YYYY"
              style = {styles.dateComponenteMaior}
              date = {this.state.dtRenovacao}
              onDateChange = {this.changeDate2}
            />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.insert} onPress={this.pickImage}>
                  <Text style={styles.button}>Escolha a foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delete} onPress={() => this.props.onCancel}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.insert}onPress={() => this.save()}>
                <Text style={styles.button}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>
        <TouchableWithoutFeedback onPress={() => this.props.onCancel}>
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

const mapDispatchToProps = dispatch => {
  return {
    onEdtMinhasVacinas: minhasVacinas => dispatch(edtMinhasVacinas(minhasVacinas)),
  };
};

export default connect(null,mapDispatchToProps)(AddMinhasVacinas);
