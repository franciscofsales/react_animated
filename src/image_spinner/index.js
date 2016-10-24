import React, {PropTypes, Component} from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { sequence } from '../lib/generators';
import animation from '../lib/animation';

var MULTIPLIER = 400;
var TARGET = 360*MULTIPLIER;
var DURATION = 6800*MULTIPLIER;

const styles = StyleSheet.create({
  small: {
    height:32,
    width: 32
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    margin: 25,
  },
  outer: {
    justifyContent: 'space-between',
    height:160,
    width: 32
  },
  inner: {
    justifyContent: 'space-between',
    width: 32
  },
  middle: {
    justifyContent: 'space-between',
    height:224,
    width: 32
  }
});

class ImageSpinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      angle: new Animated.Value(0)
    };
  }

  componentDidMount() {
    sequence([
      animation(this.state.angle)
        .to(TARGET).in(DURATION).ease(Easing.linear)
    ], true);
  }

  getTransform(clockwise) {
    var out = clockwise ? ['0deg', '360deg'] : ['360deg', '0deg'];
    return [{
      rotate: this.state.angle.interpolate({
        inputRange: [0, 360],
        outputRange: out
      })
    }];
  }

  render() {
    const { im_0, im_1, im_2, im_3, im_4, im_5, im_6, im_7 } = this.props;

    var cwStyle = [styles.row, {transform: this.getTransform(true)}];
    var ccwStyle = [styles.small, {transform: this.getTransform(false)}];

    return (
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Animated.View style={cwStyle}>
          <View style={styles.small}>
            <Animated.Image source={im_0} style={ccwStyle} />
          </View>
          <View style={styles.outer}>
            <Animated.Image source={im_1} style={ccwStyle} />
            <Animated.Image source={im_2} style={ccwStyle} />
          </View>
          <View style={styles.inner}>
          </View>
          <View style={styles.middle}>
            <Animated.Image source={im_3} style={ccwStyle} />
            <Animated.Image source={im_4} style={ccwStyle} />
          </View>
          <View style={styles.inner}>
          </View>
          <View style={styles.outer}>
            <Animated.Image source={im_5} style={ccwStyle} />
            <Animated.Image source={im_6} style={ccwStyle} />
          </View>
          <View style={styles.small}>
            <Animated.Image source={im_7} style={ccwStyle} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

ImageSpinner.propTypes = {
  im_0: PropTypes.number.isRequired,
  im_1: PropTypes.number.isRequired,
  im_2: PropTypes.number.isRequired,
  im_3: PropTypes.number.isRequired,
  im_4: PropTypes.number.isRequired,
  im_5: PropTypes.number.isRequired,
  im_6: PropTypes.number.isRequired,
  im_7: PropTypes.number.isRequired
};

export default ImageSpinner;