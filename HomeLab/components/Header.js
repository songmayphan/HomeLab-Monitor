import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'My Home Lab Monitor',
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 20,
    backgroundColor: '#18b2ba',
  },
  text: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Header;