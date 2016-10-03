import React, {PropTypes} from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import { Images, Metrics } from '../Themes'
import Routes from '../Navigation/Routes'
import Button from '../Components/Button'
import {Slack} from 'react_native_animated'

const styles = StyleSheet.create({
});

class PresentationScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount () {
  }

  componentDidMount() {
  }

  navigate(destination) {
    return () => {
      this.props.navigator.push(destination);
    };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Slack/>
      </View>
    )
  }
}

export default PresentationScreen;
