import React, {PropTypes, Component} from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { sequence } from '../lib/generators';
import animation from '../lib/animation';

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

class ExtendingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: new Animated.Value(0),
      pillarWidth: new Animated.Value(0)
    };
  }

  componentDidMount() {
    sequence([
      animation(this.state.pillarWidth)
        .to(this.props.borderWidth).ease(Easing.elastic(0.4)).delay(this.props.delay),
      animation(this.state.width)
        .to(this.props.width).in(this.props.duration).ease(Easing.elastic(0.4))
    ]).start(true);
  }

  render() {
    const { width, pillarWidth } = this.state;
    const { stroke, fill, borderWidth, centerHeight } = this.props;
    const height = centerHeight + borderWidth * 2;

    return (
      <View style={styles.row}>
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

ExtendingBar.propTypes = {
  delay: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  borderWidth: PropTypes.number,
  centerHeight: PropTypes.number,
  duration: PropTypes.number
};

ExtendingBar.defaultProps = {
  delay: 1000,
  stroke: '#de0e1b',
  fill: 'transparent',
  width: 300,
  borderWidth: 1,
  centerHeight: 6,
  duration: 2000
};

export default ExtendingBar;