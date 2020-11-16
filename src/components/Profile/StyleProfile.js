/* eslint-disable prettier/prettier */
import {StyleSheet,Platform} from 'react-native';

export const style = StyleSheet.create({

  textTituloUser: {
    color: '#28ABE3',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom:6,
    marginTop:1,
    marginLeft:15,
  },


  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor:'#35AAFF',
    width: '90%',
    height: 40,
    marginBottom: 5,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    paddingLeft: 10,
  },

  inputColunm: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor:'#35AAFF',
    height: 40,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    paddingLeft: 10,
    marginLeft:18,
    marginRight:20,
    flex:0.4,
  },

  InfoUser: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: '5%',
    borderRadius: 40,
    paddingBottom:10,
    backgroundColor:'#FBFBFB',
    marginTop: Platform.OS === 'ios' ? 20 : 10,
  },


  searchIconInfo: {
    paddingHorizontal:12,
    paddingTop:15,
    justifyContent: 'center',
  },

  searchIconInfo2: {
    paddingHorizontal:18,
  },

  editContainer: {

    width: '80%',
    margin: '5%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },

  editContainerMenu: {
    width: '80%',
    margin: '5%',
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems: 'center',
  },

  editContainer2: {

    width: '118%',
    marginTop:1,
    marginBottom:5,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },

  imageUser:{
    width:200,
    height:150,
    resizeMode: 'contain',
    borderRadius: 90,
  },
});
