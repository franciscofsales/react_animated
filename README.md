# React Native Image Spinner

This package is a react native component that takes 8 icon images and animates them spinning in a circle. At the moment the images will scale down to 32x32 so if you use an image with any other dimension (say 64x64) the performance hit will be severe (don't do it). Optionally you can provide a background image that the 8 icons will rotate around.

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
