/* eslint-disable prettier/prettier */
import {StyleSheet,Platform} from 'react-native';

export const style = StyleSheet.create({
  imagem:{
    marginHorizontal:10,
    resizeMode: 'contain',
    width:100,
    height:100,
  },

  searchIconInfo: {
    paddingBottom: 60,
    marginBottom:8,
    paddingHorizontal:10,
    paddingTop:15,
  },

  searchIconInfo2: {
    paddingHorizontal:20,
    paddingTop:15,
  },

  editContainer: {
    flexDirection: 'row',
    width: '90%',
    margin: '5%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: '5%',
    borderRadius: 50,
    backgroundColor:'#FBFBFB',
    marginTop: Platform.OS === 'ios' ? 20 : 10,
  },


  textStyle:{
    fontSize:14,
    color:'#000',
  },

  textTitulo:{
    fontSize:20,
    color:'#000',
  },
});
