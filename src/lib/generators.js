import { Animated } from 'react-native';

function getTimings(animations) {
  var anims = [];
  for(let i = 0; i < animations.length; i++) {
    let anim = animations[i];
    for(let k = 0; k < anim._events.length; k++) {
      let event = anim._events[k];
      if(event.delay > 0)
        anims.push(Animated.delay(event.delay));
      anims.push(Animated.timing(anim.state, event));
    }
  }
  return anims;
}

function applyOperation(op, animations, repeat) {
  var anims = getTimings(animations);
  let animate = ()=>{
    if(repeat) {
      animations.map(anim => anim.reset());
      op(anims).start(animate);
    }
    else
      op(anims).start();
  };
  animate();
}

function sequence() {
  applyOperation(Animated.sequence, ...arguments);
}

function parallel() {
  applyOperation(Animated.parallel, ...arguments);
}

module.exports = {sequence, parallel};