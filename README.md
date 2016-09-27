# React Native Image Spinner

This package is a react native component that takes 8 icon images and animates them spinning in a circle. Optionally you can provide a background image that the 8 icons will rotate around. Be sure to use the most recent release of react native as animations are very much a work in progress.

![](https://lh3.googleusercontent.com/Ffz5hlD1lFfbmU-xU8qIuBgz6XxNUava2DgNmQPzBgoCj1p1QgADNRPNZy2nJgir-LYtHOmMtSIu7-B4e50GSYbeh-F1prkMIOJj9XxM7979GOrmgaf05Kf6W-sFXlCzgio-yubOQiKHqglTTWR1gKuUMH_YV40CHd_jq5UaiPMWGkDw5QE1a5mgwzBi_IyNIv9tAQFLsuOcuBgsv1iRRw99lcPhrxJF3Pt9nUdjVx1aI0DvKZC6VHPhq1yG_5XODTG0DdWoM9fOIQOxvoE0wYPM3FgmQQ2vsEZ-397Es2ffamEq4Pm7bQxDpbuPc_yWoXhJQ3RLx9qPxR7hUozAWIEKZiGHC4DUfUFfIn4aXr3BS70GmhpwkDi0XoZdermo-BQRyIyWpeZNmkVE0rtas9WS5qAgO9u75UuSf5CyQcOi_cDJtl9zmBkVglb1dUUWXh8y-hHhPQq7SjTQNE2DOeRjjHmIClncYPg_xZ481MnZjwQXhuqRIx2YIWV5VWU3VGBZZtpUnlzolL3dlEHSd-7qe1dDPrMVdedtELU1gD-wiibQcy5ECLOXl0k0mExyrQlk4jY_XjSgiDxWwmn19ar17xM0qpXVAMYqAVOsYujI9JSi=w480-h270-no)

## Install

To install, use npm:

```
npm install react_native_image_spinner --save
```

## Usage

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

## Examples

[Here](https://github.com/Introvertuous/smart_home/blob/master/mobile/App/Containers/PresentationScreen.js) is the component that produced the animation above.
