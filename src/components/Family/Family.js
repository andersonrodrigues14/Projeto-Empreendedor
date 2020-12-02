/* eslint-disable prettier/prettier */

//import
import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {delFamilia} from '../../store/actions/family';
import EdtFamily from './EdtFamily';
import Vacinas from './Vacinas';
import AddVacinaFamily from './AddVacinaFamily';

//import Style
import {style} from './StyleFamily';

//KeyboardAvoidingView usado keybord para evitar possível bug presente no IOS

//Criar o component
class Familia extends Component {
  state = {
    showEdtFamilia: false,
  }
  delete =() =>{
    this.props.onDltFamilia({familiaId: this.props.familiaId});
  }
  render() {
    const addVacina = this.props.adm ?
            <AddVacinaFamily vacinaId={this.props.id} /> : null;
    const admFamilia = this.props.adm ?
    <View style={style.editContainer}>
          <Image source={{uri:this.props.imagem}} style={style.imagem} />
          <Icon
            style={style.searchIconInfo}
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="pencil-alt"
            size={20}
            color="#35AAFF"
            onPress={()=> this.setState({showEdtFamilia: true})}
          />
          <Icon
            style={style.searchIconInfo}
            name="trash"
            size={20}
            color="#35AAFF"
            onPress={(this.delete)}
          />
        </View> :  <View style={style.editContainer}>
          <Image source={{uri:this.props.imagem}} style={style.imagem} />
          <Icon
            style={style.searchIconInfo2}
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo2}
            size={20}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo2}
            size={20}
            color="#35AAFF"
          />
        </View>;
    return (
      <View style={style.container}>
        {admFamilia}
        <Text style={style.textTitulo}>{this.props.nomeFamiliar}</Text>
        <Text style={style.textStyle}>Data de Nascimento : {this.props.dtNascimento}</Text>
        <Vacinas vacinas={this.props.vacinas} />
        {addVacina}
        <EdtFamily isVisible={this.state.showEdtFamilia} familiaEdt={this.props.familiaEdt} onCancel={()=> this.setState({showEdtFamilia: false})}/>
      </View>
    );
  }
}

//retorna dados para a tela
const mapStateToProps = ({user}) => {
  return {
    adm: user.adm,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDltFamilia: familia => dispatch(delFamilia(familia)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Familia);
