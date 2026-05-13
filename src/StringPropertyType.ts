import type {ScalarPropertyType} from "./ScalarPropertyType";

/**
 * Represents a sequence of characters, optionally following a specific format.
 */
export interface StringPropertyType extends ScalarPropertyType {
    type: "string"
    default?: string
    format?: string
}

