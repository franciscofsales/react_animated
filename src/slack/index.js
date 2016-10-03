import React, {PropTypes} from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  col: {
    flexDirection: 'column',
    backgroundColor: 'transparent'
  }
});

export default class Slack extends React.Component {
  static propTypes = {
    delay: React.PropTypes.number,
    stroke: React.PropTypes.string,
    fill: React.PropTypes.string,
    width: React.PropTypes.number,
    borderWidth: React.PropTypes.number,
    centerHeight: React.PropTypes.number,
    duration: React.PropTypes.number,
    flex: React.PropTypes.string
  }

  static defaultProps = {
    delay: 0,
    stroke: '#de0e1b',
    fill: 'transparent',
    width: 300,
    borderWidth: 1,
    centerHeight: 6,
    duration: 2000,
    flex: 'center'
  }

  constructor(props) {
    super(props);
    this.state = {
      width: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    Animated.sequence([
      Animated.delay(this.props.delay),
      Animated.timing(
        this.state.width, {
          toValue: this.props.width,
          duration: this.props.duration,
          easing: Easing.elastic(0.4)
        }
      )
    ]).start();
  }

  render() {
    const { width } = this.state;
    const { stroke, fill, borderWidth, centerHeight, flex } = this.props;
    const height = centerHeight + borderWidth * 2;

    return (
      <View style={[styles.row, {justifyContent: flex}]}>
        <Animated.View // LEFT
          style={{
            width: width,
            height: height,
            backgroundColor: stroke,
            borderRadius: 30
          }}
        >
        </Animated.View>
      </View>
    );
  }
}
