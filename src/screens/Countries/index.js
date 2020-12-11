import React from 'react';
import {SectionList, View, Text} from 'react-native';
import {countries} from '../../common/data';
import NameList from '../../components/NameList';
import SectionHeader from '../../components/SectionHeader';
import {styles} from './styles';

const Countries = () => {
  const sortData = () => {
    let countriesArr = [];
    let firstChar = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currentChar = String.fromCharCode(firstChar + i);
      let tempChar = {
        title: currentChar,
      };

      let currentCountry = countries.filter((elem) => {
        return elem.name[0].toUpperCase() === currentChar;
      });
      if (currentCountry.length > 0) {
        currentCountry.sort((a, b) => a.name.localeCompare(b.name));
        tempChar.data = currentCountry;
        countriesArr.push(tempChar);
      }
    }
    return countriesArr;
  };

  return (
    <View style={{paddingBottom: 100}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Clane Section List Test</Text>
      </View>
      <SectionList
        sections={sortData()}
        renderItem={({item}) => <NameList {...item} />}
        renderSectionHeader={({section}) => <SectionHeader {...section} />}
        keyExtractor={(item) => item.code}
      />
    </View>
  );
};

export default Countries;
