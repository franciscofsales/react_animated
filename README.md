# React Native Animated
This package is a collection of animated components as well as a few utilities for creating animations in react native.

## Install

To install, use npm:
```
npm install react_native_animated --save
```

## Utilities
I export some utilities that should make writing animations more simplistic and straight forward. 
Here is an example from an animated component in this package ([Extending Bar](https://github.com/Introvertuous/react_native_animated/tree/master/src/extending_bar)).
```
//...
  componentDidMount() {
    sequence([
      animation(this.state.pillarWidth)
        .to(this.props.borderWidth).ease(Easing.elastic(0.4)).delay(this.props.delay),
      animation(this.state.width)
        .to(this.props.width).in(this.props.duration).ease(Easing.elastic(0.4))
    ], true);
  }
//...
```

## Components
###[Extending Bar](https://github.com/Introvertuous/react_native_animated/tree/master/src/extending_bar)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_1.gif?raw=true)

###[Image Spinner](https://github.com/Introvertuous/react_native_animated/tree/master/src/image_spinner)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/image_spinner/assets/demo.gif?raw=true)
