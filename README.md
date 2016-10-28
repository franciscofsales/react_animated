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
![](https://www.dropbox.com/s/1lorwv4dt5zke6w/sliding_text.gif?dl=1)

###[Extending Bar](https://github.com/Introvertuous/react_native_animated/tree/master/src/extending_bar)
![](https://www.dropbox.com/s/hdsbypeee5avqe6/extending_bar_1.gif?dl=1)

###[Image Spinner](https://github.com/Introvertuous/react_native_animated/tree/master/src/image_spinner)
![](https://www.dropbox.com/s/acecb0z14rjhaxq/image_spinner.gif?dl=1)

###[Scrolling Image](https://github.com/Introvertuous/react_native_animated/tree/master/src/scrolling_image)
![](https://www.dropbox.com/s/dhtrnel371unabp/scrolling_image.gif?dl=1)

###[Popping Text](https://github.com/Introvertuous/react_native_animated/tree/master/src/popping_text)
![](https://www.dropbox.com/s/tkf8b7tzj2qffuh/popping_text.gif?dl=1)
