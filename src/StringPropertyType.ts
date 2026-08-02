import type {ScalarPropertyType} from "./ScalarPropertyType";

/**
 * Represents a sequence of characters, with optional formatting rules.
 */
export interface StringPropertyType extends ScalarPropertyType {
    type: "string"
    default?: string
    format?: string
}

