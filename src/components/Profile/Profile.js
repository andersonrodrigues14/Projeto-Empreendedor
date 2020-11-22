/* eslint-disable prettier/prettier */
//import
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {View, Image, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {delProfile} from '../../store/actions/profile';
import EdtProfile from './EdtProfile';

//Import Styles
import {style} from './StyleProfile';

//Criar o component
class Profile extends Component {
  state = {
    showEdtProfile: false,
  }
  delete =() =>{
    this.props.onDltProfile({profileId: this.props.profileId});
    Actions.home();
  }
  render() {
    const admProfile = this.props.adm ?
    <View style={style.editContainerMenu}>

        <Icon
            style={style.searchIconInfo}
            name="save"
            size={23}
            color="#35AAFF"
          />
          <Icon
            style={style.searchIconInfo}
            name="pencil-alt"
            size={20}
            color="#35AAFF"
            onPress={()=> this.setState({showEdtProfile: true})}
          />
          <Icon
            style={style.searchIconInfo}
            name="trash"
            size={20}
            color="#35AAFF"
            onPress={(this.delete)}
          />
        </View> :  <View style={style.editContainerMenu}>

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
      <View style={style.InfoUser}>
        {admProfile}
        <View style={style.editContainer}>
          <Image source={{uri:this.props.imagem}} style={style.imageUser} />
        </View>

        <TextInput style={style.input} placeholder="Nome" editable={false}>
          {this.props.nome}
        </TextInput>
        <TextInput style={style.input} placeholder="CPF" editable={false}>
          {this.props.cpf}
        </TextInput>
        <TextInput style={style.input} placeholder="N° SUS" editable={false}>
          {this.props.sus}
        </TextInput>
        <TextInput style={style.input} placeholder="EMAIL" editable={false}>
          {this.props.email}
        </TextInput>

        <View style={style.editContainer2}>
          <TextInput
            style={style.inputColunm}
            placeholder="Dt Nasc."
            editable={false}>
            {this.props.dtnascimento}
          </TextInput>
          <TextInput
            style={style.inputColunm}
            placeholder="Sangue"
            editable={false}>
            {this.props.sangue}
          </TextInput>
        </View>

        <TextInput style={style.input} placeholder="OBS" editable={false}>
          {this.props.obs}
        </TextInput>
        <EdtProfile isVisible={this.state.showEdtProfile} profileEdt={this.props.profileEdt} onCancel={()=> this.setState({showEdtProfile: false})}/>
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
    onDltProfile: profile => dispatch(delProfile(profile)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
