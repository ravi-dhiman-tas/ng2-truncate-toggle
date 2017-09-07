# ng2-truncate-toggle
- - -

### Installation

1. You can install ***ng2-truncate-toggle*** using npm

  ```bash
  npm install ng2-truncate-toggle --save
  ```


## API

### Import
```typescript
import { NgTruncateToggle } from 'ng2-truncate-toggle';

// In your App's module:
imports: [
   NgTruncateToggle
]
```

### Usage
```typescript
{{ longString | truncate: 20 }}
```

#### Truncate with toggle
```typescript
{{ longString | truncate: { maxLength: 20, controls: toggle, elipse: '...' } }}

<truncate-controls (onChange)="toggle = $event"></truncate-controls>
```