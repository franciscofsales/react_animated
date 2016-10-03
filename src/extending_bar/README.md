
## Properties
Name                | Default                  |  Type    | Description
--------------------|--------------------------|----------|---------------------------
delay               | 0                        | Number   | Initial delay (ms) before animation plays.
stroke              | '#de0e1b'                | String   | Color for the border.
fill                | 'transparent'            | String   | Color for the center section.
width               | 300                      | Number   | Width of center section after animation.
borderWidth         | 1                        | Number   | Width of the border.
centerHeight        | 6                        | Number   | Height of the center section.
duration            | 2000ms                   | Number   | The duration (ms) that the animation will take to complete.
flex                | 'center'                 | String   | The justification of the outermost view.

## Examples
```
  <ExtendingBar flex={'flex-start'}/>
  <ExtendingBar fill={"green"}  stroke={"blue"} width={200} flex={'flex-start'}/>
  <ExtendingBar stroke={"purple"} centerHeight={10} borderWidth={4} width={400} flex={'flex-start'}/>
  <ExtendingBar stroke={"blue"} centerHeight={30} duration={1000} flex={'flex-start'}/>
  <ExtendingBar stroke={"#64cdc8"} duration={6000} flex={'flex-start'}/>
```
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/left_1.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/left_2.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/left_3.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/left_4.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/left_5.gif?raw=true)

```
  <ExtendingBar/>
  <ExtendingBar fill={"green"}  stroke={"blue"} width={200}/>
  <ExtendingBar stroke={"purple"} centerHeight={10} borderWidth={4} width={400}/>
  <ExtendingBar stroke={"blue"} centerHeight={30} duration={1000}/>
  <ExtendingBar stroke={"#64cdc8"} duration={6000}/>
```
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_1.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_2.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_3.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_4.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_5.gif?raw=true)

```
  <ExtendingBar flex={'flex-end'}/>
  <ExtendingBar fill={"green"}  stroke={"blue"} width={200} flex={'flex-end'}/>
  <ExtendingBar stroke={"purple"} centerHeight={10} borderWidth={4} width={400} flex={'flex-end'}/>
  <ExtendingBar stroke={"blue"} centerHeight={30} duration={1000} flex={'flex-end'}/>
  <ExtendingBar stroke={"#64cdc8"} duration={6000} flex={'flex-end'}/>
```
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/right_1.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/right_2.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/right_3.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/right_4.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/right_5.gif?raw=true)
