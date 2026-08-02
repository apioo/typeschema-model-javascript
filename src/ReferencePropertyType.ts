import type {PropertyType} from "./PropertyType";

/**
 * Represents a reference to a type defined in the global definitions dictionary.
 */
export interface ReferencePropertyType extends PropertyType {
    type: "reference"
    target?: string
    template?: Record<string, string>
}

