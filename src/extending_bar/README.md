
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
![](https://www.dropbox.com/s/hdsbypeee5avqe6/extending_bar_1.gif?dl=1)
![](https://www.dropbox.com/s/n2kr0nhpmt8s4ql/extending_bar_2.gif?dl=1)
![](https://www.dropbox.com/s/dkkkq2gr5ek23kj/extending_bar_3.gif?dl=1)
![](https://www.dropbox.com/s/tfcm233tw07n5ll/extending_bar_4.gif?dl=1)
![](https://www.dropbox.com/s/pwmc4tbyprfbpzx/extending_bar_5.gif?dl=1)
