import type {ScalarPropertyType} from "./ScalarPropertyType";

/**
 * Represents a floating-point or decimal number.
 */
export interface NumberPropertyType extends ScalarPropertyType {
    type: "number"
}

