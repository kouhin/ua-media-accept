# ua-media-accept

Generate `Accept` header by UserAgent for media request.

## Usage

``` javascript
import { generateAcceptHeaderForImage } from 'ua-media-accept';

const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36';

const acceptHeader = generateAcceptHeaderForImage(userAgent);
// 
```

