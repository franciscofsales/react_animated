
## Install
You will need react-native-svg to use this component.
Use npm and react-native linking to install:

```
npm install react-native-svg --save
react-native link react-native-svg
```

## Properties
Name                | Default                  |  Type    | Description
--------------------|--------------------------|----------|---------------------------
font                | N/A                      | Object   | The svg-json generated from a font file (see FontToJsvg command from [media_utilities](https://github.com/Introvertuous/media_utilities)).
letters             | N/A                      | Array    | Array of letter objects (see AnimatedLetter.js)
home                | N/A                      | Object   | The home position for the entire animation.
delay               | 0                        | Number   | Delay before the animation begins.
stroke              | 'red'                    | String   | Color for the letter's outline.

## Examples
```
const ttf = require('../../fonts/benguiat.json');

//...

render () {
  let letters = [
    Object.create(Animation).init('S', 42, -6, -6, 10, 0.65)
      .to('home').in(7000),
    Object.create(Animation).init('T', 100, -46, 22, 0, 0.5)
      .to('home').in(5000),
    Object.create(Animation).init('R', 112, -16, 44, 0, 0.5)
      .to('home').in(4000),
    Object.create(Animation).init('A', 145, -16, 72, 0, 0.5)
      .to('home').in(4000),
    Object.create(Animation).init('N', 178, -16, 95, 0, 0.5)
      .to('home').in(4000),
    Object.create(Animation).init('G', 208, -16, 120, 0, 0.5)
      .to('home').in(4000),
    Object.create(Animation).init('E', 224, -46, 146, 0, 0.5)
      .to('home').in(7000),
    Object.create(Animation).init('R', 265, 66, 167, 82, 0.65)
      .to('home').in(5000),

    Object.create(Animation).init('T', 94, 6, 30, 22, 0.5)
      .to('home').in(4000),
    Object.create(Animation).init('H', 130, 41, 52, 22, 0.5)
      .to('home').in(5000),
    Object.create(Animation).init('I', 147, 6, 79, 22, 0.5)
      .to('home').in(4000),
    Object.create(Animation).init('N', 170, 16, 92, 22, 0.5)
      .to('home').in(3000),
    Object.create(Animation).init('G', 208, 6, 115, 22, 0.5)
      .to('home').in(4000),
    Object.create(Animation).init('S', 220, 56, 142, 22, 0.5)
      .to('home').in(7000),
  ];

  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <Separator delay={6800} duration={500} centerHeight={2} width={204}/>
      <SlidingText font={ttf} letters={letters} home={{x:78, y:-16}} delay={1000} stroke={'red'} />
      <View style={{position:'absolute', right: 254, top: 54}}>
        <Separator delay={7600} duration={500} centerHeight={2} width={28}/>
      </View>
      <View style={{position:'absolute', left: 248, top: 54}}>
        <Separator delay={7600} duration={500} centerHeight={2} width={32}/>
      </View>
    </View>
  )
}

```
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/sliding_text/assets/stranger_things.gif?raw=true)

```
const ttf = require('../../fonts/benguiat.json');

//...

render () {
  let letters = [
    Object.create(Animation).init('H', 0, -200, 0, 0)
      .to('home').in(4500),
    Object.create(Animation).init('E', 50, -200, 50, 0)
      .to('home').in(4500),
    Object.create(Animation).init('L', 90, -200, 90, 0)
      .to('home').in(4500),
    Object.create(Animation).init('L', 130, -200, 130, 0)
      .to('home').in(4500),
    Object.create(Animation).init('O', 160, -200, 160, 0)
      .to('home').in(4500),
    Object.create(Animation).init('W', -200, 160, 0, 60)
      .to('home').in(2500),
    Object.create(Animation).init('O', -200, 160, 60, 60)
      .to('home').in(3000),
    Object.create(Animation).init('R', -200, 160, 110, 60)
      .to('home').in(3500),
    Object.create(Animation).init('L', -200, 160, 160, 60)
      .to('home').in(4000),
    Object.create(Animation).init('D', -200, 160, 200, 60)
      .to(100, 300).in(500).delay(4000)
      .to(200, 300).in(500)
      .to(100, 500).in(1000)
      .to(300, 160).in(500)
      .to('home').in(500),
  ];

  return (
    <View>
      <SlidingText font={ttf} letters={letters} home={{x:10, y:100}} delay={1000} />
    </View>
  )
}
```
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/sliding_text/assets/hello_world.gif?raw=true)

