# React Native Animated
This package is a collection of animated components as well as a few utilities for creating animations in react native.

## Install
To install, use npm:

```
npm install react_native_animated --save
```

Some components require svg's so you will also need to install react-native-svg.
Ideally in the future react native will have svg support removing the need for this peer dependency.

Use npm and react-native linking to install:
```
npm install react-native-svg --save
react-native link react-native-svg
```

## Utilities
Here is an example of the utilties from an animated component in this package ([Extending Bar](https://github.com/Introvertuous/react_native_animated/tree/master/src/extending_bar)).
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

###[Sliding Text](https://github.com/Introvertuous/react_native_animated/tree/master/src/sliding_text)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/sliding_text/assets/demo.gif?raw=true)

###[Extending Bar](https://github.com/Introvertuous/react_native_animated/tree/master/src/extending_bar)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_1.gif?raw=true)

###[Image Spinner](https://github.com/Introvertuous/react_native_animated/tree/master/src/image_spinner)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/image_spinner/assets/demo.gif?raw=true)
