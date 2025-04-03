// Type definitions for ha-multi-entity-selector
// Re-export all types from the module

import { MultiEntitySelector } from './multi-entity-selector';
export { MultiEntitySelector } from './multi-entity-selector';
export * from './types';

// Export default for convenience
export default MultiEntitySelector;

// Declare the custom element
declare global {
  interface HTMLElementTagNameMap {
    'multi-entity-selector': MultiEntitySelector;
  }
}
