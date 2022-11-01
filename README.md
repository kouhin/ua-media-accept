# ua-media-accept

Generate `Accept` header by UserAgent for media request.

## Usage

```javascript
import { generateAcceptHeaderForImage } from "ua-media-accept";

const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36";

const acceptHeader = generateAcceptHeaderForImage(userAgent);
// image/avif,image/webp,image/apng,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```
