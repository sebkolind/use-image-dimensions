# use-image-dimensions
A React Hook that loads image dimensions from any URL. Supports `@2, @3, @4, @x` images out of the box.

## Installation

```sh
npm install @sebkolind/use-image-dimensions
```

## Use Case

This hook is useful if you need to know the dimensions of an image before it is loaded. This can be useful for layout calculations or for preloading images.
It will help you avoid layout shifts when the image is loaded.

## Usage

```jsx
import {useImageDimensions} from '@sebkolind/use-image-dimensions'

const url = 'image-url@2.jpg'

const Component = () => {
  /**
   * If the image URL contains a zoom multiplier (@2, @3, @4),
   * the dimensions will be calculated by dividing width/height with the multiplier.
   */
  const {width, height} = useImageDimensions(url,
    {
      /**
       * Optional
       *
       * If you are concerned with UI flickering this could be helpful.
       * Potential zoom multiplier will not be taken into consideration here,
       * as this is a manual override of the hooks functionality.
       */
      initialDimensions: {
        width: 300,
        height: 120,
      }
    }
  )
  
  return (
    <img src={url} width={width} height={height} />
  )
}
```
