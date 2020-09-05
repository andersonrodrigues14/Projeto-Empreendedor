/* eslint-disable prettier/prettier */
import {StyleSheet,Platform} from 'react-native';

export const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  background: {
    //KeyboardAvoidingView
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  containerLogo: {
    //View logo
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 30,
    marginTop: 10,
  },
  textTitulo: {
    color: '#28ABE3',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom:6,
    marginTop:1,
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
    flexDirection: 'column',
    paddingTop:10,
    //backgroundColor:'red',
  },
  containerInfoRow:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    //backgroundColor:'green',
  },

  btnRegister: {
    backgroundColor: '#35AAFF',
    width: '70%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom:10,
    flexDirection: 'row',
  },

  textRegister: {
    color: '#FFF',
    fontSize: 18,
    marginLeft:10,
  },
});
