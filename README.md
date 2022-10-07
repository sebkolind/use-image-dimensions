# use-image-dimensions
A React Hook that loads image dimensions from any URL.

## Usage

```typescript jsx
import {useImageDimensions} from '@sebkolind/use-image-dimensions'

const MyComponent = () => {
  const {width, height} = useImageDimensions('image-url.jpg',
    // All options are optional.
    {
      // If you are concerned with UI flickering this could be helpful.
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
