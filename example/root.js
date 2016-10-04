import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ExtendingBar } from 'react_native_animated'

const styles = StyleSheet.create({
});

var Root = function(props, context) {
  return (
    <View>
      <ExtendingBar/>
    </View>
  );
}

Root.propTypes = {

}

Root.defaultProps = {
}

module.exports = Root;
