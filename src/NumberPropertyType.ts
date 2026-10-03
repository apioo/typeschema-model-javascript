import type {ScalarPropertyType} from "./ScalarPropertyType";

/**
 * Represents a numeric value, including floating-point and decimal numbers.
 */
export interface NumberPropertyType extends ScalarPropertyType {
    type: "number"
    default?: number
}

