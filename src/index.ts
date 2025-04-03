import { loadHaComponents } from './utils/load-ha-components';
import { MultiEntitySelector } from './multi-entity-selector';

// Export the component class
export { MultiEntitySelector };

// Export types
export * from './types';

// Load HA components when this module is imported
loadHaComponents().catch(error => {
  console.error('Failed to load Home Assistant components:', error);
});

// Export default for convenience
export default MultiEntitySelector;