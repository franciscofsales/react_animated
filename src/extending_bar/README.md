
## Properties
Name                | Default                  |  Type      | Description
--------------------|--------------------------|------------|--------------------------------------------------------
delay               | 1000                     | Number(ms) | Initial delay before animation plays.
stroke              | '#de0e1b'                | String     | Color for the border.
fill                | 'transparent'            | String     | Color for the center section.
width               | 300                      | Number(dp) | Width of center section after animation.
borderWidth         | 1                        | Number(dp) | Width of the border.
centerHeight        | 6                        | Number(dp) | Height of the center section.
duration            | 2000                     | Number(ms) | The duration that the animation will take to complete.

## Examples
```
<ExtendingBar/>
<ExtendingBar fill={'green'}  stroke={'blue'} width={200}/>
<ExtendingBar stroke={'purple'} centerHeight={10} borderWidth={4} width={400}/>
<ExtendingBar stroke={'blue'} centerHeight={30} duration={1000}/>
<ExtendingBar stroke={'#64cdc8'} duration={6000}/>
```
![](https://www.dropbox.com/s/hdsbypeee5avqe6/extending_bar_1.gif?dl=0)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_2.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_3.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_4.gif?raw=true)
![](https://github.com/Introvertuous/react_native_animated/blob/master/src/extending_bar/assets/center_5.gif?raw=true)
