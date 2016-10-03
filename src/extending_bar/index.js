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

export default class ExtendingBar extends React.Component {
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
      width: new Animated.Value(0),
      pillarWidth: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    Animated.sequence([
      Animated.delay(this.props.delay),
      Animated.timing(
        this.state.pillarWidth, {
          toValue: this.props.borderWidth,
          duration: 0,
          easing: Easing.elastic(0.4)
        }
      ),
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
    const { width, pillarWidth } = this.state;
    const { stroke, fill, borderWidth, centerHeight, flex } = this.props;
    const height = centerHeight + borderWidth * 2;

    return (
      <View style={[styles.row, {justifyContent: flex}]}>
        <View style={styles.col}>
          <Animated.View // LEFT
            style={{
              width: pillarWidth,
              height: height,
              backgroundColor: stroke
            }}
          >
          </Animated.View>
        </View>
        <View style={styles.col}>
          <Animated.View // TOP
            style={{
              width: width,
              height: borderWidth,
              backgroundColor: stroke
            }}
          >
          </Animated.View>
          <Animated.View // MIDDLE
            style={{
              width: width,
              height: centerHeight,
              backgroundColor: fill
            }}
          >
          </Animated.View>
          <Animated.View // BOTTOM
            style={{
              width: width,
              height: borderWidth,
              backgroundColor: stroke
            }}
          >
          </Animated.View>
        </View>
        <View style={styles.col}>
          <Animated.View // RIGHT
            style={{
              width: pillarWidth,
              height: height,
              backgroundColor: stroke
            }}
          >
          </Animated.View>
        </View>
      </View>
    );
  }
}
