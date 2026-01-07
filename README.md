# lib-cqmag-data

Data files related to CQ Magazine, its sponsored contests and related information.

## Installation

```bash
npm install @ham2k/lib-cqmag-data
```

## Usage

This library supports both ESM (ES Modules) and CommonJS formats.

### ES Modules (ESM)

```typescript
import { CQZONES, CQWW_ENTITIES_BY_PREFIX } from '@ham2k/lib-cqmag-data'

console.log(CQZONES['1'].name) // "Northwestern North America"
console.log(CQWW_ENTITIES_BY_PREFIX['K'].dxccName) // "United States of America"
```

### CommonJS (CJS)

```javascript
const { CQZONES, CQWW_ENTITIES_BY_PREFIX } = require('@ham2k/lib-cqmag-data')

console.log(CQZONES['1'].name) // "Northwestern North America"
console.log(CQWW_ENTITIES_BY_PREFIX['K'].dxccName) // "United States of America"
```

## Exports

- `CQZONES` - CQ Magazine zones (1-40)
- `CQZONES_FOR_STATES` - State-specific CQ zones
- `CQWW_ENTITIES_BY_PREFIX` - CQWW contest entities indexed by prefix

## TypeScript Support

Full TypeScript definitions are included. Types are automatically available when using TypeScript.

## Development

```bash
# Generate data files
npm run generate

# Build the library
npm run build

# Run tests
npm test
```
