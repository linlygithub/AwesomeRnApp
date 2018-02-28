/**
 * Created by Administrator on 2017/7/25.
 */

'use strict';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import MenuButton from '../components/MenuButton';

const MenuGroup = ({menu,onMenuPress}) => {
  return (
    <View style={styles.container}>
      {menu.map((item) => {
        return (
          <MenuButton
            key={item.id}
            {...item}
            onPress={onMenuPress}>
          </MenuButton>
        )
      })}
    </View>
  );
};

MenuGroup.protoTypes = {
  menu: PropTypes.array.isRequired,
  onMenuPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingVertical:10,
    paddingHorizontal:9,
  }
});

export default MenuGroup;