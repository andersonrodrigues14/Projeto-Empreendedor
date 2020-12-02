/* eslint-disable prettier/prettier */
import {StyleSheet,Platform} from 'react-native';

export const style = StyleSheet.create({
  btnInsert: {
    backgroundColor: '#28ABE3',
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop : 10,
    marginBottom:10,
    flexDirection: 'row',
  },
  btnSair: {
    backgroundColor: 'red',
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop : 10,
    marginBottom:10,
    flexDirection: 'row',
  },
  textInsert: {
    color: '#FFF',
    fontSize: 18,
    marginLeft:10,
  },
  containerLogo: {
    //View logo
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  background: {
    //KeyboardAvoidingView
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,

  },
  textTitulo: {
    color: '#28ABE3',
    fontSize: 25,
    justifyContent: 'center',
    marginBottom:6,
    marginTop:1,
    alignItems: 'center',
  },
  textVersao: {
    fontSize: 15,
    justifyContent: 'center',
    marginBottom:6,
    marginTop:25,
    alignItems: 'center',
  },
  InfoUser: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: '5%',
    borderRadius: 40,
    paddingBottom:10,
    backgroundColor: '#FBFBFB',
    marginTop: Platform.OS === 'ios' ? 20 : 10,
  },
  scroll: {
    flex: 0.1,
    width:'100%',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  imageUser:{
    width:200,
    height:150,
    resizeMode: 'contain',
    borderRadius: 90,
  },
  editContainer: {

    width: '80%',
    margin: '5%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
});
