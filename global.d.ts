import { LitElement, nothing } from 'lit';

// Define a basic HomeAssistant interface
export interface HomeAssistant {
  states: { [entity_id: string]: HassEntity };
  callService: (domain: string, service: string, data: Record<string, unknown>, target?: ServiceCallTarget, notifyOnError?: boolean, returnResponse?: boolean) => Promise<ServiceCallResponse | void>;
  callWS: <T>(msg: { type: string; [key: string]: any }) => Promise<T>;
  formatEntityState: (entity: HassEntity) => string;
  language: string;
  entities?: Record<string, RegistryEntity>;
  localize: (key: string, ...args: any[]) => string;
}

// Define a basic HassEntity interface
export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
  last_updated: string;
  context: {
    id: string;
    parent_id?: string;
    user_id?: string;
  };
}

export interface RegistryEntity {
  entity_id: string;
  device_id: string;
  original_name?: string;
}

export interface ServiceCallResponse {
  context: {
    id: string;
    parent_id?: string;
    user_id?: string | null;
  };
  response?: string;
}

export interface ServiceCallTarget {
  entity_id?: string | string[];
  device_id?: string | string[];
  area_id?: string | string[];
  floor_id?: string | string[];
  label_id?: string | string[];
}

// Define interfaces for standard HA elements used in this project
interface HaCard extends HTMLElement {
    header?: string;
}

interface HaIcon extends LitElement {
    icon?: string;
    class?: string;
}

interface HaIconButton extends LitElement {
    icon?: string;
    path?: string; // For MDI icons
}

interface HaForm extends LitElement {
    hass?: HomeAssistant;
    data?: Record<string, any>;
    schema?: readonly any[]; // Use specific schema type if available/needed
    computeLabel?: (schema: any) => string;
    computeHelper?: (schema: any) => string | typeof nothing;
    error?: Record<string, string>;
    disabled?: boolean;
}

interface HaEntityPicker extends LitElement {
    hass?: HomeAssistant;
    value?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    allowCustomEntity?: boolean;
    hideIcon?: boolean;
    hideClearIcon?: boolean;
    index?: number;
}

interface HaDialog extends LitElement {
    open?: boolean;
    heading?: string;
    hideActions?: boolean;
}

interface HaSortable extends LitElement {
    handleSelector?: string;
}

interface HaSvgIcon extends LitElement {
    path?: string;
}

interface HaSelector extends LitElement {
    hass?: HomeAssistant;
    selector?: Record<string, any>;
    value?: any;
    label?: string;
    helper?: string;
    disabled?: boolean;
    required?: boolean;
}

interface HaIconPicker extends LitElement {
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

interface HaSelect extends LitElement {
    value?: string;
    fixedMenuPosition?: boolean;
    naturalMenuWidth?: boolean;
}

// Using type intersection for HaTextfield to avoid conflicts with LitElement properties
type HaTextfield = LitElement & {
    type?: string;
    inputmode?: string;
    value?: string;
    label?: string;
    name?: string;
    min?: string;
    maxlength?: string;
    suffix?: string;
    noSpinner?: boolean;
};

// Using type intersection to avoid conflicts with HTMLElement properties
type HaAlert = HTMLElement & {
    type?: 'info' | 'warning' | 'error' | 'success';
    title?: string;
    dismissable?: boolean;
};


interface HTMLElementTagNameMap {
    'ha-card': HaCard;
    'ha-icon': HaIcon;
    'ha-form': HaForm;
    'ha-icon-button': HaIconButton;
    'ha-entity-picker': HaEntityPicker;
    'ha-dialog': HaDialog;
    'ha-sortable': HaSortable;
    'ha-svg-icon': HaSvgIcon;
    'ha-alert': HaAlert;
    'ha-selector': HaSelector;
    'ha-icon-picker': HaIconPicker;
    'ha-select': HaSelect;
    'ha-textfield': HaTextfield;
}
