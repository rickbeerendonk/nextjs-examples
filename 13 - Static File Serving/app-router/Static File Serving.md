# Static File Serving

## Configuration

In `next.config.mjs` add `output: 'export'`:

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add the next line:
  output: 'export'
};

export default nextConfig;
```
