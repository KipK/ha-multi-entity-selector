// Example of how to import and use the multi-entity-selector component

// Method 1: Import the component to register it
// This is the recommended way if you're not extending the component
import 'ha-multi-entity-selector';

// TypeScript will not complain about unused imports with this method
// The component is registered with the custom elements registry
// and can be used in your HTML

// Example of how to use the component in your HTML:
// <multi-entity-selector
//   .hass=${hass}
//   .entities=${['light.living_room', 'switch.kitchen']}
//   @entities-changed=${handleEntitiesChanged}
// ></multi-entity-selector>

// Method 2: Import and use the class directly
// Use this method if you need to extend the component or use its types
import { MultiEntitySelector } from 'ha-multi-entity-selector';
import { EntityConfig } from 'ha-multi-entity-selector';

// Example function that uses the imported types
function handleEntitiesChanged(event: CustomEvent) {
  const entities: EntityConfig[] = event.detail.entities;
  console.log('Entities changed:', entities);
}

// Example of programmatically creating the element
function createMultiEntitySelector() {
  const selector = document.createElement('multi-entity-selector') as MultiEntitySelector;
  selector.hass = window.hass; // Assuming hass is available globally
  selector.entities = ['light.living_room', 'switch.kitchen'];
  selector.addEventListener('entities-changed', (e) => handleEntitiesChanged(e as CustomEvent));
  return selector;
}

// Note: If you're only using the component in HTML templates and not
// directly referencing the class in your TypeScript code, you can use Method 1
// to avoid the "declared but never read" TypeScript error.
