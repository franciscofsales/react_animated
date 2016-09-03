# React Native Image Spinner

This is package is a react native component that takes 8 icon images (they can be any size but will be scaled down to 32x32) and animates them spinning in a circle. Optionally you can provide a background image that the 8 icons will rotate around. Also the bouncy part at the end of the gif is just bad looping, it does not actually do that.

![](https://media.giphy.com/media/l2SqdYKF6sPGZ3vhK/giphy.gif)

# Install

To install, use npm:

```
npm install react_native_image_spinner --save
```

# Usage

You simply provide the desired images.

```
<ImageSpinner
  im_0={Images.webcam}
  im_1={Images.battery}
  im_2={Images.bonsai}
  im_3={Images.hospital}
  im_4={Images.light_bulb}
  im_5={Images.microphone}
  im_6={Images.smartphone}
  im_7={Images.temperature}
  back={Images.house}
/>
```

# Examples

[Here](https://github.com/Introvertuous/smart_home/blob/master/mobile/App/Containers/PresentationScreen.js) is the component that produced the animation above.
