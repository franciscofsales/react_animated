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

export function sequence(animations, repeat) {
  var anims = getTimings(animations);

  let animate = ()=>{
    if(repeat) {
      animations.map(anim => anim.reset());
      Animated.sequence(anims).start(animate);
    }
    else
      Animated.sequence(anims).start();
  };
  animate();
}

export function parallel() {
  
}