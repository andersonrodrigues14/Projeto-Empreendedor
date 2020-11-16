/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Modal,Platform,Image, View, StyleSheet, TouchableWithoutFeedback,Text,TouchableOpacity,TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addProfile} from '../../store/actions/profile';
import {Actions} from 'react-native-router-flux'; // para navegar nas rotas

const initialState = {imagem: null, nome: null, cpf: null, sus:null, email: null,dtnascimento:null,sangue:null,obs:null};

class AddMinhasVacinas extends Component {

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
    this.props.onAddProfile({
      id: Math.random(),
      imagem: this.state.imagem,
      nome : this.state.nome,
      cpf: this.state.cpf,
      sus: this.state.sus,
      email: this.state.email,
      dtnascimento: this.state.dtnascimento,
      sangue:this.state.sangue,
      obs:this.state.obs,
    });

    this.setState({imagem: null, nome: null, cpf: null, sus:null, email: null,dtnascimento:null,sangue:null,obs:null});
    Actions.dados();
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
            <Text style={styles.header}>Novo Usuário</Text>
            <View style={styles.containerImagem}>
                <Image source={this.state.imagem} style={styles.imagem}/>
            </View>
            <TextInput style={styles.input}
              placeholder="Nome"
              onChangeText={nome => this.setState({nome})}
              value={this.state.nome}/>
            <TextInput style={styles.input}
              placeholder="CPF"
              onChangeText={cpf => this.setState({cpf})}
              value={this.state.cpf}/>
            <TextInput style={styles.input}
              placeholder="N° SUS"
              onChangeText={sus => this.setState({sus})}
              value={this.state.sus}/>
              <TextInput style={styles.input}
              placeholder="EMAIL"
              onChangeText={email => this.setState({email})}
              value={this.state.email}/>
              <TextInput style={styles.input}
              placeholder="Dt Nasc."
              onChangeText={dtnascimento => this.setState({dtnascimento})}
              value={this.state.dtnascimento}/>
              <TextInput style={styles.input}
              placeholder="Sangue"
              onChangeText={sangue => this.setState({sangue})}
              value={this.state.sangue}/>
              <TextInput style={styles.input}
              placeholder="OBS"
              onChangeText={obs => this.setState({obs})}
              value={this.state.obs}/>
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
    onAddProfile: profile => dispatch(addProfile(profile)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddMinhasVacinas);
