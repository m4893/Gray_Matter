/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  AppState,
} from 'react-native';
import {Keyboard} from 'react-native'

import { images } from '../../app/assets/images';
import { UIColors, itemSizes, spacing } from '../../app/utils/variables';
import { isPhoneValid } from '../../app/utils/validation';
import Navigation from '../utils/navigation';
import { screenNames } from '../utils/constant';

class Login extends Component {
  constructor(props) {
    Navigation.sharedInstance().setAppNavigation(props.navigation); 
    super(props);
    this.state = {
      isError: false,
      phone_number: ''
    };
  }

  render() {
    const {isError, phone_number} = this.state;
    return (
      <View style={styles.container} >
        <Image source={images.gray_logo} style={styles.imageStyle} />
        <View style={[styles.viewContainer, isError ? {borderColor: UIColors.red}:{borderColor: UIColors.blue} ]}>
          <Image source={images.call} style={[styles.imageIconCall, isError ? {tintColor: UIColors.red}:{tintColor: UIColors.blue}]} />
          <TextInput
          autoFocus={true}
           numeric 
           keyboardType={'numeric'}
           style={[styles.textInput, isError ? {color: UIColors.red} : {color: UIColors.blue}]}
           autoCapitalize={'none'}
           spellCheck={false}
           placeholder={'Enter mobile number'}
           autoCorrect={false}
           placeholderTextColor={UIColors.grey}
           maxLength={10}
           value={phone_number}
           onChangeText={(value)=>this.onChangeText(value)}
          />
          <TouchableOpacity 
            onPress={()=>this.onPressNext()}>
            <Image source={images.next} style={styles.imageIconNext} />
          </TouchableOpacity>
        </View>
        { isError && <Text style={styles.text_error_number}>Please Enter 10 digit mobile number</Text>}
        <Text style={styles.text_hint_number}>OTP code will be sent to this number</Text>
      
      </View>
    );
  }

  com

onPressNext(){
  if(isPhoneValid(this.state.phone_number)){
    Keyboard.dismiss();
    this.setState({isError: false});
    Navigation.sharedInstance().pushToScreen(screenNames.OTP_SCREEN);
  }else{
    this.setState({isError: true});
  }
};

onChangeText(value){
  this.setState({isError: false, phone_number: value});
}

}

const styles = StyleSheet.create({
  container: {
    padding: spacing.large,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: UIColors.white
  },
  imageStyle: {
    height: itemSizes.imageLogo,
    alignSelf: 'center',
  },
  imageIconCall: {
    height: itemSizes.mediumLarge,
    width: itemSizes.mediumLarge,
    tintColor: UIColors.grey,
  },
  imageIconNext: {
    height: itemSizes.large,
    width: itemSizes.large,
    tintColor: UIColors.blue,
    borderRadius: itemSizes.mediumLarge,
  },
  text_hint_number: {
    marginTop: spacing.extraExtraSmall4,
    color: UIColors.grey,
    fontWeight: '600',
  },
  text_error_number: {
    marginTop: spacing.extraExtraSmall4,
    color: UIColors.red,
    fontWeight: '600',
  },
  textInput: {
    marginHorizontal: spacing.extraSmall,
    flex: 1,
    fontWeight: '600',
    color: UIColors.grey,
  },
  viewContainer: {
    marginTop: itemSizes.ExtraLarge,
    alignItems: 'center',
    paddingHorizontal: spacing.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: spacing.small,
    borderColor: UIColors.blue,
    borderWidth: 1,
  },
});

export default Login;
