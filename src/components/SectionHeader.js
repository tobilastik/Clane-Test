import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const SectionHeader = ({title}) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default SectionHeader;
