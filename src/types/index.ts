
// Define a base interface for entity configurations in Lovelace rows
export interface EntityConfig {
    type?: string; // For special row types, not used in this selector yet
    entity?: string; // Standard entity ID
    name?: string;
    icon?: string;
    // Allow other properties
    [key: string]: any;
}

// Schema item for form fields
export interface SchemaItem {
    name: string;
    type?: string;
    selector?: Record<string, unknown>;
    label?: string;
    helper_text?: string;
    required?: boolean;
    schema?: SchemaItem[];
}

// Define the event detail structure for changes
export interface MultiEntitiesChangedEvent {
    entities: EntityConfig[]; // Emit the full config objects
}

// Define the event detail structure for requesting detailed edit
export interface RequestEditDetailEvent {
    index: number;
    config: EntityConfig;
}

// Extend global HASSDomEvents interface
declare global {
    interface HASSDomEvents {
        "entities-changed": MultiEntitiesChangedEvent;
        "request-edit-detail": RequestEditDetailEvent;
    }
}