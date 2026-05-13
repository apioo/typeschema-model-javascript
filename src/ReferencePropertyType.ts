import type {PropertyType} from "./PropertyType";

/**
 * A reference to a defined type in the global 'definitions' map.
 */
export interface ReferencePropertyType extends PropertyType {
    type: "reference"
    target?: string
    template?: Record<string, string>
}

