# React Animated
This package is a collection of animated components as well as a few utilities for creating animations in react. The goal is that everything should be compatible with either the react or the react native environment.

## Install
To install, use npm:
```
npm install react_animated --save
```

## Utilities
The idea is to provide a bunch of [generators](https://github.com/Introvertuous/react_animated/blob/master/src/lib/generators.js) and a single [animation](https://github.com/Introvertuous/react_animated/blob/master/src/lib/animation.js) "class" to easily chain together complex animations. Please refer to those files for details on their usage.

Here is an example from an animated component in this package ([Extending Bar](https://github.com/Introvertuous/react_native_animated/tree/master/src/extending_bar)).
```
//...
  componentDidMount() {
    sequence([
      factory(Animation, this.state.pillarWidth)
        .to(this.props.borderWidth).ease(Easing.elastic(0.4)).delay(this.props.delay),
      factory(Animation, this.state.width)
        .to(this.props.width).in(this.props.duration).ease(Easing.elastic(0.4))
    ]).start(true);
  }
//...
```

## Components (instructions & examples included)
- [Sliding Text](https://github.com/Introvertuous/react_native_animated/tree/master/src/sliding_text)
- [Extending Bar](https://github.com/Introvertuous/react_native_animated/tree/master/src/extending_bar)
- [Image Spinner](https://github.com/Introvertuous/react_native_animated/tree/master/src/image_spinner)
- [Scrolling Image](https://github.com/Introvertuous/react_native_animated/tree/master/src/scrolling_image)
- [Popping Text](https://github.com/Introvertuous/react_native_animated/tree/master/src/popping_text)

## Blogging
- [From Stranger Things to React Native](https://medium.com/@introvertuouso/from-stranger-things-to-react-native-f2434b3773a7)
