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
  Button,
  Dimensions,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';
import {Fumi, Kohana} from 'react-native-textinput-effects';
import {connect} from 'react-redux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
const containerWidth = width * 0.9;
const containerHeight = height * 0.58;


class SignupScene extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      avatar_scale: new Animated.Value(0),
      fab_translate: new Animated.Value(0),
      fab_scale: new Animated.Value(0),
    };
  }


  componentDidMount() {
    this.fadeIn(500);
  }

  fadeIn(during){
    const {fab_translate, fab_scale} = this.state;
    fab_scale.setValue(0);
    fab_scale.setValue(0);
    Animated.sequence([
      Animated.timing(fab_scale, {toValue: 1, during: during, easing: Easing.linear}),
      Animated.timing(fab_translate, {toValue: 1, during: during, easing: Easing.linear})
    ]).start();
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
        <View style={[styles.container]}>
          <Animated.View style={[styles.fab]}>
            <AnimatedIcon
              onPress={()=>{this.props.navigation.goBack()}}
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
                    {translateX:this.state.fab_translate.interpolate({inputRange:[0,1],outputRange:[0,105]})},
                    {translateY:this.state.fab_translate.interpolate({inputRange:[0,1],outputRange:[0,-150]})},
                    {scale:this.state.fab_scale.interpolate({inputRange:[0,1],outputRange:[4,1]})},
                    {rotate:this.state.fab_translate.interpolate({inputRange:[0,1],outputRange:['0deg','45deg']})}
                  ]

               }}
            />
          </Animated.View>
          <View style={[styles.section,{top:60}]}>
            <Fumi
              label={'手机号'}
              labelStyle={{ color: '#a3a3a3' }}
              inputStyle={{ color: '#f95a25'}}
              iconClass={MaterialIcon}
              iconName={'cellphone-android'}
              iconColor={'#f95a25'}
              iconSize={18}
              autoCorrect={false}
              keyboardType={'phone-pad'}
              autoCapitalize={'none'}
              multiline={false}
            />
            <Fumi
              labelStyle={{ color: '#a3a3a3' }}
              label={'登录密码'}
              iconClass={MaterialIcon}
              iconName={'lock'}
              iconColor={'#77116a'}
              iconSize={18}
              secureTextEntry={true}
              multiline={false}
            />
            <Fumi
              labelStyle={{ color: '#a3a3a3' }}
              label={'重复密码'}
              iconClass={MaterialIcon}
              iconName={'lock'}
              iconColor={'#77116a'}
              iconSize={18}
              secureTextEntry={true}
              multiline={false}
            />
          </View>

          <Animated.View style={[styles.section,{top:300}]}>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'#77116a',borderRadius:6,padding:10.}}
                              onPress={()=>{this.props.dispatch({
                                type:'TOGGLE_SIGN_IN',
                                payload:{
                                  isLogined:true
                                }
                                })}}>
              <Text style={{textAlign:'center',color: 'white'}}>
                Login
              </Text>
            </TouchableOpacity>
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
    backgroundColor: 'white'
  },
  section: {
    position: 'absolute',
    paddingHorizontal: 30,
    alignSelf: 'center',
    width: containerWidth - 20
  },
  fab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect()(SignupScene);
