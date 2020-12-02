/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Modal,Platform,KeyboardAvoidingView,Image, View, StyleSheet, TouchableWithoutFeedback,Text,TouchableOpacity,TextInput, Alert, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addFamilia} from '../../store/actions/family';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas
import DatePicker from 'react-native-datepicker';

const initialState = {imagem:null,nomeFamiliar:'',vacina:'',dtNascimento:'',dtAplicacao:''};

class AddFamily extends Component {

  state = {
    ...initialState,
  }

  changeDate = (valor) => {
    this.setState({
      dtAplicacao: valor,
    });
  }

  changeDate2 = (valor) => {
    this.setState({
      dtNascimento: valor,
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
    } else if (!this.state.nomeFamiliar.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Nome é obrigatório!');
    } else if (!this.state.dtNascimento.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Data de Nascimento é obrigatório!');
    } else if (!this.state.vacina.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Nome da Vacina é obrigatório!');
    } else if (!this.state.dtAplicacao.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Data da Vacina é obrigatório!');
    } else {
    this.props.onAddFamyli({
      imagem: this.state.imagem,
      userId: this.props.userId,
      nomeFamiliar : this.state.nomeFamiliar,
      vacinas: [ {vacina:this.state.vacina,
                dtAplicacao:this.state.dtAplicacao}],
      dtNascimento: this.state.dtNascimento,
    });

    this.setState({imagem: null, nomeFamiliar: '', vacina: '', dtNascimento: '',dtAplicacao:''});
    this.props.onCancel();
  }};

  render(){
    return (
      <Modal transparent={true} visible={this.props.isVisible}
      onRequestClose= {this.props.onCancel}
      animationType= {'slide'}>
        <KeyboardAvoidingView style={styles.background}>
        <TouchableWithoutFeedback onPress={() => this.props.onCancel()}>
          <View style={styles.backgtoundFundo} />
        </TouchableWithoutFeedback>
          <View style={styles.container}>
            <Text style={styles.header}>Novo Familiar</Text>
            <ScrollView style={styles.scroll}>
            <View style={styles.containerImagem}>
                <Image source={this.state.imagem} style={styles.imagem}/>
            </View>
            <TextInput style={styles.input}
              placeholder="Nome do Familiar"
              onChangeText={nomeFamiliar => this.setState({nomeFamiliar})}
              value={this.state.nomeFamiliar}/>
            <View style={styles.linha}>
            <TextInput style={styles.input2}
              placeholder="Vacina"
              onChangeText={vacina => this.setState({vacina})}
              value={this.state.vacina}/>
              <DatePicker
              format = "DD/MM/YYYY"
              style = {styles.dateComponente2}
              date = {this.state.dtAplicacao}
              onDateChange = {this.changeDate}
            />
            </View>
            <View style={styles.linha}>
            <Text style= {styles.texto}>Data de Nascimento</Text>
            <DatePicker
              format = "DD/MM/YYYY"
              style = {styles.dateComponente}
              date = {this.state.dtNascimento}
              onDateChange = {this.changeDate2}
            />
            </View>
            </ScrollView>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.insert} onPress={this.pickImage}>
                  <Text style={styles.button}>Escolha a foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delete} onPress={() => this.props.onCancel()}>
                <Text style={styles.button}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.insert}onPress={this.save}>
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
    flex:1.2,
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
    marginTop:6,
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
  dateComponente2:{
    width:150,
    margin: 15,
  },
  input2:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor:'#35AAFF',
    height: 40,
    width:200,
    margin: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,

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

const mapStateToProps = ({user}) => {
  return {
    email: user.email,
    nome : user.nome,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddFamyli: familia => dispatch(addFamilia(familia)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddFamily);
