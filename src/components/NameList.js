import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const NameList = ({name}) => (
  <View style={styles.container}>
    <Text>{name}</Text>
  </View>
);

export default NameList;
