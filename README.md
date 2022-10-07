# use-image-dimensions
A React Hook that loads image dimensions from any URL. Supports `@2, @3, @4, @x` images out of the box.

## Usage

```typescript jsx
import {useImageDimensions} from '@sebkolind/use-image-dimensions'

const Component = () => {
  /**
   * If the image URL contains a zoom multiplier (@2, @3, @4),
   * the dimensions will be calculated by dividing width/height with the multiplier.
   */
  const {width, height} = useImageDimensions('image-url@2.jpg',
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
    <div>width: {width}, height: {height}</div>
  )
}
```
