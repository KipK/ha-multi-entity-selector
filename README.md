# Home Assistant Multi-Entity Selector

A reusable web component for selecting and managing multiple entities in Home Assistant custom cards.
It mimics the "entities" home-assistant card configuration screen.

![image](https://github.com/user-attachments/assets/6d4d58de-0ccf-46d5-bdc5-2c9dcaf33a7b)


## Features

- Select multiple Home Assistant entities with a user-friendly interface
- Drag and drop reordering of entities
- Edit entity display names and icons
- Prevent duplicate entity selections
- Fully compatible with Home Assistant's design system
- Easy to integrate into any custom card

## Installation

```bash
npm i @kipk/ha-multi-entity-selector
```

## Usage

### Basic Usage

```js
import { MultiEntitySelector } from 'ha-multi-entity-selector';

// The component is automatically registered as 'multi-entity-selector'

// In your render method:
render() {
  return html`
    <multi-entity-selector
      .hass=${this.hass}
      .entities=${this.config.entities || []}
      label="Select Entities"
      @entities-changed=${this._entitiesChanged}
    ></multi-entity-selector>
  `;
}

// Handle changes
_entitiesChanged(ev) {
  const entities = ev.detail.entities;
  // Do something with the updated entities
  console.log('Entities updated:', entities);
}
```

### Input Format

The component accepts an array of entity IDs (strings) or entity configuration objects:

```js
// Simple format with just entity IDs
const entities = [
  'light.living_room',
  'switch.tv',
  'sensor.temperature'
];

// Advanced format with additional configuration
const entitiesWithConfig = [
  'light.living_room',
  {
    entity: 'switch.tv',
    name: 'Television',
    icon: 'mdi:television'
  },
  'sensor.temperature'
];
```

### Output Format

The component always outputs an array of entity configuration objects through the `entities-changed` event:

```js
// Output format
[
  { entity: 'light.living_room' },
  { entity: 'switch.tv', name: 'Television', icon: 'mdi:television' },
  { entity: 'sensor.temperature' }
]
```

## Properties

| Property  | Type                          | Description                                      |
|-----------|-------------------------------|--------------------------------------------------|
| hass      | HomeAssistant                 | Home Assistant object (required)                 |
| entities  | (string \| EntityConfig)[]    | Array of entity IDs or configuration objects     |
| label     | string                        | Optional label for the component                 |

## Events

| Event             | Detail                       | Description                                      |
|-------------------|------------------------------|--------------------------------------------------|
| entities-changed  | { entities: EntityConfig[] } | Fired when the entities array changes            |

## Types

```ts
interface EntityConfig {
  entity?: string;  // Entity ID
  name?: string;    // Display name
  icon?: string;    // Icon (mdi:icon-name format)
  type?: string;    // For special row types
  [key: string]: any; // Other properties
}
```

## Dependencies

This component requires the following Home Assistant components to be available:

- ha-form
- ha-icon-button
- ha-entity-picker
- ha-dialog
- ha-sortable
- ha-svg-icon

These components are automatically loaded by the package when used in a Home Assistant environment.

## Development

### Setup

```bash
git clone [repository-url]
cd ha-multi-entity-selector
npm install
```

### Build

```bash
npm run build
```

### Run Demo

```bash
npm start
```

## License

MIT
