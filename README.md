# React Native Image Spinner

This package is a react native component that takes 8 icon images and animates them spinning in a circle. Optionally you can provide a background image that the 8 icons will rotate around. Be sure to use the most recent release of react native as animations are very much a work in progress.

![](https://photos.google.com/share/AF1QipO5AE34URNIWKT-fj7Mi3r-kXFtAxC9KShagYfZdCE5ImOu2BsJ8SKPtUsTfvGdEw/photo/AF1QipNT5o0x3qbyFbOup9qrYcaE2_Vt9yhTWPrhXdd7?key=T3dJSldoU0lNNzRiZlNTZ1JKNVExa2M1NzNrSUVB)

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