```
const ttf = require('../../fonts/flashrogers.json');

//...

render () {
  let letters = [
    Object.create(Animation).init('Z', -100, 100, 0, 0)
      .to('home').in(1000).ease(Easing.elastic(1.5))
      .to(-100, 100).in(1000).delay(3500).ease(Easing.elastic(1.5)),
    Object.create(Animation).init('O', -100, 100, 30, 0)
      .to('home').in(1000).ease(Easing.elastic(1.5))
      .to(-100, 100).in(1000).delay(3500).ease(Easing.elastic(1.5)),
    Object.create(Animation).init('O', -100, 100, 60, 0)
      .to('home').in(1000).ease(Easing.elastic(1.5))
      .to(-100, 100).in(1000).delay(3500).ease(Easing.elastic(1.5)),
    Object.create(Animation).init('M', -100, 100, 100, 0)
      .to('home').in(1000).ease(Easing.elastic(1.5))
      .to(-100, 100).in(1000).delay(3500).ease(Easing.elastic(1.5)),

    Object.create(Animation).init('F', 600, 160, 0, 60)
      .to('home').in(500).delay(1000)
      .to(600,160).in(500).delay(2500),
    Object.create(Animation).init('L', 600, 160, 30, 60)
      .to('home').in(500).delay(1000)
      .to(600,160).in(500).delay(2500),
    Object.create(Animation).init('A', 600, 160, 60, 60)
      .to('home').in(500).delay(1000)
      .to(600,160).in(500).delay(2500),
    Object.create(Animation).init('S', 600, 160, 90, 60)
      .to('home').in(500).delay(1000)
      .to(600,160).in(500).delay(2500),
    Object.create(Animation).init('H', 600, 160, 120, 60)
      .to('home').in(500).delay(1000)
      .to(600,160).in(500).delay(2500),

    Object.create(Animation).init('R', 150, -100, 0, 120)
      .to(150, 220).in(500).delay(1500)
      .to('home').in(1000),
    Object.create(Animation).init('E', 150, -100, 40, 120)
      .to(150, 220).in(500).delay(1500)
      .to('home').in(1000),
    Object.create(Animation).init('V', 150, -100, 70, 120)
      .to(150, 220).in(500).delay(1500)
      .to('home').in(1000),
    Object.create(Animation).init('E', 150, -100, 100, 120)
      .to(150, 220).in(500).delay(1500)
      .to('home').in(1000),
    Object.create(Animation).init('R', 150, -100, 130, 120)
      .to(150, 220).in(500).delay(1500)
      .to('home').in(1000),
    Object.create(Animation).init('S', 150, -100, 170, 120)
      .to(150, 220).in(500).delay(1500)
      .to('home').in(1000),
    Object.create(Animation).init('E', 150, -100, 200, 120)
      .to(150, 220).in(500).delay(1500)
      .to('home').in(1000),
  ];

  return (
    <View>
      <SlidingText font={ttf} letters={letters} home={{x:10, y:100}} delay={1000} stroke={'blue'} />
    </View>
  )
}
```
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/sliding_text/assets/fast.gif?raw=true)


```
const ttf = require('../../fonts/deathstar.json');

//...

render () {
  let letters = [
    Object.create(Animation).init('E', 10, -100, 0, 0)
      .to(10, 50).in(1000)
      .to(150, 150).in(500).delay(1000)
      .to(-60, 80).in(2000).delay(4000),
    Object.create(Animation).init('V', 10, -100, 0, 0)
      .to(10, 100).in(1200)
      .to(150, 150).in(500).delay(1200)
      .to(-70, -70).in(2000).delay(4200),
    Object.create(Animation).init('E', 10, -100, 0, 0)
      .to(10, 150).in(1400)
      .to(150, 150).in(500).delay(1400)
      .to(150, -70).in(2000).delay(4000),
    Object.create(Animation).init('R', 10, -100, 0, 0)
      .to(10, 200).in(1600)
      .to(150, 150).in(500).delay(1600)
      .to(350, -70).in(2000).delay(4000),
    Object.create(Animation).init('Y', 10, -100, 0, 0)
      .to(10, 250).in(1800)
      .to(150, 150).in(500).delay(1800)
      .to(370, 100).in(2000).delay(4000),

    Object.create(Animation).init('T', 290, 800, 0, 0)
      .to(290, 50).in(1800)
      .to(150, 150).in(500).delay(2200)
      .to(-60, 200).in(2000).delay(4000),
    Object.create(Animation).init('H', 290, 800, 0, 0)
      .to(290, 100).in(1600)
      .to(150, 150).in(500).delay(2800)
      .to(-50, 320).in(2000).delay(4000),
    Object.create(Animation).init('I', 290, 800, 0, 0)
      .to(290, 150).in(1400)
      .to(150, 150).in(500).delay(3400)
      .to(150, 600).in(2000).delay(3800),
    Object.create(Animation).init('N', 290, 800, 0, 0)
      .to(290, 200).in(1200)
      .to(150, 150).in(500).delay(4000)
      .to(250, 420).in(2000).delay(4000),
    Object.create(Animation).init('G', 290, 800, 0, 0)
      .to(290, 250).in(1000)
      .to(150, 150).in(500).delay(4600)
      .to(380, 220).in(2000).delay(4000),
  ];

  return (
    <View>
      <SlidingText font={ttf} letters={letters} home={{x:10, y:100}} delay={1000} stroke={'green'} />
    </View>
  )
}

```
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/sliding_text/assets/big_bang.gif?raw=true)
