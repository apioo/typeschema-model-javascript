import type {ScalarPropertyType} from "./ScalarPropertyType";

/**
 * Represents a whole number without fractional components.
 */
export interface IntegerPropertyType extends ScalarPropertyType {
    type: "integer"
    default?: number
}

