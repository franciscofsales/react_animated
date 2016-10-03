import React, { PropTypes } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'
import Svg, {Path} from 'react-native-svg';

const styles = StyleSheet.create({
});

const N_SIZE = 80;
const N_Y = 60;
const N_X = 5;

export default class SlidingText extends React.Component {
  static propTypes = {
    font: PropTypes.object.isRequired,
    letters: PropTypes.array.isRequired,
    home: PropTypes.object.isRequired,
    delay: PropTypes.number,
    stroke: PropTypes.string
  }

  static defaultProps = {
    delay: 0,
    stroke: 'red'
  }

  constructor(props){
    super(props);
    this.state={};

    for(let i = 0; i < props.letters.length; i++) {
      let letter = props.letters[i];
      let normalize = (letter.scaling*N_SIZE) * i;
      let position = new Animated.ValueXY({x:letter.ix, y: letter.iy - normalize});
      this.state['p' + i] = position;

      let events = letter._events;
      for(let j = 0; j < events.length; j++) {
        let event = events[j];
        if(event.special) {
          switch(event.special) {
            case 'home':
              event.toValue = {
                x:this.props.home.x + letter.px,
                y:this.props.home.y + letter.py
              };
              break;
            //...
          }
          delete event.special;
        }
        //event.useNativeDriver = true;
        event.toValue.y -= normalize;
        events[j] = Animated.timing(position, event);
      }
      letter._events = Animated.sequence(events);
    }

    this.animate = this.animate.bind(this);
    this.renderSvg = this.renderSvg.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let sequences = [];
    for(let i = 0; i < this.props.letters.length; i++)
      sequences.push(this.props.letters[i]._events);
    let animated = Animated.sequence([
      Animated.delay(this.props.delay),
      Animated.parallel(sequences)
    ]);
    animated.start();
  }

  renderSvg(o, i) {
    return (
      <Animated.View style={{transform: this.state['p' + i].getTranslateTransform()}} >
        <Svg height={o.scaling*N_SIZE} width={o.scaling*N_SIZE} >
          <Path scale={o.scaling+''} x={N_X*o.scaling+''} y={o.scaling*N_Y+''} d={this.props.font[o.letter]} stroke={this.props.stroke} />
        </Svg>
      </Animated.View>
    );
  }


  render() {
    const {letters} = this.props;

    return (
      <View>
        {letters.map(this.renderSvg)}
      </View>
    );
  }
}
