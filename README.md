# ng2-truncate-toggle


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


### Truncate with controls
```typescript
<truncate-text
    [source]="sourceString"
    [max-length]="100"
></truncate-text>
```


### All options for truncate controls
```typescript
<truncate-text
    [show-less-text]="'Less'"
    [show-more-text]="'More'"
    [source]="sourceString"
    [max-length]="100"
    [elipse]="..."
    [show-controls]="true"
></truncate-text>
```


### Event
```typescript
<truncate-text
    (onChange)="callback($event)"
></truncate-text>
```

`onChange`: Fires when you toggle text with controls.


Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/ravid7000/ng2-truncate-toggle/blob/master/LICENSE) file for the full text)
