import type {ScalarPropertyType} from "./ScalarPropertyType";

/**
 * Represents a true or false value.
 */
export interface BooleanPropertyType extends ScalarPropertyType {
    type: "boolean"
}

