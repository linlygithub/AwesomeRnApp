/**
 * Created by Administrator on 2017/7/29.
 */

'use strict';


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Animated,
  Image,
  Dimensions,
  Easing,
  TouchableNativeFeedback
} from 'react-native';
import {Kohana} from 'react-native-textinput-effects';
import {connect} from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
const containerWidth = width * 0.9;
const containerHeight = height * 0.58;


class SigninScene extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      avatar_scale: new Animated.Value(0),
      fab_translate: new Animated.Value(0),
      fab_scale: new Animated.Value(0),
    };
  }


  componentDidMount() {
    //init
    this.fadeIn(2000);

  }

  fadeIn(during) {
    const {avatar_scale} = this.state;
    avatar_scale.setValue(0);
    Animated.timing(avatar_scale, {toValue: 1, during: during, easing: Easing.linear}).start();
  }

  fadeOut(during) {
    const {fab_translate, fab_scale} = this.state;
    const {navigation} = this.props;
    fab_scale.setValue(0);
    fab_scale.setValue(0);
    Animated.sequence([
      Animated.timing(fab_translate, {toValue: 1, during: during, easing: Easing.linear}),
      Animated.timing(fab_scale, {toValue: 1, during: during, easing: Easing.linear})]).start(() => {
        navigation.navigate('SignUp');
        setTimeout(() => {
          fab_translate.setValue(0);
          fab_scale.setValue(0)
        }, 300);
      }
    );
  }

  render() {
    //icon animated
    const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcon);
    return (
      <Image style={styles.page}
             source={{uri:'https://unsplash.it/720/1280?random'}}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />
        <View style={styles.container}>
          <Animated.Image
            source={{uri:'http://39.108.70.8:8080/ic_avatar_01.png'}}
            style={{
          width:90,
          height:90,
          resizeMode:'stretch',
          alignSelf:'center',
          transform:[{scale:this.state.avatar_scale.interpolate({
            inputRange:[0,1],
            outputRange:[0.5,1]
          })}]
          }}/>
          <Animated.View style={[styles.fab,{top:-20}]}>
            <AnimatedIcon
              onPress={()=>{this.fadeOut(500)}}
              name={'plus-circle'}
              color={'#E91E63'}
              size={40}
              style={{
                  elevation:6,
                  textShadowColor:'#ccc',
                  textShadowOffset:{
                    width:1.5,
                    height:1.5
                  },
                  transform:[
                    {translateX:this.state.fab_translate.interpolate({inputRange:[0,1],outputRange:[0,-100]})},
                    {translateY:this.state.fab_translate.interpolate({inputRange:[0,1],outputRange:[0,100]})},
                    {scale:this.state.fab_scale.interpolate({inputRange:[0,1],outputRange:[1,4]})}
                  ]
               }}
            />
          </Animated.View>
          <View style={[styles.section,{top:140}]}>
            <Kohana
              label={'用户名'}
              labelStyle={{ color: '#a3a3a3' }}
              inputStyle={{ color: '#f95a25'}}
              iconClass={MaterialIcon}
              iconName={'account-circle'}
              iconColor={'#f95a25'}
              iconSize={18}
              autoCorrect={false}
              autoCapitalize={'none'}
              multiline={false}
            />
            <Kohana
              labelStyle={{ color: '#a3a3a3' }}
              label={'密码'}
              iconClass={MaterialIcon}
              iconName={'lock'}
              iconColor={'#77116a'}
              iconSize={18}
              secureTextEntry={true}
              multiline={false}
            />
          </View>
          <Animated.View style={[styles.section,{top:260}]}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.SelectableBackground()}
              onPress={()=>{this.props.dispatch(
                {type:'TOGGLE_SIGN_IN',
                 payload:{
                 isLogined:true
                }})}}>
              <View style={{borderRadius:6,backgroundColor:'#77116a',padding:6}}>
                <Text style={{textAlign:'center',color: 'white',fontSize:18}}>
                  Login
                </Text>
              </View>
            </TouchableNativeFeedback>
          </Animated.View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: containerWidth,
    height: containerHeight,
    elevation: 4,
    borderRadius: 12,
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  section: {
    position: 'absolute',
    paddingHorizontal: 30,
    alignSelf: 'center',
    width: containerWidth - 20
  },
  fab: {
    position: 'relative',
    marginRight: 40,
    alignSelf: 'flex-end',
  }
});

export default connect()(SigninScene);
