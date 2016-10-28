
## Properties

Name          | Default     |  Type         | Description
--------------|-------------|---------------|-----------------------------------
image         | N/A         | Number(asset) | Image that will be translated.
color         | black       | String        | Background color for the image.
maxX          | 2500        | Number(dp)    | Max horizontal translation.
maxY          | 1000        | Number(dp)    | Max vertical translation.

## Examples
```
const fog = require('./fog.png');
/...
  render() {
    return (
      <View>
        <ScrollingImage image={fog} color='black'/>
      </View>
    );
  }
```
![](https://www.dropbox.com/s/dhtrnel371unabp/scrolling_image.gif?dl=1)
