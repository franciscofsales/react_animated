import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ExtendingBar, ImageSpinner } from 'react_native_animated';
let icon = require('./pd.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default function Root() {
  return (
    <View style={styles.container}>
      <ExtendingBar/>
      <ImageSpinner im_0={icon} im_1={icon} im_2={icon} im_3={icon} im_4={icon} im_5={icon} im_6={icon} im_7={icon} />
    </View>
  );
}
