import React from 'react'
import { StyleSheet, View, Text, Navigator, BackAndroid } from 'react-native'
import {Router, Routes } from './Navigation/'
import DebugSettings from './Config/DebugSettings'
import Colors from './Themes/Colors'

const styles = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  }
});


export default class RNBase extends React.Component {

  componentWillMount () {

  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      }
      return false;
    });
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <View style={styles.applicationView}>
          <Navigator
            ref={(ref) => { this.navigator = ref }}
            initialRoute={Routes.PresentationScreen}
            configureScene={Router.configureScene}
            renderScene={Router.renderScene}
            style={styles.container}
          />
      </View>
    )
  }

  render () {
    return this.renderApp()
  }
}
