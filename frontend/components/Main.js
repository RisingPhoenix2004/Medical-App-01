import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main= ()=>{
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Home Page</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
    },
  });

export default Main;