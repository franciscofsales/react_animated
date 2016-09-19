# React Native Image Spinner

This package is a react native component that takes 8 icon images and animates them spinning in a circle. Optionally you can provide a background image that the 8 icons will rotate around. Be sure to use the most recent release of react native as animations are very much a work in progress.

![](https://lh3.googleusercontent.com/VLo_JxG8FE6Fi6Cf2piqTziVbPVdUkvlWvEwnuKxJ7fgwEsUj_F2LjD1RF511JWq93pk-ky0ip8GVgLW7XnHu7P-OC7qVVCBT5EmtgxXF5XCZJQhKFtxeJtR13HGvGGCPAXIp1d1BgVgMn56kMqVL-3yW8PKfvQrdCW78WS-nRuFq735o41eO7ga5dSR7kpqePVpTGpPbTfTz4iJXwBqzuMAf2iFQcFqbccDkgHJEfyx4XQjN1tZcDspKevkuPkoiwkZORclrzkgnxCxNOhhXr6bQjn-qRCSktLfLJEWUnZh47IvpvpDAD4JmSyiiwy2KchGrKmgXyGc25hgtHCo12-exwABTZ7vLaoWVXVprUwvWX7nVQZIssuoqb1alRSeyWcYYEM2euRdI1j1do46BznxH7CXhB_xuTUiH2IdMl_QFhe4TrzrNSSJw_xkMaLKsDVWMZLIVfuUyY4vSHbfEy6xNZ1bZMLh93tPhzgwk8UDIEFbnnL0UyDyOKahRJXqO4ZuZIavg7iEk--SQVMnuLUtnooYgm7NiJZdAy5nf3hjLl18Rg6hKFe917ceTrAI2t6OMqwisxC03oi051ertCCPztdo9Lj6XxWKCmC9dFqR85ST=w480-h270-no)

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
