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
  TouchableOpacity
} from 'react-native';
import {Keyboard} from 'react-native'

import { images } from '../../app/assets/images';
import { UIColors, itemSizes, spacing, fontSizes } from '../../app/utils/variables';
import Navigation from '../utils/navigation';

class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      enable: true,
      otp_1: '',
      otp_2: '',
      otp_3: '',
      otp_4: '',
      focusState: 0,
    };
    this.otp_ref_1 = React.createRef();
    this.otp_ref_2 = React.createRef();
    this.otp_ref_3 = React.createRef();
    this.otp_ref_4 = React.createRef();
  }

  render() {
    const {isError, otp_1, otp_2, otp_3, otp_4, enable, type} = this.state;
    return (
      <View style={styles.container} >
        <View style={styles.viewHeader}>
         <Text style={styles.text_header}>Verify phone number</Text>
          <TouchableOpacity 
            onPress={()=>this.onPressClose()}>
            <Image source={images.close} style={styles.imageIconNext} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text_header_otp}>Enter OTP code</Text>
        <Text style={styles.text_hint_number}>Please verify your number with 4 digit OTP code sent to ********69</Text>
        <View style={styles.viewOTP}>
        <View style={[styles.viewContainer, isError && {borderColor: UIColors.red}, type == 1 && {borderColor: UIColors.blue} ]}>
          <TextInput
          autoFocus={true}
          onFocus={()=>this.onFocusChange(1)}
          textAlign={'center'}
           numeric 
           keyboardType={'numeric'}
           style={[styles.textInput, isError ? {color: UIColors.red} : {color: UIColors.blue}]}
           autoCapitalize={'none'}
           spellCheck={false}
           placeholder={'*'}
           autoCorrect={false}
           placeholderTextColor={UIColors.grey}
           maxLength={1}
           value={otp_1}
           onChangeText={(value)=>this.onChangeText(value, 1)}
           ref={this.otp_ref_1}
          />
        </View>
        <View style={[styles.viewContainer, isError && {borderColor: UIColors.red}, type == 2 && {borderColor: UIColors.blue} ]}>
          <TextInput
          textAlign={'center'}
          onFocus={()=>this.onFocusChange(2)}
           numeric 
           keyboardType={'numeric'}
           style={[styles.textInput, isError ? {color: UIColors.red} : {color: UIColors.blue}]}
           autoCapitalize={'none'}
           spellCheck={false}
           placeholder={'*'}
           autoCorrect={false}
           placeholderTextColor={UIColors.grey}
           maxLength={1}
           value={otp_2}
           onChangeText={(value)=>this.onChangeText(value, 2)}
           ref={this.otp_ref_2}
          />
        </View>
        <View style={[styles.viewContainer, isError && {borderColor: UIColors.red}, type == 3 && {borderColor: UIColors.blue} ]}>
          <TextInput
          textAlign={'center'}
          onFocus={()=>this.onFocusChange(3)}
           numeric 
           keyboardType={'numeric'}
           style={[styles.textInput, isError ? {color: UIColors.red} : {color: UIColors.blue}]}
           autoCapitalize={'none'}
           spellCheck={false}
           placeholder={'*'}
           autoCorrect={false}
           placeholderTextColor={UIColors.grey}
           maxLength={1}
           value={otp_3}
           onChangeText={(value)=>this.onChangeText(value, 3)}
           ref={this.otp_ref_3}
          />
        </View>
        <View style={[styles.viewContainer, isError && {borderColor: UIColors.red}, type == 4 && {borderColor: UIColors.blue} ]}>
          <TextInput
          textAlign={'center'}
          onFocus={()=>this.onFocusChange(4)}
           numeric 
           keyboardType={'numeric'}
           style={[styles.textInput, isError ? {color: UIColors.red} : {color: UIColors.blue}]}
           autoCapitalize={'none'}
           spellCheck={false}
           placeholder={'*'}
           autoCorrect={false}
           placeholderTextColor={UIColors.grey}
           maxLength={1}
           value={otp_4}
           onChangeText={(value)=>this.onChangeText(value, 4)}
           ref={this.otp_ref_4}
          />
        </View>
        </View>
        { isError && <Text style={styles.text_error_number}>Invalid OTP. Please retry</Text>}
        <Text style={styles.text_resend}>Did't receive code? <Text style={styles.text_resend_orange}>Resend</Text></Text>
        <TouchableOpacity style={[styles.text_verify_view, enable && {opacity: .5}]}  disabled={enable} onPress={()=>this.onPressNext()}>
        <Text style={styles.text_verify_otp}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPressNext(){
    this.setState({isError: true});
};

onPressClose(){
  Keyboard.dismiss();
  Navigation.sharedInstance().popScreen();
};

onFocusChange(type){
  this.setState({type: type});
}

onChangeText(value,type){
  if(type == 1){
    this.setState({isError: false, otp_1: value},()=>this.enableDisableButton());
    if(value.length == 1){
     this.otp_ref_2.current.focus()
    }
  }else if(type == 2){
    this.setState({isError: false, otp_2: value},()=>this.enableDisableButton());
    if(value.length == 1){
      this.otp_ref_3.current.focus()
     }else{
      this.otp_ref_1.current.focus()
     }
  }else if(type == 3){
    this.setState({isError: false, otp_3: value},()=>this.enableDisableButton());
    if(value.length == 1){
      this.otp_ref_4.current.focus()
     }else{
      this.otp_ref_2.current.focus()
     }
  }else if(type == 4){
    this.setState({isError: false, otp_4: value},()=>this.enableDisableButton());
    if(value.length != 1){
      this.otp_ref_3.current.focus()
     }
  }
}

enableDisableButton(){
  if(this.state.otp_1.length == 1 && this.state.otp_2.length == 1 && this.state.otp_3.length == 1 && this.state.otp_4.length == 1 ){
    Keyboard.dismiss();
    this.setState({enable: false})
  }else{
    this.setState({enable: true})
  }
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin: spacing.small,
    height: itemSizes.medium,
    width: itemSizes.medium,
    tintColor: UIColors.white,
  },
  text_hint_number: {
    marginTop: spacing.extraExtraSmall4,
    marginHorizontal: spacing.medium,
    color: UIColors.grey,
    fontWeight: '600',
  },
  text_resend: {
    marginVertical: spacing.small,
    marginHorizontal: spacing.medium,
    color: UIColors.black,
  },
  text_resend_orange: {
    color: UIColors.orange,
  },
  text_verify_otp: {
    textAlign: 'center',
    color: UIColors.white,
    fontWeight: 'bold',
  },
  text_verify_view: {
    justifyContent: 'center',
    width: itemSizes.buttonWidth,
    backgroundColor: UIColors.orange,
    marginVertical: spacing.small,
    padding: spacing.medium,
    borderRadius: spacing.small,
    marginHorizontal: spacing.medium,
    color: UIColors.white,
  },
  text_header: {
    color: UIColors.white,
    fontSize: fontSizes.mediumLarge18,
  },
  text_header_otp: {
    marginHorizontal: spacing.medium,
    marginTop: spacing.medium,
    color: UIColors.black,
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  text_error_number: {
    paddingHorizontal: spacing.medium,
    color: UIColors.red,
    fontWeight: '600',
  },
  textInput: {
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingHorizontal: spacing.medium,
    color: UIColors.grey,
  },
  viewContainer: {
    marginEnd: spacing.small,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: spacing.small,
    borderColor: UIColors.grey,
    borderWidth: 1,
  },
  viewHeader: {
    padding: spacing.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: UIColors.blue,
  },
  viewOTP: {
    marginTop: itemSizes.small,
    padding: spacing.medium,
    flexDirection: 'row',
  },
});

export default OTP;
