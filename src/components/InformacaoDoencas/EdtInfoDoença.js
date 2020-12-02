/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Modal,Alert,Platform,Image, View, StyleSheet, TouchableWithoutFeedback,Text,TouchableOpacity,TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {edtDoenca} from '../../store/actions/informacaoDoenca';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas

var dataAtual = new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear();

class EdtInfoDoenca extends Component {

  state = {
    imagem:{uri:this.props.doencaEdt.imagem},
    titulo:this.props.doencaEdt.titulo,
    texto:this.props.doencaEdt.texto,
    dataPublicacao:dataAtual,
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
    } else if (!this.state.titulo.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Titulo é obrigatório!');
    } else if (!this.state.texto.trim()){
      Alert.alert('Campo não preenchido !',
            'Campo Informação é obrigatório!');
    } else {
    this.props.onEdtDoenca({
      id: this.props.doencaEdt.id,
      imagem: this.state.imagem,
      titulo : this.state.titulo,
      texto: this.state.texto,
      dataPublicacao: this.state.dataPublicacao,
    });

    this.setState({imagem: null, titulo: null, texto: null, dataPublicacao: null});
    this.props.onCancel();
  }
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
          <View style={styles.container}>
            <Text style={styles.header}>Editar Doença</Text>
            <ScrollView style={styles.scroll}>
            <View style={styles.containerImagem}>
                <Image source={this.state.imagem} style={styles.imagem}/>
            </View>
            <TextInput style={styles.input}
              placeholder="Titudo da Doença"
              onChangeText={titulo => this.setState({titulo})}
              value={this.state.titulo}/>
            <TextInput style={styles.input}
              placeholder="Informação sobre a Doença"
              onChangeText={texto => this.setState({texto})}
              value={this.state.texto}/>
            <View style={styles.linha}>
              <Text style= {styles.texto}>Data da Publicação: </Text>
              <Text> {this.state.dataPublicacao}</Text>
            </View>
            </ScrollView>
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
      flex: 0.38,
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
    flex:1.7,
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
    onEdtDoenca: doenca => dispatch(edtDoenca(doenca)),
  };
};

export default connect(null,mapDispatchToProps)(EdtInfoDoenca);
